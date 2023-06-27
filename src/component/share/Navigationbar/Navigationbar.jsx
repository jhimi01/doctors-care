import { useContext, useEffect, useState } from 'react';
import './Navigationbar.css'
import { FaStethoscope } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Navigationbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { user } = useContext(AuthContext)

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

    const Navigation = () => (
      <>
        <NavLink to='/'><li><a>Home</a></li></NavLink>
        <NavLink>  <li tabIndex={0}>
          <details>
            <summary>Service</summary>
            <ul className="p-2 flex flex-col">
              <li><a>Service</a></li>
              <li><a>Service details</a></li>
            </ul>
          </details>
        </li></NavLink>
        <NavLink> <li><a>Blog</a></li></NavLink>
      </>
    );

    return (
        <header 
        className={scrolled ? 'scrolled' : ''}
        >
      <div className="navbar md:px-[3.5rem] mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <Navigation />
      </ul>
    </div>
    <a className="text-2xl flex items-center gap-2 font-bold text-[#1f2278]"><FaStethoscope className='text-3xl'/> DoctorCare</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-bold text-[#6163a1]">
  <Navigation />
    </ul>
  </div>
  <div className="navbar-end">
  <div className="items-center flex">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    { user? <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://i.ibb.co/crQnZhh/pexels-mohamed-abdelghaffar-1698730.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
       <button><li><a>Logout</a></li></button>
      </ul>
    </div> : <Link to='/login' className='custom-btn'> <li><a>LogIn</a></li></Link>}
  </div>
  </div>
</div>
    </header>
    );
};

export default Navigationbar;