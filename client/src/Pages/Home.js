import React,{useState} from "react";
import Header from "../Component/Header";
import mainImg from "../Component/Images/mainImg.png";
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa'; // Import search and location icons
import Featured from "../Component/Featured";
import Footer from "../Component/Footer";
import commitment from "../Component/Images/commitment.png";
import exp from "../Component/Images/exp.png";
import real from "../Component/Images/real.png";
import Switch from "../Component/Switch";


const Home = () => {



  return (
    <div>
      <Header />
      <div className="main-content">
        {/* <img sr className="main-img" alt="Main" /> */}

        <div className="main-img"></div>
        <div className="content-front">
            <h3 className="text-front">
                <span>The <span className="one">#1 </span> site real Estate</span>  professional  trust</h3>
        </div>
        <div className="search-container">
          <div className="search-input">
            <FaSearch className="search-icon" />

            <input type="search" className="search" placeholder="Search By Locality "/>
            <button className="location-icon">Search</button>
          </div>
      
        </div>
      </div>
      

           <Switch />
     
      <Featured />
 

      <div className="infoContainer">

    
      <div className="mainInfo" style={{marginLeft: "10%", marginTop:"10%" }}>
        <img className="commitment-img" src={commitment} alt="Not found" />
        <h1 className="heading1">
        Our Commitment
        </h1>
        <p className="para1" style={{marginRight: "71%" }}>
        At MVC, we are dedicated to helping individuals and companies navigate the complex real estate market with ease. Our robust portfolio of services, coupled with our industry expertise, ensures that your real estate journey is smooth and successful.</p>
      </div>
      <div className="mainInfo2" style={{marginLeft:"30%"}} >
      <img className="exp"  src={exp} alt="Not found" />
        <h1 className="mainInfoHeading" >
        Expertise and Experience:
        </h1>
        <p className="mainInfoPara" style={{marginRight:"10%"}}>With more than 5 years in the industry, we have a proven track record of delivering exceptional property services.</p>
      </div>
      <div className="mainInfo3" style={{marginLeft: "10%", marginTop:"16%"}}>
      <img className="real" src={real} alt="Not found" />
        <h1 className="mainInfo3Heading">Real Estate Consultancy: </h1>
        <p className="para3" style={{marginRight: "71%" }}>Our team of experienced consultants offers personalized advice to help you make informed decisions about your real estate investments. From market trends to property valuations, we provide comprehensive support every step of the way.</p>
      </div>
      </div>
    <Footer />

    </div>
  );
};

export default Home;
