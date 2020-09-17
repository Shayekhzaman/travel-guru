import React from 'react';
import Logo from '../../image/Logo.png';
import '../Home/Home.css';
import './Hotel.css';

const Hotel = () => {
    const hotel = [
        {
            name: 'Qiu Hotel Sukhumvit ',
            description: 'Qiu Hotel Sukhumvit 79 is just a 3-minute walk from On Nut BTS SkyTrain Station. Offering spacious rooms with a satellite TV, it features an outdoor pool and free WiFi. The rooms and apartments at Qiu Hotel Sukhumvit include a fridge and in-room safe.The hotel’s restaurant offers different cuisines with a la carte menu everyday.',
            img: 'https://cf.bstatic.com/images/hotel/max1024x768/681/68184730.jpg',
            price:'100'
        },
        {
            name: 'Marino Hotel - Best near Airport',
            description:'Marino Hotel - Best near Airport provides modern accommodations within a 5-minute drive of the Hajrat Shajalal International Airport and Airport Railway Station. Located in Uttara area, Dhaka, it has a business center which provides desktops with free Wi-Fi. Free parking is also available.',
            img: 'https://cf.bstatic.com/images/hotel/max1024x768/236/236750751.jpg',
            price:'120'
        },
        {
            name: 'A World of Benefits & Privileges Awaits You',
            description:'Enjoy much more beyond Golden Circle exclusive offers. Every time you stay with us, you will enjoy exclusive privileges and benefits across many different aspects of our hotel and resort offerings.',
            img: 'https://sitecore-cd-imgr.shangri-la.com/MediaFiles/0/E/8/%7B0E804162-321D-42D5-992C-CEC0F9A2C1F4%7D200709_slcom_shangrilastaycation.jpg?width=750&quality=90',
            price:'150'
        }
    ];
    console.log(hotel[0].img);

    return (
        <div >
            <div>
                <nav style={{ borderBottom: '1px solid black' }}>
                    <img src={Logo} style={{ height: "50px", marginLeft: "100px", marginRight: "450px", }} alt="" />
                    <a href="/news">News</a>
                    <a href="/destination">Destination</a>
                    <a href="/blog">Blog</a>
                    <a href="/contact">Contact</a>
                    <a href="/login"><button className="button">Login</button></a>
                </nav>
            </div>

            
                <div className="hotel" style={{display:'flex'}}>
                    <img style={{height:'200px', marginRight:'10px'}} src={hotel[0].img}  alt="..." />
                    <div >
                     <h1 >{hotel[0].name}</h1>
                     <br/>
                        <p >{hotel[0].description}</p>
                        <br/>
                        <p >${hotel[0].price}</p>
                    </div>
                </div>
                <div className="hotel" style={{display:'flex'}}>
                    <img style={{height:'200px', marginRight:'80px'}} src={hotel[1].img}  alt="..." />
                    <div >
                     <h1 >{hotel[1].name}</h1>
                     <br/>
                        <p >{hotel[1].description}</p>
                        <br/>
                        <p >${hotel[1].price}</p>
                    </div>
                </div>
                <div className="hotel" style={{display:'flex'}}>
                    <img style={{height:'150px', marginRight:'35px'}} src={hotel[2].img}  alt="..." />
                    <div >
                     <h1 >{hotel[2].name}</h1>
                     <br/>
                        <p >{hotel[2].description}</p>
                        <br/>
                        <p >${hotel[2].price}</p>
                    </div>
                </div>

        </div>

    );
};

export default Hotel;