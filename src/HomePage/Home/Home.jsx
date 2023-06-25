
// import { Helmet } from 'react-helmet';
import bg from '../../assets/bgbannner.png';
import doctor from '../../assets/womendoctor.png';
import AboutUs from '../AboutUs/AboutUs';

const Home = () => {
  return (
   <>


   {/* <Helmet>
    <title>home | Doctor Care</title>
   </Helmet> */}
        <div className="hero min-h-screen md:mt-0 mt-20" style={{ backgroundImage: `url(${bg})` }}>
      <div className="md:hero-content">
        <div className="md:w-1/2 w-full mx-auto space-y-3">
        <h4 className='text-2xl font-semibold text-[#565acf]'>We Provide All Health Care Solution</h4>
        <h2 className='text-5xl font-bold text-[#1f2278]'>Protect Your Health And Take Care To Of Your Health !</h2>
        <button className='text-xl p-3 rounded-md bg-[#5559ce] text-white hover:bg-[#6d6fb8]'>Read More</button>
        </div>
        <div className="md:w-[40%] w-full mx-auto text-black">
           <img className='w-[100%] mt-10' src={doctor} alt="" />
        </div>
      </div>
    </div>


    <AboutUs></AboutUs>
   </>
  );
};

export default Home;
