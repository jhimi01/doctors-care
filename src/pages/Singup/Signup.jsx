import React, { useContext, useState } from 'react';
import signupsvg from '../../../public/signup.svg'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import { key } from 'localforage';
import Swal from 'sweetalert2';

const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset  } = useForm();
    const { signupEmail, logingoogle, updateUserProfile } = useContext(AuthContext)
    const [error, setError] = useState('')
 
    
    const onSubmit = async data => {
      const {name, email, password, image} = data
        console.log(data.image)

        // create a FormData onject and append the image file
        const formData = new FormData();
        formData.append('image', image[0]);
        // make a post request to Imgbb api
        const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_API_KEY
    }`
        try{
          const response = await fetch(url, {
            method: 'POST',
            body: formData,
          })
          const result = await response.json();

          // extract the image url from the response
          const imageUrl = result?.data?.display_url;
          // handle user registration with image url
          signupEmail(email, password)
          .then(result => {
              const userlogin = result.user;
              console.log(userlogin)
              updateUserProfile(name, imageUrl)
              .then(()=>{
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Your work has been saved',
                  showConfirmButton: false,
                  timer: 1500
                })
                navigate(from, { replace: true });
              }).catch(err => {
                console.log(err.message);
                toast.error(err.message);
              })
              setError('')
              reset()
          }).catch(err => {
              setError(err.message)
              Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: `${err?.message}`,
                showConfirmButton: false,
                timer: 1500
              })
          })




        }catch (error) {
          setLoading(false);
          console.log(error.message);
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: `${error?.message}`,
            showConfirmButton: false,
            timer: 1500
          })
        }
        

       
    };

    const handleGoogle =()=>{
        logingoogle()
        .then(result => {
            const userlogin = result.user;
            console.log(userlogin)
            setError('')
        }).catch(err => {
            setError(err.message)
        })
    }


    return (
       
        <div className="hero min-h-screen bg-base-200">
        <Helmet>
            <title>signup | Doctor care</title>
        </Helmet>
        <div className="hero-content flex-col md:flex-row-reverse">
           <img className='w-[80%]' src={signupsvg} alt="" />
          <div className="card flex-shrink-0 w-full max-w-sm mt-20 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" className="input input-bordered" {...register("name", { required: true })} />
                {errors.name && <span className='text-red-500'>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                {errors.email && <span className='text-red-500'>This field is required</span>}
              </div>
              <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="file" placeholder="photo URL" className="input input-bordered"  accept='image/*' {...register("image")} />
            </div>
            {/* password input field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                {errors.password && <span className='text-red-500'>This field is required</span>}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#ff725e] hover:bg-[#e98f83] text-white">Sign up</button>
                {error && <span className="text-red-500 text-xs">{error}</span>}
              </div>
              <Link to='/login'><p className='text-[#407bff] underline text-sm'>Already have an account? Login</p></Link>
            </form>
            <div className='divider'>or</div>
        <button className='btn rounded-none' onClick={handleGoogle}>Signin with Google <FcGoogle className='text-2xl'/></button>
          </div>
        </div>
      </div>
    );
};

export default Signup;