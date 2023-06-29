import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import SwiperCore,{ FreeMode, Pagination , Autoplay } from "swiper";


SwiperCore.use([FreeMode, Pagination, Autoplay]); // Enable required Swiper modules



const Doctors = () => {
    return (
        <div className='md:flex'>
          <div className='bg-base-300 md:w-3/4 w-full'>content</div>

          <div className='w-3/4 bg-slate-900'>
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
            delay: 2000, // Delay between slides in milliseconds
            disableOnInteraction: false // Allow interaction to pause autoplay
          }}
          effect="slide" // Set effect to 'slide'
      >
      
        <SwiperSlide><div className='border group hoverEffect rounded-lg flex items-center px-5 py-8 space-y-7 flex-col'>
            <h1 className="textBorder text-8xl font-bold group-hover:text-white">03</h1>
                <h2 className='font-bold text-2xl text-[#f17732] group-hover:text-white'>Registration</h2>
                <p className='text-gray-600 text-lg'>It is a long established fact that a reader will be distracted by the readable content of.</p>
                <button className='text-xl btn rounded-md bg-[#f17732] text-white hover:bg-[#e08c68]'>Read More</button>
            </div></SwiperSlide>
        <SwiperSlide><div className='border group hoverEffect rounded-lg flex items-center px-5 py-8 space-y-7 flex-col'>
            <h1 className="textBorder text-8xl font-bold group-hover:text-white">03</h1>
                <h2 className='font-bold text-2xl text-[#f17732] group-hover:text-white'>Registration</h2>
                <p className='text-gray-600 text-lg'>It is a long established fact that a reader will be distracted by the readable content of.</p>
                <button className='text-xl btn rounded-md bg-[#f17732] text-white hover:bg-[#e08c68]'>Read More</button>
            </div></SwiperSlide>
        <SwiperSlide>
        <div className='border group hoverEffect rounded-lg flex items-center px-5 py-8 space-y-7 flex-col'>
            <h1 className="textBorder text-8xl font-bold group-hover:text-white">03</h1>
                <h2 className='font-bold text-2xl text-[#f17732] group-hover:text-white'>Registration</h2>
                <p className='text-gray-600 text-lg'>It is a long established fact that a reader will be distracted by the readable content of.</p>
                <button className='text-xl btn rounded-md bg-[#f17732] text-white hover:bg-[#e08c68]'>Read More</button>
            </div>
            </SwiperSlide>
        <SwiperSlide>
        <div className='border group hoverEffect rounded-lg flex items-center px-5 py-8 space-y-7 flex-col'>
            <h1 className="textBorder text-8xl font-bold group-hover:text-white">03</h1>
                <h2 className='font-bold text-2xl text-[#f17732] group-hover:text-white'>Registration</h2>
                <p className='text-gray-600 text-lg'>It is a long established fact that a reader will be distracted by the readable content of.</p>
                <button className='text-xl btn rounded-md bg-[#f17732] text-white hover:bg-[#e08c68]'>Read More</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='border group hoverEffect rounded-lg flex items-center px-5 py-8 space-y-7 flex-col'>
            <h1 className="textBorder text-8xl font-bold group-hover:text-white">03</h1>
                <h2 className='font-bold text-2xl text-[#f17732] group-hover:text-white'>Registration</h2>
                <p className='text-gray-600 text-lg'>It is a long established fact that a reader will be distracted by the readable content of.</p>
                <button className='text-xl btn rounded-md bg-[#f17732] text-white hover:bg-[#e08c68]'>Read More</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='border group hoverEffect rounded-lg flex items-center px-5 py-8 space-y-7 flex-col'>
            <h1 className="textBorder text-8xl font-bold group-hover:text-white">03</h1>
                <h2 className='font-bold text-2xl text-[#f17732] group-hover:text-white'>Registration</h2>
                <p className='text-gray-600 text-lg'>It is a long established fact that a reader will be distracted by the readable content of.</p>
                <button className='text-xl btn rounded-md bg-[#f17732] text-white hover:bg-[#e08c68]'>Read More</button>
            </div>
        </SwiperSlide>
        
      </Swiper>
          </div>
        </div>
    );
};

export default Doctors;