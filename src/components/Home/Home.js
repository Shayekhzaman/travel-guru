import React from 'react';
import { FormControl } from 'react-bootstrap';
import Logo from '../../image/Logo.png';
import './Home.css'
import { useHistory, useParams } from 'react-router-dom';



const Home = () => {
  const history = useHistory();
  
  const destinationHandle =(props)=>{
   history.push("/booking/destination");
    console.log(props);
  
    
  }
  

  return (
    <div className="container" >
        <nav>
          <img src={Logo} style={{ height: "50px", marginLeft: "100px", marginRight: "50px", }} alt="" />
          <FormControl className="searchArea" type="text" placeholder="     Search Your Destination..."></FormControl>
          <a href="/news">News</a>
          <a href="/destination">Destination</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
          <a href="/login"><button className="button">Login</button></a>
        </nav>
      
      <div className="destinationArea">
      <input  onClick={()=>destinationHandle('cox bazar')} type="button" value="COX'S BAZAR" className="buttonBg coxBazar"/>   
      <input onClick={()=>destinationHandle('sreemangal')} type="button" value="SREEMANGAL" className="buttonBg sreemangal"/>   
      <input onClick={()=>destinationHandle('sundarban')} type="button" value="SUNDARBANS" className="buttonBg sundarban"/>   
      </div>  
    </div>
  );
};

export default Home;