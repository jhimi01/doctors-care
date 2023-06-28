// import prop1 from '../../assets/Props/prop1.png'
import prop2 from "../../assets/Props/prop2.png";
import prop3 from "../../assets/Props/prop3.png";
import "./AboutUs.css";
import { BiInjection } from 'react-icons/bi';
import { FaAmbulance } from 'react-icons/fa';
import { GiDoctorFace } from 'react-icons/gi';
import { GiMedicines } from 'react-icons/gi';

const AboutUs = () => {
  return (
    <div className="relative px-3 md:px-20 mx-auto md:my-28">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        <div className="grid grid-cols-2 gap-5">
          <img className="w-full h-full hover:scale-125 transform transition-transform duration-300 ease-in-out" style={{borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', borderTopRightRadius:'50px'}}
            src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <img className="w-full h-full hover:scale-125 transform transition-transform duration-300 ease-in-out" style={{borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', borderTopLeftRadius:'50px'}}
            src="https://images.pexels.com/photos/11756843/pexels-photo-11756843.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <img className="w-full h-full hover:scale-125 transform transition-transform duration-300 ease-in-out" style={{borderBottomRightRadius: '50px', borderTopLeftRadius:'50px', borderTopRightRadius:'50px' }}
            src="https://images.pexels.com/photos/3279209/pexels-photo-3279209.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <img className="w-full h-full hover:scale-125 transform transition-transform duration-300 ease-in-out" style={{ borderTopLeftRadius:'50px', borderTopRightRadius:'50px', borderBottomLeftRadius: '50px', }}
            src="https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>
        <div className="space-y-6">
          <h4 className="text-[#f59a66] text-xl font-bold">About Us</h4>
          <h2 className="text-4xl font-bold text-[#1f2278]">
            20 Year Experience About Us The Great Place Of Medical Hospital
            Center
          </h2>
          <p className="text-gray-600 text-lg font-normal">
            We provide the special tips and advice’s of heath care treatment and
            high level of best technology involve in the our hospital.
          </p>
          <div className="grid grid-cols-2 gap-5">
            <div className="md:flex items-center gap-3 text-2xl p-3 bg-indigo-100 drop-shadow-lg shake-effect"><BiInjection className="text-red-500" /> <p>Best Professionals</p></div>
            <div className="md:flex items-center gap-3 text-2xl p-3 bg-indigo-100 drop-shadow-lg shake-effect"><FaAmbulance className="text-blue-400" /> <p>Emergency Help</p></div>
            <div className="md:flex items-center gap-3 drop-shadow-lg text-2xl p-3 bg-indigo-100 shake-effect">
            <GiDoctorFace className="text-indigo-600 text-2xl" />
             <p>Qualified Doctors</p></div>
            <div className="md:flex items-center gap-3 text-2xl p-3 bg-indigo-100 drop-shadow-lg shake-effect"><GiMedicines className="text-red-300" /> <p>Medical Treatment</p></div>
          </div>
          <button className='text-xl btn rounded-md bg-[#f17732] text-white hover:bg-[#e08c68]'>Read More</button>
        </div>
      </div>

      <div
        className="hidden md:block absolute -top-20 right-10 animatespin
"
      >
        <img src={prop2} alt="" />
      </div>
      <div
        className="hidden md:block absolute bottom-0 left-10 animate-updown opacity-70
"
      >
        <img src={prop3} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
