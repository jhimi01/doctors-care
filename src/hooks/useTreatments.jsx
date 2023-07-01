import { useEffect, useState } from "react";

const useTreatments = () => {
    const [allTreatments, setAlltreatments] = useState([])
    const [loading, setLoading] = useState(true)
   useEffect(()=>{
    fetch('treatment.json')
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        setAlltreatments(data)
        setLoading(false)
    })
   },[])
   return {allTreatments, loading}
};

export default useTreatments;