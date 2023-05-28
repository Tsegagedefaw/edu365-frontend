import React from "react";
import TopHeader from "../components/Header/topHeader";
import MainHeader from "../components/Header/mainHeader";
import HeaderNav from "../components/Header/headerNav";
import AboutSlide from "../components/Slide/aboutSlide";
import AwardCard from "../components/about/AwardCard";
import KeyCard from "../components/about/KeyCard";
import HistoryAcadamy from "../components/history acadamy/history";
import SchoolInfo from "../components/School Info/SchoolInfo";
import Signup from "../components/SignUp/Signup";
import Footer from "../components/Footer/footer";

const About = () => {
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
      <div class="page_title_section float_left">
		<div class="page_header">
			<div class="container">
				<div class="row">
					{/* <!-- section_heading start --> */}
					<div class="col-lg-12 col-md-12 col-12 col-sm-12">
						<h1>About us </h1>
					</div>
					<div class="col-lg-12 col-md-12 col-12 col-sm-12">
						<div class="sub_title_section">
							<ul class="sub_title">
								<li> <a href="/"> Home </a> &nbsp;&nbsp;&nbsp; &gt; &nbsp;&nbsp;</li>
								<li>About us</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		    </div>
	  </div>
      <AboutSlide/>
      <AwardCard/>
      <KeyCard/>
      <HistoryAcadamy/>
      <SchoolInfo/>
      <Signup />
      <Footer />
    </>
  );
};
export default About;
