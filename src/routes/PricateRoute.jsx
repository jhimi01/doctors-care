import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import {
    useLocation,
    Navigate,
  } from "react-router-dom";
  import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import Swal from 'sweetalert2';


const PricateRoute = ({children}) => {
    const { user, loader} = useContext(AuthContext)
    let location = useLocation();

    if (loader) {
       
      return <SkeletonTheme baseColor="#f0f8ff7e" height="200" highlightColor="#f0f8ff7e" ><div className="grid md:grid-cols-2 mt-4 mx-10 md:gap-10 gap-3 grid-cols-1">
      <div className="col-span-1">
        <Skeleton height={350} />
      </div>
      <div className="col-span-1">
        <Skeleton height={350} />
      </div>
    </div>
    </SkeletonTheme>
    }
    
    if (user) {
        return children;
    }
    Swal.fire("You have to log in");
    return <Navigate to="/login" state={{ from: location }} replace />

};

export default PricateRoute;