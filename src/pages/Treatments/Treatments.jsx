import React from 'react';
import { Helmet } from 'react-helmet';
import ShareTitle from '../../component/share/ShareTitle/ShareTitle';
import useTreatments from '../../hooks/useTreatments';

const Treatments = () => {

    const {allTreatments} = useTreatments()

    return (
        <div>
            <Helmet>
    <title>treatments | Doctor Care</title>
   </Helmet>
   <ShareTitle title={'treatments'}></ShareTitle>
   <h2>{allTreatments?.length}</h2>
   {
    allTreatments?.map((treatments, index) => <div key={index} className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>)
   }
        </div>
    );
};

export default Treatments;