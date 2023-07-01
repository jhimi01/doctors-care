import { useEffect, useState } from "react";

const useDoctors = () => {
    const [alldoctors, setAllDoctors] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch('service.json')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setAllDoctors(data)
            setLoading(false)
        })
    },[])
    return {alldoctors, loading}
};

export default useDoctors;