import { Link } from 'react-router-dom';
import errorsvg from '../assets/error.svg'

const Erronpage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
           <img className='md:w-[35%] mx-auto' src={errorsvg} alt="" />
      <h1 className="text-2xl font-bold text-[#407bff] mb-1">Oops!</h1>
      <p className="text-gray-700 text-xl mb-2">Something went wrong.</p>
     <Link to='/'> <button className="px-6 py-2 bg-[#407bff] text-white rounded hover:bg-[#5582e2]">
        Go back
      </button></Link>
    </div>
    );
};

export default Erronpage;