import React, { useContext, useState } from 'react';
import Logo from '../../image/Logo.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import './Login.css';



const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: ''

    });

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }
    const provider = new firebase.auth.GoogleAuthProvider();



    const signWithGoogle = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, email } = res.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser);
                history.replace(from);

            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }
    

    const signWithFacebook = () => {

    }


    const handleBlur = (e) => {

        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }

        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }

        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setLoggedInUser(newUserInfo);
                  
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                    console.log('sign in user info', res.user);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setLoggedInUser(newUserInfo);

                });
        }
        e.preventDefault();
    }

    return (
        <div>
            <nav>
                <img src={Logo} style={{ height: "50px", marginLeft: "100px", marginRight: "450px", }} alt="" />
                <a href="/news">News</a>
                <a href="/destination">Destination</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact</a>
                <a href="/login"><button className="button">Login</button></a>
            </nav>


            <div className="newSign">
            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
            <label htmlFor="">New User Sign up</label>
            </div>

            <form onSubmit={handleSubmit}>
                {newUser && <input className="input" onBlur={handleBlur} name="name" type="text" placeholder="name" />}
                <br />
                <input className="input" onBlur={handleBlur} type="text" name='email' placeholder="email address" required />
                <br />
                <input className="input" onBlur={handleBlur} type="password" name="password" id="" placeholder="password" required />
                <br />
                <input className="signIn" type="submit" value={newUser ? 'Sign up' : 'Sign In'} />
            </form>

            <div className='submit'>
                <input className="signIn" onClick={signWithGoogle} type="button" value="Continue with Google" />
                <br />
                <input className="signIn" onClick={signWithFacebook} type="button" value="Continue with Facebook" />
            </div>
            
        </div>
    );
};

export default Login;