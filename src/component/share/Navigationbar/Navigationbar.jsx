import { useEffect, useState } from 'react';
import './Navigationbar.css'
import { FaStethoscope } from 'react-icons/fa';

const Navigationbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
        <header 
        className={scrolled ? 'scrolled' : ''}
        >
      <div className="navbar px-[3.5rem] mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Home</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Service</summary>
          <ul className="p-2 flex flex-col">
            <li><a>Service</a></li>
            <li><a>Service details</a></li>
          </ul>
        </details>
      </li>
      <li><a>Blog</a></li>
      </ul>
    </div>
    <a className="text-2xl flex items-center gap-2 font-bold text-[#1f2278]"><FaStethoscope className='text-3xl'/> DoctorCare</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-bold text-[#6163a1]">
      <li><a>Home</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Service</summary>
          <ul className="p-2 flex flex-col">
            <li><a>Service</a></li>
            <li><a>Service details</a></li>
          </ul>
        </details>
      </li>
      <li><a>Blog</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    </header>
    );
};

export default Navigationbar;