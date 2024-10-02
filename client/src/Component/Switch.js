    import React,{useState} from 'react'
    import Feature from "../Component/Feature";
    import Feature1 from "../Component/Feature1";
    import "../Component/css/Switch.css";
    import Feature3 from './Feature3';
    import Feature2 from './Feature2';

    const Switch = () => {
        const [activeComponent, setActiveComponent] = useState('A');

        const showComponentA = () => {
            setActiveComponent('A');
        };
    
        const showComponentB = () => {
            setActiveComponent('B');
        };
        const showComponentC = () => {
            setActiveComponent('C');
        };
        const showComponentD = () => {
            setActiveComponent('D');
        };
    return (
        <div>
            <h1 className='feature-heading'>Project in Bhubaneswar</h1>
                <div className='button-section'>
            
            <button className='button1' onClick={showComponentA}>Most Popular</button>
            <button className='button2' onClick={showComponentB}>By Budget</button>
            <button className='button2' onClick={showComponentC}>By Location</button>
            {/* <button className='button2' onClick={showComponentD}>By </button> */}

                    
            </div>

            <div>
                    {activeComponent === 'A' ? <Feature /> : ''}
                    {activeComponent === 'B' && <Feature1 />}
                    {activeComponent === 'C' && <Feature2/>}
                    {activeComponent === 'D' && <Feature3 />}
                </div>
        </div>
    )
    }

    export default Switch
