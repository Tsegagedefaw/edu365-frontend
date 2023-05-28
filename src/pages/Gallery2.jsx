import React from "react";
import TopHeader from "../components/Header/topHeader";
import MainHeader from "../components/Header/mainHeader";
import HeaderNav from "../components/Header/headerNav";
import GalleryHeader from "../components/gallery/galleryHeader";
import GallerySection2 from "../components/gallery/gallerySection2";
import Signup from "../components/SignUp/Signup";
import Footer from "../components/Footer/footer";

const Gallery2 = () => {
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
      <GalleryHeader/>
      <GallerySection2/>
      <Signup />
      <Footer />
    </>
  );
};
export default Gallery2;
