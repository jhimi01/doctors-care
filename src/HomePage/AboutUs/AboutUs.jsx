// import prop1 from '../../assets/Props/prop1.png'
import prop2 from '../../assets/Props/prop2.png'
import prop3 from '../../assets/Props/prop3.png'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className='relative'>



          <h2>  About us
</h2>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>


{/* <div className='absolute top-20 right-60 animate-pulse 
'>
    <img src={prop1} alt="" />
</div> */}
<div className='absolute top-10 right-20 animatespin 
'>
    <img src={prop2} alt="" />
</div>
<div className='absolute bottom-20 left-20 animate-updown 
'>
    <img src={prop3} alt="" />
</div>

        </div>
    );
};

export default AboutUs;