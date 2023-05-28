import React from "react";
import TopHeader from "../components/Header/topHeader";
import MainHeader from "../components/Header/mainHeader";
import HeaderNav from "../components/Header/headerNav";
import GalleryHeader from "../components/gallery/galleryHeader";
import GallerySection from "../components/gallery/gallerySection";
import Signup from "../components/SignUp/Signup";
import Footer from "../components/Footer/footer";

const Gallery = () => {
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
      <GallerySection/>
      <Signup />
      <Footer />
    </>
  );
};
export default Gallery;
