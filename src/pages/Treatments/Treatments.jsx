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
        </div>
    );
};

export default Treatments;