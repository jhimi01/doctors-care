import React from 'react';
import bg from '../../../assets/bgbannner.png';
const ShareTitle = ({title}) => {
    return (
        <div className="hero h-[250px] mt-5 md:mt-0 md:px-0 px-3" style={{ backgroundImage: `url(${bg})` }}>
         <div className="hero-overlay bg-opacity-10"></div>
            <h2 className='text-2xl font-bold'>{title}</h2>
        </div>
    );
};

export default ShareTitle;