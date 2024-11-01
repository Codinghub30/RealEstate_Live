import React, { useState, useEffect } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import ServiceImg from "../Component/Images/services.jpg";
import Modal from "../Component/Modal/Modal";
import "../Component/css/Services.css";
import { FaSearch } from 'react-icons/fa';
import Loader from '../Component/Loading';
import { useDispatch, useSelector } from "react-redux";
import { startLoading, stopLoading } from "../redux/slice/loadingSlice";
import { fetchServices } from "../redux/slice/serviceSlice";
import CabinIcon from '@mui/icons-material/Cabin';
import DynamicFeedRoundedIcon from '@mui/icons-material/DynamicFeedRounded';
import SquareFootRoundedIcon from '@mui/icons-material/SquareFootRounded';
import { Select, MenuItem, FormControl, InputLabel, Button } from '@mui/material';
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';

const Services = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [sortOrder, setSortOrder] = useState("none");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedUnitType, setSelectedUnitType] = useState("all");
  const [selectedTypesCheck1, setSelectedTypesCheck1] = useState(new Set());

  const services = useSelector(state => state.service.service);

  useEffect(() => {
    setIsLoading(true);
    dispatch(startLoading());
    const timer = setTimeout(() => {
      dispatch(stopLoading());
      dispatch(fetchServices());
      setIsLoading(false);
    }, 1000); // Simulating a 1-second loading time

    return () => clearTimeout(timer);
  }, [dispatch]);

  const handleButtonClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const filteredServices = services
    .filter(service => service.title.toLowerCase().includes(searchInput.toLowerCase()))
    .filter(service => selectedType === "all" || service.title === selectedType)
    .filter(service => selectedUnitType === "all" || service.unit === selectedUnitType)
    .filter(service =>
      selectedTypesCheck1.size === 0 || selectedTypesCheck1.has(service.type)
    );
  ;

  console.log(selectedType);


  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  // const handleTypeChange = (e) => {
  //   setSelectedType(e.target.value);
  // };

  const truncateText = (item, maxLength) => {
    return item.length > maxLength ? item.substring(0, maxLength) + "..." : item;
  };

  const handleCheckboxChange = (type) => {
    const updatedTypes = new Set(selectedTypesCheck1);
    if (updatedTypes.has(type)) {
      updatedTypes.delete(type); // Remove type if already selected
    } else {
      updatedTypes.add(type); // Add type if not selected
    }
    setSelectedTypesCheck1(updatedTypes);
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };
  const handleUnitTypeChange = (e) => {
    setSelectedUnitType(e.target.value);
  };
  
  const clearFilters = () => {
    setSearchInput("");
    setSelectedType("all");
    setSelectedUnitType("all");
    setSelectedTypesCheck1(new Set());
  };


  return (
    <div>
      <Header />
      {isLoading && <Loader />}
      {/* <div className="service-content"> */}
        {/* <img src={ServiceImg} alt="Main Service" />
        <h2>Maximize Your Real Estate Success with Our End-to-End Services—From Market Analysis to Property Sales and Management.</h2> */}

        {/* Search Bar
        <div className="search-bar-container">
          <FaSearch className="search-icon-services" />
          <input
            className="search-input"
            type="text"
            placeholder="      Search services by property name..."
            value={searchInput}
            onChange={handleSearchChange}
            onFocus={() => setIsDropdownVisible(true)}
            onBlur={() => setTimeout(() => setIsDropdownVisible(false), 100)}
          />
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
        </div> */}

      {/* </div> */}

      <div className="service-main-container">
        {filteredServices > 0 ? <h5>{filteredServices.length} Results | Flats in Odisha</h5> : }
        <div className="filter-container">
          <div className="filter-sidebar">
            <h3>Filters</h3>
            <FormControl variant="outlined" sx={{ margin: '16px 0', minWidth: 120 }}>
              <InputLabel id="sort-label" className="filterByLocation">Filter by location</InputLabel>
              <Select
                labelId="sort-label"
                value={selectedType}
                onChange={handleTypeChange}
                displayEmpty
              >
                <MenuItem value="all">None</MenuItem>
                <MenuItem value="Plot in Nayapalli">Nayapalli</MenuItem>
                <MenuItem value="Plot in Patia">Patia</MenuItem>  
                <MenuItem value="Plot in Chandaka">Chandaka</MenuItem>
                <MenuItem value="Plot in khandagiri">Khandagiri</MenuItem>
                <MenuItem value="Plot in Mancheswar">Mancheswar</MenuItem>
                <MenuItem value="Apartment in Kalinga Vihar">Kalinga vihar</MenuItem>
                <MenuItem value="Apartment in Jaydev vihar">Jaydev vihar</MenuItem>
                <MenuItem value="Apartment in Chandrasekarpur"> Chandrasekarpur</MenuItem>
                <MenuItem value="Apartment in Laxmisagar">Laxmisagar</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="outlined" sx={{ margin: '16px 0', minWidth: 120 }}>
              <InputLabel id="type-label" className="filterByArea">Area</InputLabel>
              <Select
                labelId="type-label"
                value={selectedUnitType}
                onChange={handleUnitTypeChange}
                displayEmpty
              >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="desmil">Desmil</MenuItem>
                <MenuItem value="acre">Acers</MenuItem>
                <MenuItem value="2bhk">2 BHK</MenuItem>
                <MenuItem value="3bhk">3 BHK</MenuItem>
                <MenuItem value="4bhk">4 BHK</MenuItem>
                {/* Add more types as needed */}
              </Select>
            </FormControl>

          </div>
          <div className="checkbox-group">
            <h4>Type:</h4>
            <label>
              <input
                type="checkbox"
                checked={selectedTypesCheck1.has('Residential')}
                onChange={() => handleCheckboxChange('Residential')}
              />
              Residential
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedTypesCheck1.has('Commercial')}
                onChange={() => handleCheckboxChange('Commercial')}
              />
              Commercial
            </label>

          </div>

          <Button variant="outlined" color="primary" onClick={clearFilters} style={{ marginTop: "20px" }}>
              Clear All
            </Button>



          {/* <div className="checkbox-group">
            <h2>Posted By:</h2>
            <label>
              <input
                type="checkbox"
                checked={selectedTypes.has('owner')}
                onChange={() => handleTypeChange('owner')}
              />
              Owner
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedTypes.has('commercial')}
                onChange={() => handleTypeChange('commercial')}
              />
              Builder
            </label>

          </div> */}

        </div>
        <div className="card-container-service1">
          {filteredServices.length > 0 ? (
            filteredServices.map((item, index) => (
              <div key={index} className="card-link">
                <div className="card-service">
                  <img src={item.img} className="card-image-service" alt={item.title} />
                  <div className="card-content-service">
                    <h2 className="card-title-service">{item.title}</h2>
                    <p className="card-text-service">{truncateText(item.details, 170)}</p>
                    <div className="detail-text-container">
                      <p className="card-text-size"><SquareFootRoundedIcon /> Area: {item.size}</p>
                      <p className="card-text-type"><CabinIcon /> Type: {item.type}</p>
                    </div>
                    <p className="card-text-flatSq">{item.flatSq}</p>
                    <p className="card-text-posted"><DynamicFeedRoundedIcon /> Posted By: {item.Postedby}</p>
                  </div>
                  <button className="service-button" onClick={() => handleButtonClick(item)}>
                    Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-services-found">
              <RunningWithErrorsIcon className="noLogo" />
              <p>No services found matching your criteria.</p>
            </div>
          )}
        </div>
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
