import React from 'react';
import { FormControl } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import Logo from '../../image/Logo.png';
import './Booking.css';

const Booking = (props) => {
    const history = useHistory();
    const startBooking=()=>{
        history.push('/hotel');
    }
    return (
        <div className="container">
            <nav>
                <img src={Logo} style={{ height: "50px", marginLeft: "100px", marginRight: "50px", }} alt="" />
                <FormControl className="searchArea" type="text" placeholder="     Search Your Destination..."></FormControl>
                <a href="/news">News</a>
                <a href="/destination">Destination</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact</a>
                <a href="/login"><button className="button">Login</button></a>
            </nav>

            <form className="form">
                <label>
                    Origin:
    <br />
                    <input type="text" name="name" />
                </label>
                <br />
                <label>
                    Destination:
    <br />
                    <input type="text" name="name" />
                </label>
                <br />
                <br />
                <label>
                    <input type="text" name="" placeholder="from" />
                    <input type="text" name="" placeholder="to" />
                </label>
                <br/>
                <br/>
                <button onClick={startBooking} className="startBooking">Start Booking</button>

            </form>
        </div>


    );
};

export default Booking;