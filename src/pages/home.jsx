import React from "react";
import TopHeader from "../components/top header/topHeader";
import MainHeader from "../components/main header/mainHeader";
import HeaderNav from "../components/header nav/headerNav";
import MainSlide from "../components/Slide/mainSlide";
import FinderSection from "../components/Finder Section/finderSection";
import Service from "../components/School Service/service";
import Counter from "../components/counter Number/counter";
import PopularCourse from "../components/Popular Course/popular";
import SchoolGallery from "../components/School Gallery/SchoolGallery";
import SpecialTeam from "../components/Special Team/SpecialTeam";
import Blog from "../components/Blog/blog";
import Testimonial from "../components/Testimonial/Testimonial";
import Partners from "../components/Partners/Partners";
import Signup from "../components/SignUp/Signup";
import Footer from "../components/Footer/footer";

const Home = () => {
  return (
    <>
    <div id="preloader">
        <div id="status">
            <img src="images/preloader.gif" id="preloader_image" alt="loader"/>
        </div>
    </div>
      <TopHeader />
      <MainHeader />
      <a id="back2Top" title="Back to top" href="#">&#10148;</a>
      <HeaderNav />
      <MainSlide />
      <FinderSection />
      <Service />
      <Counter />
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
