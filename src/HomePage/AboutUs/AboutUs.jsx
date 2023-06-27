// import prop1 from '../../assets/Props/prop1.png'
import prop2 from "../../assets/Props/prop2.png";
import prop3 from "../../assets/Props/prop3.png";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="relative">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="grid grid-cols-2">
          <img
            src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/11756843/pexels-photo-11756843.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/3279209/pexels-photo-3279209.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div>
          <h4>About Us</h4>
          <h2 className="text-4xl font-bold">
            20 Year Experience About Us The Great Place Of Medical Hospital
            Center
          </h2>
          <p>
            We provide the special tips and advice’s of heath care treatment and
            high level of best technology involve in the our hospital.
          </p>
        </div>
      </div>

      <div
        className="absolute top-10 right-20 animatespin
"
      >
        <img src={prop2} alt="" />
      </div>
      <div
        className="absolute bottom-20 left-20 animate-updown opacity-70
"
      >
        <img src={prop3} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
