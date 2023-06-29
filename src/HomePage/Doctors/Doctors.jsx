import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import sliderbg from '../../assets/sliderbg.png'

// import "./styles.css";

// import required modules
import SwiperCore,{ FreeMode, Pagination , Autoplay } from "swiper";


SwiperCore.use([FreeMode, Pagination, Autoplay]); // Enable required Swiper modules



const Doctors = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(()=>{
        fetch('service.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setDoctors(data)
        })
    },[])
console.log(doctors)

    return (
        <div className='md:flex hero h-[100vh] px-3 md:px-14' style={{ backgroundImage: `url(${sliderbg})` }}>

          <div className='md:w-4/5 w-full'>
          <h4 className="text-[#f59a66] text-xl font-bold">Doctors</h4>
          <h2 className="text-4xl font-bold text-[#1f2278]">
            Long Experienced Doctors and best treatment
          </h2>
          <p className="text-gray-600 text-lg font-normal">
            We provide the special tips and advice’s of heath care treatment and
            high level of best technology involve in the our hospital.
          </p>
          </div>

          <div className='md:w-2/3 w-full'>
          <Swiper
        slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]} // Add Autoplay module
          className="mySwiper"
          autoplay={{ // Enable autoplay
            delay: 500, // Delay between slides in milliseconds
            disableOnInteraction: false // Allow interaction to pause autoplay
          }}
          effect="slide" // Set effect to 'slide'
          speed={1000} // Set the speed of slide transition (in milliseconds)
   
      >
      
      <div>
        {doctors.map((doctor,index) =>  
        <SwiperSlide key={index}>
        <div className='cursor-grab border group hoverEffect rounded-lg flex items-center px-3 py-8 space-y-1 flex-col'>
        <img className='h-[200px] w-full object-cover' src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <h1 className="textBorder text-2xl font-bold group-hover:text-white">{doctor?.doctors?.name}</h1>
                <h2 className='font-bold text-2xl text-[#f17732] group-hover:text-white'>{doctor?.serviceName}</h2>
                <p className='text-gray-600 text-lg'>It is a long established fact that a reader will be distracted by the readable content of.</p>
            </div></SwiperSlide>)}
      </div>
       
       
        
      </Swiper>
          </div>
        </div>
    );
};

export default Doctors;