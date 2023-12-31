import { Helmet } from 'react-helmet';
import bg from '../../assets/bgbannner.png';
import doctor from '../../assets/womendoctor.png';
// import doctor from '../../assets/doctor.png';
import AboutUs from '../AboutUs/AboutUs';
import prop1 from '../../assets/Props/prop1.png'
import prop10 from '../../assets/Props/prop10.png'
import './Home.css'
import Process from '../Proccess/Process';
import Doctors from '../Doctors/Doctors';
import ScrollTop from '../../component/share/ScrollTop';

const Home = () => {
  return (
   <>


   <Helmet>
    <title>Doctor Care</title>
   </Helmet>
        <div className="hero h-[100vh] mt-5 md:mt-0 md:px-0 px-3" style={{ backgroundImage: `url(${bg})` }}>
      <div className="md:hero-content">
        <div className="md:w-1/2 w-full mx-auto">
        <h4 className='md:text-2xl text-xl font-semibold text-[#565acf]'>We Provide All Health Care Solution</h4>
        <h2 className='md:text-6xl mb-5 mt-2  text-4xl font-bold text-[#1f2278]'>Your Health Is Our Responsibilty!</h2>
        <button className='text-xl btn rounded-md bg-[#f17732] text-white hover:bg-[#e08c68]'>Read More</button>
        </div>
        <div className="md:w-[40%] w-full mx-auto text-black">
           <img className='w-[100%] animate-updown object-cover md:mt-10' src={doctor} alt="" />
        </div>
      </div>
      <div><img src={prop1} alt="prop"  className='hidden md:block animate-updown absolute left-5 bottom-8'/></div>
      <div><img src={prop10} alt="prop"  className='animate-updown hidden md:block absolute top-36  left-[40%]'/></div>
    </div>


    <AboutUs></AboutUs>

    <Process></Process>

    <Doctors></Doctors>

   
   </>
  );
};

export default Home;
