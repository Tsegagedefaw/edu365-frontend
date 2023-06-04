import React from "react";
import { useState,useEffect } from "react";

import TopHeader from "../components/Header/topHeader";
import MainHeader from "../components/Header/mainHeader";
import HeaderNav from "../components/Header/headerNav";
import BlogHeaderSingle from "../components/Blog/blogHeaderSingle";
import BlogSingleSection from "../components/Blog/blogSingleSection";
import Signup from "../components/SignUp/Signup";
import Footer from "../components/Footer/footer";

const BlogCategory = () => {

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
      <TopHeader />
      <MainHeader />
      <a id="back2Top" title="Back to top" href="#">&#10148;</a>
      <HeaderNav />
      <BlogHeaderSingle/>
      <BlogSingleSection/>
      <Signup />
      <Footer />
    </>
  );
};
}
export default BlogCategory;
