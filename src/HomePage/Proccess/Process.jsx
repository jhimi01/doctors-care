import prop8 from '../../assets/Props/prop8.png'
import prop5 from '../../assets/Props/prop5.png'
import './Process.css'
const Process = () => {
    return (
        <div className='relative'>
             <h3 className='text-center text-xl text-[#f17732]'>Working Process</h3>
        <h2 className='text-center text-5xl text-[#1f2278] font-bold'>How we work</h2>
        <div className='md:flex items-center justify-center gap-10 px-3 md:w-3/4 w-full mx-auto md:mt-10 md:mb-20 my-10'>
            <div className='border group rounded-lg hoverEffect hover:text-white flex items-center px-5 py-8 space-y-7 flex-col'>
  <h1 className="textBorder text-8xl font-bold group-hover:text-white">01</h1>
  <h2 className='font-bold text-2xl text-[#f17732] group-hover:text-white'>Make Appointment</h2>
  <p className='text-gray-600 text-lg'>It is a long established fact that a reader will be distracted by the readable content of.</p>
  <button className='text-xl btn rounded-md bg-[#f17732] text-white hover:bg-[#e08c68]'>Read More</button>
</div>

            <div style={{boxShadow: "15px 15px 30px 0px #f56918c5"}} className='bg-[#f17732] rounded-lg flex items-center px-5 py-8 space-y-7 flex-col'>
            <h1 className="textBorder textBorder-middle text-9xl font-bold">02</h1>
                <h2 className='font-bold text-2xl text-[#fff]'>Take Treatment</h2>
                <p className='text-gray-600 text-lg'>It is a long established fact that a reader will be distracted by the readable content of.</p>
                <button className='text-xl btn rounded-md text-[#f17732] bg-white hover:bg-[#e08c6800] hover:text-[#fff]'>Read More</button>
            </div>
            <div className='border group hoverEffect rounded-lg flex items-center px-5 py-8 space-y-7 flex-col'>
            <h1 className="textBorder text-8xl font-bold group-hover:text-white">03</h1>
                <h2 className='font-bold text-2xl text-[#f17732] group-hover:text-white'>Registration</h2>
                <p className='text-gray-600 text-lg'>It is a long established fact that a reader will be distracted by the readable content of.</p>
                <button className='text-xl btn rounded-md bg-[#f17732] text-white hover:bg-[#e08c68]'>Read More</button>
            </div>
        </div>
        <div><img src={prop5} alt="prop"  className='hidden md:block animatespin absolute left-24 bottom-8'/></div>
      <div><img src={prop8} alt="prop"  className='animate-updown hidden md:block absolute top-36 right-32'/></div>
        </div>
   
    );
};

export default Process;