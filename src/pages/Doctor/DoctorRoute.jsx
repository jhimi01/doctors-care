import { Helmet } from "react-helmet";
import ShareTitle from "../../component/share/ShareTitle/ShareTitle";
import useDoctors from "../../hooks/useDoctors";

const DoctorRoute = () => {
    const {alldoctors} = useDoctors()

    return (
        <div>
         <Helmet>
    <title>doctors | Doctor Care</title>
   </Helmet>
            <ShareTitle title={'our docotors'}></ShareTitle>
           <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 w-full md:w-11/12 mt-10 mx-auto">
              {alldoctors?.map((alldoctor, index) =>  <div key={index} className="card w-full bg-base-100 shadow-xl hoverEffect group">
  <figure className="px-5 pt-5">
    <img src={alldoctor?.doctors?.image} alt="Shoes" className="rounded-xl h-[250px] w-full object-cover" />
  </figure>
  <div className="card-body items-center text-center group-hover:text-white">
    <h2 className="card-title text-2xl">{alldoctor?.doctors?.name}</h2>
    <p className="text-xl">Specialist: {alldoctor?.serviceName}</p>
    <div className="card-actions">
    <button className='text-xl btn rounded-md bg-[#f17732] text-white hover:bg-[#e08c6800]'>Detail</button>
    </div>
  </div>
</div>)}
             
           </div>
        </div>
    );
};

export default DoctorRoute;