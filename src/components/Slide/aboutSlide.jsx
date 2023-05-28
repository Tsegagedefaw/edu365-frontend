import React from "react";

const AboutSlide = ()=>{
    return(
        <div className="iner_abt_wrapper float_left">
		<div className="container">
			<div className="row">
				<div className="col-lg-12 col-md-12 col-12 col-sm-12">
					<div className="about_slider_wrapper float_left">
						<div className="owl-carousel owl-theme">
							<div className="item">
								<div className="about_image">
									<img src="images/about1.jpg" className="img-responsive" alt=""/>
								</div>
							</div>
							<div className="item">
								<div className="about_image">
									<img src="images/about2.jpg" className="img-responsive" alt=""/>
								</div>
							</div>
							<div className="item">
								<div className="about_image">
									<img src="images/about3.jpg" className="img-responsive" alt=""/>
								</div>
							</div>
							<div className="item">
								<div className="about_image">
									<img src="images/about2.jpg" className="img-responsive" alt=""/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-8 col-md-12 col-12 col-sm-12 offset-lg-2">
					<div className="about_text_wrapper">
						<p>“Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis ndum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit et nibh vulputate cursus a sit amet mauris. This is Photoshop's version of Lorem um. Proin gravida nibh vel velit auctor aliquet.”</p>
						<h5> - by <span> Jeniffer Doe </span> (Director) </h5>
						<img src="images/sign.png" alt="img"/>
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
            <AboutSlide/>
        </>
    )
}