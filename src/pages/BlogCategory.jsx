import React from "react";
import TopHeader from "../components/Header/topHeader";
import MainHeader from "../components/Header/mainHeader";
import HeaderNav from "../components/Header/headerNav";
import BlogHeader from "../components/Blog/blogHeaderCategory";
import BlogMainSection from "../components/Blog/blogMainSection";
import Signup from "../components/SignUp/Signup";
import Footer from "../components/Footer/footer";

const BlogCategory = () => {
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
      <BlogHeader/>
      <BlogMainSection/>
      <Signup />
      <Footer />
    </>
  );
};
export default BlogCategory;
