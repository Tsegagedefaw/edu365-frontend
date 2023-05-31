import React from "react";
import { useLocation } from "react-router-dom";

const TeacherSingleSection = ()=>{
	
	const location = useLocation();
	const data = location.state;
    return(
       <>
       <div className="page_title_section float_left">
		<div className="page_header">
			<div className="container">
				<div className="row">
					{/* <!-- section_heading start --> */}
					<div className="col-lg-12 col-md-12 col-12 col-sm-12">
						<h1>Teacher-Single </h1>
					</div>
					<div className="col-lg-12 col-md-12 col-12 col-sm-12">
						<div className="sub_title_section">
							<ul className="sub_title">
								<li> <a href="/"> Home </a> &nbsp;&nbsp;&nbsp; &gt; &nbsp;&nbsp;</li>
								<li>Teacher-Single</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- inner header wrapper end -->
	<!--edu team wrapper Start--> */}
	<div className="edu_teacher_single_wrapper float_left">
		<div className="edu_teacher_img_overlay"></div>
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-md-12 col-sm-12 col-12">
					<div className="team_tittle_img">
						<img src={data.image} alt="title_img" />
					</div>
				</div>
				<div className="col-lg-6 col-md-12 col-sm-12 col-12">
					<div className="row">
						<div className="col-md-12">
							<div className="team_tittle_content">
								<h3>{data.name}</h3>
								<p>{data.title}</p>
							</div>
						</div>
						<div className="col-md-12">
							<div className="social_icons_wrapper">
								<ul>
									<li className="icon1"><a href="#"><i className="fab fa-facebook-f"></i></a>
									</li>
									<li className="icon2"><a href="#"><i className="fab fa-twitter"></i></a>
									</li>
									<li className="icon3"><a href="#"><i className="fab fa-youtube"></i></a>
									</li>
									<li className="icon4"><a href="#"><i className="fab fa-linkedin-in"></i></a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div className="team_content_wrapper">
								<h4>Vivamus at libero id erat tempor volutpat.</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu bibendum nisi. Nullam dictum diam vehicula ex venenatis, nec volutpat orci scelerisque. Curabitur viverra, urna eu posuere malesuada</p>
								<p>In sit amet magna eros. Phasellus ac nisl eleifend, finibus ipsum vitae, eleifend magna. Cras molestie blandit nibh, id feugiat massa pellentesque quis.</p>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-ms-6 col-xs-12">
							<div className="team_info_wrapper">
								<div className="team_info_small_box">	<i className="fa fa-map-marker"></i>
								</div>
								<div className="team_info_contant">
									<p>King Street, Melbourne VIC 3000, Australia</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-ms-6 col-xs-12">
							<div className="team_info_wrapper">
								<div className="team_info_small_box2">	<i className="fa fa-mobile"></i>
								</div>
								<div className="team_info_contant2">
									<p>+61 3 8376 6284</p>
									<p>+61 3 8376 6285</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-ms-6 col-xs-12">
							<div className="team_info_wrapper">
								<div className="team_info_small_box3">	<i className="fa fa-mobile"></i>
								</div>
								<div className="team_info_contant3">
									<p><a href="#">education@.com</a>
									</p>
									<p><a href="#">education@.com</a>
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-ms-6 col-xs-12">
							<div className="team_info_wrapper">
								<div className="team_info_small_box3">	<i className="fab fa-skype"></i>
								</div>
								<div className="team_info_contant3">
									<p><a href="#">educationskype</a>
									</p>
									<p><a href="#">educationskype</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    <div class="team_main_contant float_left">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="team_main_contant1 float_left">
						<p>Dui vitae egestas tincidunt. Vestibulum euismod, massa et fringilla varius, felis elit dignissim purus, quis sodales erosis purus. Aliquam ac tortor eget urna bibendum porttitor. Proin lacinia libero ut volutpat viverra. Cras eget pharetra nibh, nec scelerisque libero. In viverra erat eu eros maximus sodales. Praesent eros nunc, molestie vel ante tristique, condimentum pretium est. Nullam ex diam, efficitur nec nibh scelerisque, placerat viverra turpis.</p>
					</div>
				</div>
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="team_main_contant2">	<i class="fa fa-quote-left"></i>
						<p><i>Vestibulum orci eros, dapibus vitae turpis vitae, suscipit efficitur sem. Morbi convallis ipsum neque, at sollicitudin orci lacinia at. Proin ultricies, enim amalesuada commodo, sapien elit elementum nunc, in rutrum libero ipsum vitae justo.</i>
						</p>	<i class="fa fa-quote-right"></i>
					</div>
				</div>
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="team_main_contant3">
						<p>Vestibulum orci eros, dapibus vitae turpis vitae, suscipit efficitur sem. Morbi convallis ipsum neque, at sollicitudin orci lacinia at. Proin ultricies, enim a malesuada commodo, sapien elit elementum nunc, in rutrum libero ipsum vitae justo. Phasellus quis quam neque. Pellentesque aliquam semper risus, in elementum risus luctus a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id orci nec velit ornare lacinia in id nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut pulvinar elit eget vehicula volutpat.</p>
						<p>Quisque quis accumsan dui. Vivamus aliquam dapibus magna, ac porttitor justo malesuada ac. Integer augue libero, pulvinar sed tristique quis, vulputate gravida ligula. Nulla dignissim scelerisque purus, at rutrum sapien dignissim interdum. Proin ut turpis urna. Maecenas in dolor pellentesque odio condimentum volutpat. Fusce feugiat efficitur justo. Nullam eu elit ultrices, pretium dolor in, porta magna.</p>
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
            <TeacherSingleSection/>
        </>
    )
}