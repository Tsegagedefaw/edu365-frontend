import React from "react";
import { useState,useEffect } from "react";
import ErrorSection from  "../components/pages/error";

const Error = () => {

  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    setLoading(false);
  },[])
if(loading){
  return(
    <div id="preloader">
    <div id="status">
        <img src="images/preloader.gif" id="preloader_image" alt="loader"/>
    </div>
</div>
  )
}else{
  return (
    <>

      <ErrorSection/>

    </>
  );
};
}
export default Error;
