import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ServiceImg from "../../Component/Images/services.jpg";
import Service1Img from "../../Component/Images/services12.jpg";
import Service2Img from "../../Component/Images/services13.jpg";
import Service3Img from "../../Component/Images/services14.jpg";
import Service4Img from "../../Component/Images/services15.jpg";
import Service5Img from "../../Component/Images/services16.jpg";
import apart1 from '../../Component/Images/apart1.jpg';
import apart2 from '../../Component/Images/Apart2.jpg';
import apart3 from '../../Component/Images/apart3.jpg';
import apart4 from '../../Component/Images/apart4.jpg';


const initialState = {
    service:[],
    searchTerm:'',
}


const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers:{
        setServices:(state, action) => 
         {
            state.service = action.payload;
        },
        setSearchTerm:(state,action) => {
            state.searchTerm = action.payload;
        }
    }
})

export const {setServices, setSearchTerm}  = serviceSlice.actions;

export const fetchServices = createAsyncThunk(
    'service/fetchServices',
    async (_, { dispatch }) => {

    const services  = [
        {
            img: Service1Img,
            title: "Plot in Patia",
            details: " Located in the rapidly developing capital city, these plots are ideal for building homes. Bhubaneswar offers modern infrastructure, connectivity, and access to educational institutions and IT hubs.",
            size: '1 Acre',
            type: 'Residential',
            Postedby: 'Builder',
            place: 'Patia',
            unit: 'acre'
          },
          {
            img: Service2Img,
            title: "Plot in Nayapalli",
            details: "Nayapalli is a prime commercial area in Bhubaneswar. Plots here are suitable for offices, retail spaces, or hotels, offering excellent connectivity to other parts of the city.",
            size: '12 Desmil',
            type: 'Commercial',
            Postedby: 'Owner',
            place: 'Nayapalli',
            unit: 'desmil'
          },
          {
            img: Service3Img,
            title: "Plot in Chandaka",
            details: "Close to nature, these plots are located near the Chandaka forest area, making them perfect for building eco-friendly homes or resorts. The serene environment offers a retreat from city life while being near the urban center.",
            size: '22 Desmil',
            type: 'Residential',
            Postedby: 'Owner',
            place: 'Chandaka',
            unit: 'desmil'
            
          },
          {
            img: Service4Img,
            title: "Plot in khandagiri",
            details: "Located near the historic Khandagiri caves, these residential plots are part of gated communities, offering security, modern amenities, and excellent connectivity to key areas in Bhubaneswar.",
            size: '1.2 Acre',
            type: 'Residential',
            Postedby: 'Builder',
            place: 'Khandagiri',
            unit: 'acre'
          },
          {
            img: Service5Img,
            title: "Plot in Mancheswar",
            details: "Mancheswar is an industrial hub in Bhubaneswar. Plots in this area are ideal for setting up factories, warehouses, or other industrial ventures due to its proximity to transport networks and industrial infrastructure.",
            size: '1.5 Acre',
            type: 'Residential',
            Postedby: 'Owner',
            unit: 'acre'
          },
          {
            img: apart4,
            title: "Apartment in Kalinga Vihar",
            details: "Kalinga Vihar is known for affordable housing options, offering 2 and 3 BHK apartments with essential amenities. It’s a developing area with good connectivity to the city center and educational institutions.",
            size: '3BHK',
            flatSq:'800 SQ FT',
            type: 'Residential',
            Postedby: 'Builder',
            unit: '3bhk'
          },
          {
            img: apart3,
            title: "Apartment in Jaydev vihar",
            details: "A premium locality in Bhubaneswar, Jaydev Vihar offers high-rise apartments with stunning views of the city. These apartments are well-connected and close to shopping malls, restaurants, and entertainment hubs.",
            size: '2 BHK',
            flatSq:'1200 SQ FT',
            type: 'Residential',
            Postedby: 'Builder',
            unit: '2bhk'
          },
          {
            img: apart1,
            title: "Apartment in Chandrasekarpur",
            details: "These apartments are located within gated communities, offering 24/7 security, power backup, and modern amenities. Chandrasekharpur is one of the most sought-after residential areas in Bhubaneswar.",
            size: '1 BHK',
            flatSq:'600 SQ FT',
            type: 'Residential',
            Postedby: 'owner',
            unit: '1bhk'
          },
          {
            img: apart2,
            title: "Apartment in Laxmisagar",
            details: "For short-term stays or rental investments, serviced apartments in Nayapalli offer fully furnished options with facilities like housekeeping, security, and proximity to commercial areas.",
            size: '4 BHK',
            flatSq:'1800 SQ FT',
            type: 'Residential',
            Postedby: 'Builder',
            unit: '4bhk'
          },
    ]
    dispatch(setServices(services));
}
);

export default serviceSlice.reducer;