import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import {CourseData} from "../../data/home";

const Course = ()=>{

	const [courses, setCourse] = useState(CourseData);

    return(
        <>
            <div className="page_title_section float_left">
		<div className="page_header">
			<div className="container">
				<div className="row">
					{/* <!-- section_heading start --> */}
					<div className="col-lg-12 col-md-12 col-12 col-sm-12">
						<h1>Course </h1>
					</div>
					<div className="col-lg-12 col-md-12 col-12 col-sm-12">
						<div className="sub_title_section">
							<ul className="sub_title">
								<li> <a href="#"> Home </a> &nbsp;&nbsp;&nbsp; &gt; &nbsp;&nbsp;</li>
								<li>Course</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- inner header wrapper end -->
	<!-- edu course wrapper Start --> */}
	<div className="edu_inner_course_main_wrapper float_left">
		<div className="container">
			<div className="row">
				{ courses && courses.slice(0,9).map((courseData)=>(
					<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
						<div className="edu_slide_tab_box float_left">
							<div className="edu_slide_tabs_img_box float_left">
								<img src="images/pc1.jpg" alt="img"/>
								<div className="edu_tabs_label">
									<p><del>${courseData.oldPrice}</del>
									</p>
									<div className="edu_tabs_label_inner">
										<p>${courseData.price}</p>
									</div>
								</div>
							</div>
							<div className="edu_slide_tabs_img_cont_box float_left">
								<h4>Start Date : <span>{courseData.setCourse}</span></h4>
								<h3><a href="#">{courseData.title}</a></h3>
								<p>{courseData.description}</p>
								<h5><Link to="/course_single" state={courseData}>Join Now</Link></h5>
							</div>
						</div>
					</div>
				))
					
				}
				
				<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
					<div className="blog_pagination_section pd22 jb_cover edu_couse_pagination">
						<ul>
							<li>
								<a href="#" className="prev"> <i className="flaticon-left-arrow"></i> 
								</a>
							</li>
							<li><a href="#">1</a>
							</li>
							<li className="third_pagger"><a href="#">2</a>
							</li>
							<li className="d-block d-sm-block d-md-block d-lg-block"><a href="#">3</a>
							</li>
							<li className="d-none d-sm-block d-md-block d-lg-block"><a href="#">...</a>
							</li>
							<li className="d-none d-sm-block d-md-block d-lg-block"><a href="#">6</a>
							</li>
							<li>
								<a href="#" className="next"> <i className="flaticon-right-arrow"></i> 
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
        </>
    )
}

export default function App(){
    return(
        <>
            <Course/>
        </>
    )
}