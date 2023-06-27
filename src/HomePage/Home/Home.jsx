import { Helmet } from 'react-helmet';
import bg from '../../assets/bgbannner.png';
import doctor from '../../assets/womendoctor.png';
// import doctor from '../../assets/doctor.png';
import AboutUs from '../AboutUs/AboutUs';
import prop1 from '../../assets/Props/prop1.png'
import prop10 from '../../assets/Props/prop10.png'
import './Home.css'

const Home = () => {
  return (
   <>


   <Helmet>
    <title>Doctor Care</title>
   </Helmet>
        <div className="hero h-[100vh] md:mt-0 mt-20" style={{ backgroundImage: `url(${bg})` }}>
      <div className="md:hero-content">
        <div className="md:w-1/2 w-full mx-auto md:space-y-3 space-y-1">
        <h4 className='md:text-2xl text-xl font-semibold text-[#565acf]'>We Provide All Health Care Solution</h4>
        <h2 className='md:text-5xl text-3xl font-bold text-[#1f2278]'>Your Health Is Our Responsibilty!</h2>
        <button className='text-xl p-3 rounded-md bg-[#5559ce] text-white hover:bg-[#6d6fb8]'>Read More</button>
        </div>
        <div className="md:w-[40%] w-full mx-auto text-black">
           <img className='w-[100%] animate-updown object-cover md:mt-10' src={doctor} alt="" />
        </div>
      </div>
      <div><img src={prop1} alt="prop"  className='hidden md:block animate-updown absolute left-5 bottom-8'/></div>
      <div><img src={prop10} alt="prop"  className='animate-updown hidden md:block absolute top-36  left-[40%]'/></div>
    </div>


    <AboutUs></AboutUs>
   </>
  );
};

export default Home;
