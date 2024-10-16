import  React from 'react';
import { useSelector } from 'react-redux';
import '../Component/css/Loading.css'

const Loader = () => {
    const loading = useSelector((state) => state.loading.loading);
  
    // if (!loading) return null;
    // if (!loading) return null;
  
    return (
      <div className="loading-overlay">
        <div className="spinner"></div>
        <p className='text-loading'>Loading...</p>
      </div>
    );
  };
  
  export default Loader;