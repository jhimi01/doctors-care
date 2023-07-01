import React from 'react';
import { Helmet } from 'react-helmet';
import ShareTitle from '../../component/share/ShareTitle/ShareTitle';

const Treatments = () => {
    return (
        <div>
            <Helmet>
    <title>treatments | Doctor Care</title>
   </Helmet>
   <ShareTitle title={'treatments'}></ShareTitle>
        </div>
    );
};

export default Treatments;