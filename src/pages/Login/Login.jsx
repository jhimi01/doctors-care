import React from 'react';
import loginsvg from '../../../public/login.svg'
import { Link } from 'react-router-dom';


const Login = () => {
    return (
       
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
           <img className='w-full' src={loginsvg} alt="" />
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#407bff] text-white hover:bg-[#618dec]">Login</button>
              </div>
              <Link to='/signup'><p className='text-[#407bff] text-sm underline'>Are you new here? signup</p></Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;