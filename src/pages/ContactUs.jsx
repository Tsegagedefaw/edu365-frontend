import React from "react";
import { useState,useEffect } from "react";

import TopHeader from "../components/Header/topHeader";
import MainHeader from "../components/Header/mainHeader";
import HeaderNav from "../components/Header/headerNav";
import ContactSection from "../components/pages/contactSection";
import Signup from "../components/SignUp/Signup";
import Footer from "../components/Footer/footer";

const ContactUs = () => {

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
	<TopHeader/>
	<MainHeader/>
	<HeaderNav/>
	<ContactSection/>
	<Signup/>
	<Footer/>
    </>
  );
};
}
export default ContactUs;
