import React from "react";

const History = ()=>{
    return(
        <div className="edu_addmi_main_wrapper float_left">
		<div className="container">
			<div className="row">
				<div className="col-lg-3 col-md-12 col-sm-12">
					<div className="edu_addmi_main_box_wrapper float_left">
						<h3>History</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula velit lectus, non ornare nibh conse accumsan.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula velit lectus, non ornare nibh consectetur accumsan.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<a href="#">Read More <i className="fas fa-long-arrow-alt-right"></i></a>
					</div>
				</div>
				<div className="col-lg-3 col-md-12 col-sm-12">
					<div className="edu_addmi_center_main_box_wrapper float_left">
						<img src="images/school/blog_01.jpg" alt="img"/>
						<h4><a href="#">Admission</a></h4>
						<p>Our Foundation is dedicated to transforming quality education so that all students can acquire and effectively apply the knowledge, attitudes, and skills.Every day we bring hope to millions of children in the world’s hardest.</p>
					</div>
				</div>
				<div className="col-lg-3 col-md-12 col-sm-12">
					<div className="edu_addmi_center_main_box_wrapper float_left">
						<img src="images/school/blog_02.jpg" alt="img"/>
						<h4><a href="#">Academics</a></h4>
						<p>Our Foundation is dedicated to transforming quality education so that all students can acquire and effectively apply the knowledge, attitudes, and skills.Every day we bring hope to millions of children in the world’s hardest.</p>
					</div>
				</div>
				<div className="col-lg-3 col-md-12 col-sm-12">
					<div className="edu_addmi_center_main_box_wrapper float_left">
						<img src="images/school/blog_03.jpg" alt="img"/>
						<h4><a href="#">Benefits</a></h4>
						<p>Our Foundation is dedicated to transforming quality education so that all students can acquire and effectively apply the knowledge, attitudes, and skills.Every day we bring hope to millions of children in the world’s hardest.</p>
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
            <History/>
        </>
    )
}