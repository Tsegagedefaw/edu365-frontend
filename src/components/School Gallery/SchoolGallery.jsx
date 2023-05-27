import React from "react";

const SchoolGallery = ()=>{
    return(
        <div className="edu_gallery_main_wrapper float_left">
		<div className="container">
			<div className="row">
				<div className="col-lg-12 col-md-12 col-sm-12">
					<div className="edu_heading_wrapper float_left">
						<h3>OUR SCHOOL GALLERY</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor, libero non
							<br/>interdum maximus, ligula nulla pretium ligula, a egestas ex nibh.</p>
					</div>
				</div>
				<div className="col-md-12">
					<div className="swiper-container s1">
						<div className="swiper-wrapper">
							<div className="swiper-slide">
								<img src="images/gallery1.jpg" alt="screenshot"/>
								<div className="edu_gallery_slider_overlay">	<a href="images/school/gallery1.jpg" className="venobox info"><i className="flaticon-plus-symbol"></i></a>
								</div>
							</div>
							<div className="swiper-slide">
								<img src="images/gallery2.jpg" alt="screenshot"/>
								<div className="edu_gallery_slider_overlay">	<a href="images/school/gallery2.jpg" className="venobox info"><i className="flaticon-plus-symbol"></i></a>
								</div>
							</div>
							<div className="swiper-slide">
								<img src="images/gallery3.jpg" alt="screenshot"/>
								<div className="edu_gallery_slider_overlay">	<a href="images/school/gallery3.jpg" className="venobox info"><i className="flaticon-plus-symbol"></i></a>
								</div>
							</div>
							<div className="swiper-slide">
								<img src="images/gallery4.jpg" alt="screenshot"/>
								<div className="edu_gallery_slider_overlay">	<a href="images/school/gallery4.jpg" className="venobox info"><i className="flaticon-plus-symbol"></i></a>
								</div>
							</div>
							<div className="swiper-slide">
								<img src="images/gallery5.jpg" alt="screenshot"/>
								<div className="edu_gallery_slider_overlay">	<a href="images/school/gallery5.jpg" className="venobox info"><i className="flaticon-plus-symbol"></i></a>
								</div>
							</div>
						</div>
						<div className="swiper-pagination one"></div>
					</div>
					{/* <!-- swiper-container --> */}
					<div className="swiper-button-prev">	<i className="flaticon-left-arrow"></i>
					</div>
					<div className="swiper-button-next">	<i className="flaticon-right-arrow"></i>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}
export default function App(){
    return(
        <>
            <SchoolGallery/>
        </>
    )
}