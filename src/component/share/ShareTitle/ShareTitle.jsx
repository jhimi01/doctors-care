import React from 'react';
import bg from '../../../assets/bgbannner.png';
const ShareTitle = ({title}) => {
    return (
        <div className="hero h-[300px] text-indigo-500" style={{ backgroundImage: `url(${bg})` }}>
         <div className="hero-overlay bg-opacity-10"></div>
            <h2 className='text-4xl font-bold'>{title}</h2>
        </div>
    );
};

export default ShareTitle;