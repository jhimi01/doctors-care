import React from 'react';
import signupsvg from '../../../public/signup.svg'
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
       
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
           <img className='w-[80%]' src={signupsvg} alt="" />
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
                <button className="btn bg-[#ff725e] hover:bg-[#e98f83] text-white">Login</button>
              </div>
              <Link to='/login'><p className='text-[#407bff] underline text-sm'>Are you new here? signup</p></Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Signup;