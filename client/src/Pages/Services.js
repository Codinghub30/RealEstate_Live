import React, { useState, useEffect } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import ServiceImg from "../Component/Images/services.jpg";
import Service1Img from "../Component/Images/services12.jpg";
import Service2Img from "../Component/Images/services13.jpg";
import Service3Img from "../Component/Images/services14.jpg";
import Service4Img from "../Component/Images/services15.jpg";
import Service5Img from "../Component/Images/services16.jpg";
import apart1 from '../Component/Images/apart1.jpg';
import apart2 from '../Component/Images/Apart2.jpg';
import apart3 from '../Component/Images/apart3.jpg';
import apart4 from '../Component/Images/apart4.jpg';
import Modal from "../Component/Modal/Modal"; // Assuming Modal is a custom component
import "../Component/css/Services.css";
import { FaSearch } from 'react-icons/fa';
import Loader from '../Component/Loading';
import { useDispatch, useSelector } from "react-redux";
import { startLoading, stopLoading,selectLoading } from "../redux/loadingSlice"; 
// import SearchIcon from '@mui/icons-material/Search'; 


const Services = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const service_details = [
    {
      img: Service1Img,
      title: "Plot in Patia",
      details: " Located in the rapidly developing capital city, these plots are ideal for building homes. Bhubaneswar offers modern infrastructure, connectivity, and access to educational institutions and IT hubs.",
    },
    {
      img: Service2Img,
      title: "Plot in Nayapalli",
      details: "Nayapalli is a prime commercial area in Bhubaneswar. Plots here are suitable for offices, retail spaces, or hotels, offering excellent connectivity to other parts of the city.",
    },
    {
      img: Service3Img,
      title: "Plot in Chandaka",
      details: "Close to nature, these plots are located near the Chandaka forest area, making them perfect for building eco-friendly homes or resorts. The serene environment offers a retreat from city life while being near the urban center.",
    },
    {
      img: Service4Img,
      title: "Plot in khandagiri",
      details: "Located near the historic Khandagiri caves, these residential plots are part of gated communities, offering security, modern amenities, and excellent connectivity to key areas in Bhubaneswar.",
    },
    {
      img: Service5Img,
      title: "Plot in Mancheswar",
      details: "Mancheswar is an industrial hub in Bhubaneswar. Plots in this area are ideal for setting up factories, warehouses, or other industrial ventures due to its proximity to transport networks and industrial infrastructure.",
    },
    {
      img: apart4,
      title: "Apartment in Kalinga Vihar",
      details: "Kalinga Vihar is known for affordable housing options, offering 2 and 3 BHK apartments with essential amenities. It’s a developing area with good connectivity to the city center and educational institutions.",
    },
    {
      img: apart3,
      title: "Apartment in Jaydev vihar",
      details: "A premium locality in Bhubaneswar, Jaydev Vihar offers high-rise apartments with stunning views of the city. These apartments are well-connected and close to shopping malls, restaurants, and entertainment hubs.",
    },
    {
      img: apart1,
      title: "Apartment in Chandrasekarpur",
      details: "These apartments are located within gated communities, offering 24/7 security, power backup, and modern amenities. Chandrasekharpur is one of the most sought-after residential areas in Bhubaneswar.",
    },
    {
      img: apart2,
      title: "Apartment in Laxmisagar",
      details: "For short-term stays or rental investments, serviced apartments in Nayapalli offer fully furnished options with facilities like housekeeping, security, and proximity to commercial areas.",
    },
  ];
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
  // Function to handle button click and open the modal
  const handleButtonClick = (service) => {
    setSelectedService(service); // Set the selected service details
    setIsModalOpen(true);        // Open the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);       // Close the modal
    setSelectedService(null);    // Clear selected service
  };

  // Filter services based on search input
  const filteredServices = service_details.filter((service) =>
    service.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  // Handle search bar input change
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <Header />
      { isLoading && <Loader />}
      <div className="service-content">
        <img src={ServiceImg} alt="Main Service" />
        <h2>Maximize Your Real Estate Success with Our End-to-End Services—From Market Analysis to Property Sales and Management.</h2>

        {/* Search Bar */}
        <div className="search-bar-container">
        <FaSearch className="search-icon-services" />
  <input
    className="search-input"
    type="text"
    placeholder="          Search services by property name..."
    value={searchInput}
    onChange={handleSearchChange}
    onFocus={() => setIsDropdownVisible(true)}
    onBlur={() => setTimeout(() => setIsDropdownVisible(false), 100)}
  />
  {/* <SearchIcon className="search-icon" /> */}
  {isDropdownVisible && searchInput && (
    <div className="dropdown">
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
</div>
</div>

      <div className="card-container-service1">
        {filteredServices.map((item, index) => (
          <div key={index} className="card-link">
            <div className="card-service">
              <img src={item.img} className="card-image-service" alt={item.title} />
              <div className="card-content-service">
                <h2 className="card-title-service">{item.title}</h2>
                <p className="card-text-service">{item.details}</p>
              </div>
              <button className="service-button" onClick={() => handleButtonClick(item)}>
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <Modal
          service={selectedService}
          closeModal={closeModal}
        />
      )}

      <Footer />
    </div>
  );
};

export default Services;
