import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import ShareTitle from '../../component/share/ShareTitle/ShareTitle';
import useTreatments from '../../hooks/useTreatments';
import { FcSearch } from 'react-icons/fc';

const Treatments = () => {

    const {allTreatments} = useTreatments()
    const [search, setSearch] = useState("");


    const handleSearch = (e) => {
        setSearch(e.target.value);
      };
    
      const filteredTreatments = allTreatments.filter(
        (treatment) =>
        treatment.doctorName.toLowerCase().includes(search.toLowerCase()) ||
        treatment.serviceName.toLowerCase().includes(search.toLowerCase())
      );
    

    return (
        <div>
            <Helmet>
    <title>treatments | Doctor Care</title>
   </Helmet>
   <ShareTitle title={'treatments'}></ShareTitle>

    {/* search */}
    <div className="relative w-full md:w-1/2 mx-auto mt-4">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="search by name or dissase"
          className="input input-bordered w-full"
        />
        <button className="absolute right-3 top-3">
          <FcSearch className="text-3xl" />
        </button>
      </div>

<div className='grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-5 md:w-11/12 mt-5 mx-auto'>
{
    filteredTreatments?.map((treatments, index) => <div key={index} className="card bg-base-100 shadow-xl">
  <figure><img src={treatments?.serviceImg} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{treatments?.doctorName}</h2>
    <p>{treatments?.serviceName}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>)
   }
</div>
        </div>
    );
};

export default Treatments;