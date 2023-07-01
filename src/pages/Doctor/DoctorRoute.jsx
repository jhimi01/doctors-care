import { Helmet } from "react-helmet";
import ShareTitle from "../../component/share/ShareTitle/ShareTitle";
import useDoctors from "../../hooks/useDoctors";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";

const DoctorRoute = () => {
  const { alldoctors } = useDoctors();

  const openModal = (doctor) => {
    const modal = document.getElementById("my_modal_2");
  modal.querySelector(".doctorname").textContent = doctor?.doctors?.name;
  modal.querySelector(".doctor-specialty").textContent = `Specialty: ${doctor.serviceName}`;
  modal.querySelector(".doctor-details").textContent = doctor.serviceDetails;
  modal.querySelector(".doctor-mobile").textContent = `Mobile : ${doctor?.doctors?.mobile}`;

  // Clear existing social links
  const socialLinksContainer = modal.querySelector(".social-links");
  socialLinksContainer.innerHTML = "socials : ";

  // Add social links
  doctor.socialLinks.forEach((socialLink) => {
    const link = document.createElement("a");
    link.href = socialLink.url;
    link.target = "_blank"; // Add target="_blank" to open link in a new tab


    // Create an icon element based on social platform
    let iconElement;
    switch (socialLink.platform) {
      case "Facebook":
        iconElement = `<FaFacebook />`;
        break;
      case "Twitter":
        iconElement = `<FaTwitter />`;
        break;
      case "Instagram":
        iconElement = `<FaInstagram />`;
        break;
      default:
        iconElement = "";
        break;
    }

    // Set the text content as a combination of icon and platform
    link.innerHTML = `${iconElement} ${socialLink.platform}`;

    socialLinksContainer.appendChild(link);
  });


  window.my_modal_2.showModal();
  };

  return (
    <div>
      <Helmet>
        <title>doctors | Doctor Care</title>
      </Helmet>
      <ShareTitle title={"our docotors"}></ShareTitle>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 w-full md:w-11/12 mt-10 mx-auto">
        {alldoctors?.map((alldoctor, index) => (
          <div key={index} className="card w-full bg-base-100 shadow-xl hoverEffect group">
            <figure className="px-5 pt-5">
              <img src={alldoctor?.doctors?.image} alt="Shoes" className="rounded-xl h-[250px] w-full object-cover" />
            </figure>
            <div className="card-body items-center text-center group-hover:text-white">
              <h2 className="card-title text-2xl">{alldoctor?.doctors?.name}</h2>
              <p className="text-xl">Specialist: {alldoctor?.serviceName}</p>
              <div className="card-actions">
                <button onClick={() => openModal(alldoctor)} className="text-xl btn rounded-md bg-[#f17732] text-white hover:bg-[#e08c6800]">Detail</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <dialog id="my_modal_2" className="modal">
  <form method="dialog" className="modal-box bg-rose-50">
    <h3 className="doctorname font-bold text-xl"></h3>
    <p className="font-normal text-lg doctor-specialty"></p>
    <p className="font-normal text-lg doctor-details"></p>
    <p className="font-normal text-lg doctor-mobile"></p>
    {/* Add more elements for other information */}
    <div className="social-links"></div> {/* Add this container for social links */}
    {/* <p className="py-4">Press ESC key or click outside to close</p> */}
  </form>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>


    </div>
  );
};

export default DoctorRoute;
