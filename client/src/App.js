import './App.css';
import Feature from './Component/Feature';
import About from './Pages/About';
import Career from './Pages/Career';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Services from './Pages/Services';
import SinglePage from './Pages/SinglePage';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
        <Route path="/"  element={<Home/>} /> 
        <Route path="/about"  element={<About/>} /> 
        <Route path="/services"  element={<Services/>} /> 
        {/* <Route path={`/SinglePage/:index`}  element={<About />} />  */}
        <Route path={`/contact`}  element={<Contact />} /> 
        <Route path={`/feature`}  element={<Feature />} /> 
        <Route path={`/career`}  element={<Career />} /> 
    
     </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;
