  import React, { useState, useEffect } from "react";
  import Header from "../Component/Header";
  import mainImg from "../Component/Images/mainImg.png";
  import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa'; // Import search and location icons
  import Featured from "../Component/Featured";
  import Footer from "../Component/Footer";
  import commitment from "../Component/Images/commitment.png";
  import exp from "../Component/Images/exp.png";
  import real from "../Component/Images/real.png";
  import Switch from "../Component/Switch";
  import Loader from '../Component/Loading';
  import { useDispatch, useSelector } from "react-redux";
  import { startLoading, stopLoading, selectLoading } from "../redux/slice/loadingSlice";
  import Chart from "./Chart";
  import Dashboard from "./Dashboard";

  const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const dispatch = useDispatch();
    const services = useSelector(state => state.service.service);

    const handleSearchChange = (e) => {
      setSearchInput(e.target.value)
    }

    const filteredServices = services.filter((item) =>
      item.title.toLowerCase().includes(searchInput.toLowerCase())
    )


    useEffect(() => {

      setIsLoading(true);
      dispatch(startLoading());
      const timer = setTimeout(() => {
        dispatch(stopLoading());
        setIsLoading(false);
      }, 1000); // Simulating a 2-second loading time
      console.log("loading");


      return () => clearTimeout(timer); // Cleanup the timer
    }, [dispatch]);



    return (
      <div>
        <Header />

        {isLoading && <Loader />}

        <div className="main-content">

          {/* <img sr className="main-img" alt="Main" /> */}

          <div className="main-img"></div>
          <div className="content-front">
            <h3 className="text-front">
              <span>The <span className="one">#1 </span> site real Estate</span>  professional  trust</h3>
          </div>
          <div className="search-container">
            <div className="search-input-home">
              <FaSearch className="search-icon" />

              <input type="search" className="search" placeholder="Search By Locality" onChange={handleSearchChange} onFocus={() => setIsDropdownVisible(true)}
              />
              <button className="location-icon">Search</button>
            </div>


          </div>
        </div>

        {isDropdownVisible && searchInput && (
          <div className="dropdown-home">
            {filteredServices.length > 0 ? (
              filteredServices.map((service, index) => (
                <div
                  key={index}
                  className="dropdown-item"
                  onClick={() => {
                    setSearchInput(service.title);
                    setIsDropdownVisible(false);
                  }}
                >
                  {service.title}
                </div>
              ))
            ) : (
              <div className="dropdown-item">No services found</div>
            )}
          </div>
        )}


        <Switch />



        <Featured />


        <div className="infoContainer">


          <div className="mainInfo">
            <img className="commitment-img" src={commitment} alt="Not found" />
            <h1 className="heading1">
              Our Commitment
            </h1>
            <p className="para1" style={{ marginRight: "71%" }}>
              At MPC, we are dedicated to helping individuals and companies navigate the complex real estate market with ease. Our robust portfolio of services, coupled with our industry expertise, ensures that your real estate journey is smooth and successful.</p>
          </div>
          <div className="mainInfo2"  >
            <img className="exp" src={exp} alt="Not found" />
            <h1 className="mainInfoHeading" >
              Expertise and Experience:
            </h1>
            <p className="mainInfoPara" style={{ marginRight: "10%" }}>With more than 5 years in the industry, we have a proven track record of delivering exceptional property services.</p>
          </div>
          <div className="mainInfo3" >
            <img className="real" src={real} alt="Not found" />
            <h1 className="mainInfo3Heading">Real Estate Consultancy: </h1>
            <p className="para3" >Our team of experienced consultants offers personalized advice to help you make informed decisions about your real estate investments. From market trends to property valuations, we provide comprehensive support every step of the way.</p>
          </div>
        </div>
        <Footer />

      </div>
    );
  };

  export default Home;