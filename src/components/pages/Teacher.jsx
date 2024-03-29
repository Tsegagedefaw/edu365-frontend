import React from "react";
import { Link } from "react-router-dom";

import {User} from "../../data/home";

const TeacherSection = ()=>{
    return(
        <>
            <div className="page_title_section float_left">
		<div className="page_header">
			<div className="container">
				<div className="row">
					{/* <!-- section_heading start --> */}
					<div className="col-lg-12 col-md-12 col-12 col-sm-12">
						<h1>Our Teacher </h1>
					</div>
					<div className="col-lg-12 col-md-12 col-12 col-sm-12">
						<div className="sub_title_section">
							<ul className="sub_title">
								<li> <a href="#"> Home </a> &nbsp;&nbsp;&nbsp; &gt; &nbsp;&nbsp;</li>
								<li>Our Teacher</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
			</div>
	{/* <!-- inner header wrapper end -->
	<!--edu team wrapper Start--> */}
	<div className="edu_team_main_wrapper edu_team_main_wrapper_inner float_left">
		<div className="container">
			<div className="row">
				{User && User.map((users)=>(
				<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-3 self_align_center">
					
						<div className="edu_team_main_box">
							<h3><Link to="/teacher_single" state={users}>{users.name}</Link></h3>
							<p>{users.title}</p>
							<ul>
								<li><a href="#"><i className="fab fa-facebook-f"></i></a>
								</li>
								<li><a href="#"><i className="fab fa-twitter"></i></a>
								</li>
								<li><a href="#"><i className="fab fa-youtube"></i></a>
								</li>
								<li><a href="#"><i className="fab fa-linkedin-in"></i></a>
								</li>
							</ul>
							<div className="edu_team_inner_box">
								<img src={users.image} alt="img"/>
							</div>
						</div>
					
					
				</div>))}
				<div className="col-md-12">
					<div className="edu_bottom_btn_wrapper float_left">	<a href="#">Read More</a>
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
            <TeacherSection/>
        </>
    )
}