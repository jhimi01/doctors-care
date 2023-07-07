import { useEffect } from "react";
import Scrollbar from 'smooth-scrollbar';

const SmoothScroll = () => {

    let options = {
        damping: 0.06,
        // thumbMinSize: 17
    }

    useEffect(()=>{
        Scrollbar.init(document.body, options);
    },[])

    return null;
};

export default SmoothScroll;