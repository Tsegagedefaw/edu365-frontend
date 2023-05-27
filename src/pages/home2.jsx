import React from "react";
import HeaderNav2 from "../components/header nav/headerNav2";
import Home2Slide from "../components/Slide/home2Slide";
import FinderSection from "../components/Finder Section/finderSection";
import History from "../components/history acadamy/history";
import SchoolInfo from "../components/School Info/SchoolInfo";
import PopularCourse from "../components/Popular Course/popular";
import SchoolGallery from "../components/School Gallery/SchoolGallery";
import SpecialTeam from "../components/Special Team/SpecialTeam";
import Blog from "../components/Blog/blog";
import Testimonial from "../components/Testimonial/Testimonial";
import Partners from "../components/Partners/Partners";
import Signup from "../components/SignUp/Signup";
import Footer from "../components/Footer/footer";

// import "style_II.css";
// import "css/responsive_II.css";

const Home = () => {
  return (
    <>
    <div id="preloader">
        <div id="status">
            <img src="images/preloader.gif" id="preloader_image" alt="loader"/>
        </div>
    </div>
      
      <HeaderNav2 />
      <a id="back2Top" title="Back to top" href="#">&#10148;</a>
      <Home2Slide/>
      <FinderSection/>
      <History/>
      <SchoolInfo/>
      <PopularCourse />
      <SchoolGallery />
      <SpecialTeam />
      <Blog />
      <Testimonial />
      <Partners />
      <Signup />
      <Footer />
    </>
  );
};
export default Home;
