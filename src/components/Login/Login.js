import React, { useContext, useState } from 'react';
import Logo from '../../image/Logo.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import './Login.css';



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',

    })

    const provider = new firebase.auth.GoogleAuthProvider();


    const signWithGoogle = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { emailVerified, displayName, email } = res.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser);
                history.replace(from);

            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }
    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const passwordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = passwordValid && passwordHasNumber;

        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        console.log(user.email, user.password);
        if (user.email && user.password) {
            console.log("submitting");
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

            <form onSubmit={handleSubmit}>
                <input type="text" onBlur={handleBlur} name="name" id="" placeholder="Your Name" />
                <br />
                <br />
                <input type="email" onBlur={handleBlur} name="email" id="" placeholder="Email" required />
                <br />
                <br />
                <input type="password" name="password" onBlur={handleBlur} id="" placeholder='Password' required />
                <br />
                <br />
                <input type="button" value="Submit" />
            </form>
            <div className='submit'>
                <input onClick={signWithGoogle} type="button" value="Continue with Google" />

            </div>
        </div>
    );
};

export default Login;