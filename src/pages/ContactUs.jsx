import React from "react";
import TopHeader from "../components/Header/topHeader";
import MainHeader from "../components/Header/mainHeader";
import HeaderNav from "../components/Header/headerNav";
import ContactSection from "../components/pages/contactSection";
import Signup from "../components/SignUp/Signup";
import Footer from "../components/Footer/footer";

const ContactUs = () => {
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
export default ContactUs;
