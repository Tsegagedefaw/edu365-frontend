import React from "react";
import { useState,useEffect } from "react";


import HeaderNav2 from "../components/Header/headerNav2";
import Home2Slide from "../components/Slide/home2Slide";
import FinderSection from "../components/Finder Section/finderSection";
import History from "../components/history acadamy/history";
import SchoolInfo from "../components/School Info/SchoolInfo";
import PopularCourse from "../components/Popular Course/popular";
import Counter from "../components/counter Number/counter";
import SchoolGallery from "../components/School Gallery/SchoolGallery";
import SpecialTeam from "../components/Special Team/SpecialTeam";
import Blog from "../components/Blog/blog";
import Testimonial from "../components/Testimonial/Testimonial";
import Partners from "../components/Partners/Partners";
import Signup from "../components/SignUp/Signup";
import Footer from "../components/Footer/footer";

const Home2 = () => {

  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setLoading(false);
  },[]);
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
    
      
      <HeaderNav2 />
      <a id="back2Top" title="Back to top" href="#">&#10148;</a>
      <Home2Slide/>
      <FinderSection/>
      <History/>
      <SchoolInfo/>
      <PopularCourse />
      <Counter/>
      <SchoolGallery />
      <SpecialTeam />
      <Blog />
      <Testimonial />
      <Partners />
      <Signup />
      <Footer />
    </>
  );
  }
 
};
export default Home2;
