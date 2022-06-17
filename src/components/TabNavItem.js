import React from 'react';
import "../pages/pages.css"
// import pourpaint from '../assets/PourPaint.png';
// import primordium from '../assets/Primordium.png';
// import dreamart from '../assets/DreamArt.png';

const TabNavItem = ({ id, title, activeTab, setActiveTab, src}) => {
    const handleClick = () => {
        setActiveTab(id);
    };

    // const mystyle = {
    //     width: '10%',
    //     height: '10%',
    // };

    const class1 = activeTab === id ? "active" : ""

    return (
        <div className='home-container'>
            <div onClick={handleClick} className={class1}>
                <img src={ src } alt="some value" type="image/png" className='media'/>
                <p className='img-cov'>{ title }</p>
            </div>
        </div>
    );
};

export default TabNavItem;