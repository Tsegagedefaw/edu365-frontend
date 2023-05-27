import React from "react";

const HeaderNav = ()=>{
    return(
        <div class="edu_navihation_header_wrapper float_left">
		<div id="search_open" class="gc_search_box">
			<input type="text" placeholder="Search here"/>
			<button><i class="fa fa-search" aria-hidden="true"></i>
			</button>
		</div>
		<div class="container">
			<header class="mobail_menu d-block d-sm-block d-md-block d-lg-none d-xl-none">
				<div class="cd-dropdown-wrapper">
					<a class="house_toggle" href="#0">	<i class="flaticon-menu"></i>
					</a>
					<nav class="cd-dropdown">
						<h2><a href="#">Edu365</a></h2>
						<a href="#0" class="cd-close">Close</a>
						<ul class="cd-dropdown-content">
							<li>
								<form class="cd-search">
									<input type="search" placeholder="Search..."/>
								</form>
							</li>
							<li class="has-children">	<a href="#">Home</a>
								<ul class="cd-secondary-dropdown icon_menu is-hidden">
									<li class="go-back"><a href="#0">Menu</a>
									</li>
									<li><a href="index.html">Home-I</a>
									</li>
									<li><a href="index_II.html">Home-II</a>
									</li>
								</ul>
							</li>
							<li><a href="about_us.html">About</a>
							</li>
							<li class="has-children">	<a href="#">Careers</a>
								<ul class="cd-secondary-dropdown is-hidden">
									<li class="go-back"><a href="#0">Menu</a>
									</li>
									<li class="has-children">	<a href="#">fire + bulding safety</a>
										<ul class="cd-secondary-dropdown is-hidden">
											<li class="go-back"><a href="#0">Menu</a>
											</li>
											<li><a href="#">Environmental Consulting</a>
											</li>
											<li><a href="#">Government and Military</a>
											</li>
											<li><a href="#">Healthcare</a>
											</li>
											<li><a href="#">Historic Buildings & Museums</a>
											</li>
											<li><a href="#">Hospitality and Entertainment</a>
											</li>
										</ul>
										{/* <!-- .cd-secondary-dropdown --> */}
									</li>
									{/* <!-- .has-children --> */}
									<li class="has-children">	<a href="#">risk + hazards</a>
										<ul class="cd-secondary-dropdown is-hidden">
											<li class="go-back"><a href="#0">Menu</a>
											</li>
											<li><a href="#">Environmental Consulting</a>
											</li>
											<li><a href="#">Government and Military</a>
											</li>
											<li><a href="#">Healthcare</a>
											</li>
											<li><a href="#">Historic Buildings & Museums</a>
											</li>
											<li><a href="#">Hospitality and Entertainment</a>
											</li>
										</ul>
										{/* <!-- .cd-secondary-dropdown --> */}
									</li>
									{/* <!-- .has-children --> */}
									<li class="has-children">	<a href="#">emergency management & planning</a>
										<ul class="cd-secondary-dropdown is-hidden">
											<li class="go-back"><a href="#0">Menu</a>
											</li>
											<li><a href="#">Environmental Consulting</a>
											</li>
											<li><a href="#">Government and Military</a>
											</li>
											<li><a href="#">Healthcare</a>
											</li>
											<li><a href="#">Historic Buildings & Museums</a>
											</li>
											<li><a href="#">Hospitality and Entertainment</a>
											</li>
										</ul>
										{/* <!-- .cd-secondary-dropdown --> */}
									</li>
									{/* <!-- .has-children --> */}
									<li class="has-children">	<a href="#">security</a>
										<ul class="cd-secondary-dropdown is-hidden">
											<li class="go-back"><a href="#0">Menu</a>
											</li>
											<li><a href="#">Environmental Consulting</a>
											</li>
											<li><a href="#">Government and Military</a>
											</li>
											<li><a href="#">Healthcare</a>
											</li>
											<li><a href="#">Historic Buildings & Museums</a>
											</li>
											<li><a href="#">Hospitality and Entertainment</a>
											</li>
										</ul>
										{/* <!-- .cd-secondary-dropdown --> */}
									</li>
									{/* <!-- .has-children --> */}
									<li class="has-children">	<a href="#">forensics</a>
										<ul class="cd-secondary-dropdown is-hidden">
											<li class="go-back"><a href="#0">Menu</a>
											</li>
											<li><a href="#">Environmental Consulting</a>
											</li>
											<li><a href="#">Government and Military</a>
											</li>
											<li><a href="#">Healthcare</a>
											</li>
											<li><a href="#">Historic Buildings & Museums</a>
											</li>
											<li><a href="#">Hospitality and Entertainment</a>
											</li>
										</ul>
										{/* <!-- .cd-secondary-dropdown --> */}
									</li>
									{/* <!-- .has-children --> */}
									<li class="has-children">	<a href="#">training + software</a>
										<ul class="cd-secondary-dropdown is-hidden">
											<li class="go-back"><a href="#0">Menu</a>
											</li>
											<li><a href="#">Environmental Consulting</a>
											</li>
											<li><a href="#">Government and Military</a>
											</li>
											<li><a href="#">Healthcare</a>
											</li>
											<li><a href="#">Historic Buildings & Museums</a>
											</li>
											<li><a href="#">Hospitality and Entertainment</a>
											</li>
										</ul>
										{/* <!-- .cd-secondary-dropdown --> */}
									</li>
									{/* <!-- .has-children --> */}
								</ul>
								{/* <!-- .cd-secondary-dropdown --> */}
							</li>
							{/* <!-- .has-children --> */}
							<li class="has-children">	<a href="#">Blog</a>
								<ul class="cd-secondary-dropdown icon_menu is-hidden">
									<li class="go-back"><a href="#0">Menu</a>
									</li>
									<li><a href="blog_category.html">Blog-Category</a>
									</li>
									<li><a href="blog_single.html">Blog-Single</a>
									</li>
								</ul>
							</li>
							<li class="has-children">	<a href="#">Gallery</a>
								<ul class="cd-secondary-dropdown icon_menu is-hidden">
									<li class="go-back"><a href="#0">Menu</a>
									</li>
									<li><a href="gallery_III.html">Gallery-III</a>
									</li>
									<li><a href="gallery_IV.html">Gallery-IV</a>
									</li>
								</ul>
							</li>
							<li class="has-children">	<a href="#">Pages</a>
								<ul class="cd-secondary-dropdown icon_menu is-hidden">
									<li class="go-back"><a href="#0">Menu</a>
									</li>
									<li><a href="error.html">Error</a>
								</li>
								<li><a href="course.html">Course</a>
								</li>
								<li><a href="course_single.html">Course-Single</a>
								</li>
								<li><a href="service.html">Services</a>
								</li>
								<li><a href="teacher.html">Teacher</a>
								</li>
								<li><a href="teacher_single.html">Teacher-Single</a>
								</li>
								<li><a href="event.html">Event</a>
								</li>
								<li><a href="event_single.html">Event-Single</a>
								</li>
								<li><a href="login.html">Login</a>
								</li>
								<li><a href="register.html">Register</a>
								</li>
								</ul>
							</li>
							<li><a href="contact_us">Contact Us</a>
							</li>
						</ul>
						{/* <!-- .cd-dropdown-content --> */}
					</nav>
					{/* <!-- .cd-dropdown --> */}
				</div>
				{/* <!-- .cd-dropdown-wrapper --> */}
			</header>
			<div class="kv_navigation_wrapper">
				<div class="mainmenu d-xl-block d-lg-block d-md-none d-sm-none d-none">
					<ul class="main_nav_ul">
						<li class="has-mega gc_main_navigation"><a href="#" class="gc_main_navigation hover_color">  Home&nbsp; <i class="fas fa-angle-down"></i></a>
							<ul>
								<li class="parent"><a href="index.html">Home-I</a>
								</li>
								<li class="parent"><a href="index_II.html">Home-II</a>
								</li>
							</ul>
						</li>
						{/* <!-- mega menu start --> */}
						<li class="has-mega gc_main_navigation"><a href="about_us.html" class="gc_main_navigation hover_color">About Us</a>
						</li>
						<li class="has-mega gc_main_navigation kv_sub_menu">	<a href="#" class="gc_main_navigation hover_color">  Careers&nbsp; <i class="fas fa-angle-down"></i></a>
							{/* <!-- mega menu start --> */}
							<ul class="kv_mega_menu">
								<li class="kv_mega_menu_width">
									<div class="container jn_container">
										<div class="jn_menu_partion_div jn_menu_tabs_cont jn_menu_partion_div_responsive">
											<ul class="nav nav-tabs">
												<li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#menu1"> fire + bulding safety</a>
												</li>
												<li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#menu2"> risk + hazards</a>
												</li>
												<li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#menu3"> emergency management & planning</a>
												</li>
												<li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#menu4"> security</a>
												</li>
												<li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#menu5"> forensics</a>
												</li>
												<li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#menu6"> training + software</a>
												</li>
											</ul>
										</div>
										<div class="jn_menu_partion_div jn_menu_partion_div_responsive">
											<div class="tab-content">
												<div id="menu1" class="tab-pane active">
													<div class="row">
														<div class="col-xl-6 col-lg-12">
															<div class="jen_tabs_conent_list float_left">
																<ul>
																	<li><a href="#">Environmental Consulting</a>
																	</li>
																	<li><a href="#">Government and Military</a>
																	</li>
																	<li><a href="#">Healthcare</a>
																	</li>
																	<li><a href="#">Historic Buildings & Museums</a>
																	</li>
																	<li><a href="#">Hospitality and Entertainment</a>
																	</li>
																</ul>
															</div>
														</div>
														<div class="col-md-6 d-none d-sm-none d-md-none d-lg-none d-xl-block">
															<div class="jen_tabs_conent_list jen_tabs_conent_list2 float_left">
																<ul>
																	<li><a href="#">Environmental Consulting</a>
																	</li>
																	<li><a href="#">Government and Military</a>
																	</li>
																	<li><a href="#">Healthcare</a>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
												<div id="menu2" class="tab-pane fade">
													<div class="row">
														<div class="col-xl-6 col-lg-12">
															<div class="jen_tabs_conent_list float_left">
																<ul>
																	<li><a href="#">Environmental Consulting</a>
																	</li>
																	<li><a href="#">Government and Military</a>
																	</li>
																	<li><a href="#">Environmental Consulting</a>
																	</li>
																	<li><a href="#">Government and Military</a>
																	</li>
																</ul>
															</div>
														</div>
														<div class="col-md-6 d-none d-sm-none d-md-none d-lg-none d-xl-block">
															<div class="jen_tabs_conent_list jen_tabs_conent_list2 float_left">
																<ul>
																	<li><a href="#">Environmental Consulting</a>
																	</li>
																	<li><a href="#">Government and Military</a>
																	</li>
																	<li><a href="#">Healthcare</a>
																	</li>
																	<li><a href="#">Healthcare</a>
																	</li>
																	<li><a href="#">Historic Buildings & Museums</a>
																	</li>
																	<li><a href="#">Hospitality and Entertainment</a>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
												<div id="menu3" class="tab-pane fade">
													<div class="row">
														<div class="col-xl-6 col-lg-12">
															<div class="jen_tabs_conent_list float_left">
																<ul>
																	<li><a href="#">Environmental Consulting</a>
																	</li>
																	<li><a href="#">Government and Military</a>
																	</li>
																	<li><a href="#">Historic Buildings & Museums</a>
																	</li>
																	<li><a href="#">Hospitality and Entertainment</a>
																	</li>
																</ul>
															</div>
														</div>
														<div class="col-md-6 d-none d-sm-none d-md-none d-lg-none d-xl-block">
															<div class="jen_tabs_conent_list jen_tabs_conent_list2 float_left">
																<ul>
																	<li><a href="#">Environmental Consulting</a>
																	</li>
																	<li><a href="#">Government and Military</a>
																	</li>
																	<li><a href="#">Healthcare</a>
																	</li>
																	<li><a href="#">Healthcare</a>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
												<div id="menu4" class="tab-pane fade">
													<div class="row">
														<div class="col-xl-6 col-lg-12">
															<div class="jen_tabs_conent_list float_left">
																<ul>
																	<li><a href="#">Environmental Consulting</a>
																	</li>
																	<li><a href="#">Government and Military</a>
																	</li>
																	<li><a href="#">Healthcare</a>
																	</li>
																	<li><a href="#">Historic Buildings & Museums</a>
																	</li>
																	<li><a href="#">Hospitality and Entertainment</a>
																	</li>
																</ul>
															</div>
														</div>
														<div class="col-md-6 d-none d-sm-none d-md-none d-lg-none d-xl-block">
															<div class="jen_tabs_conent_list jen_tabs_conent_list2 float_left">
																<ul>
																	<li><a href="#">Environmental Consulting</a>
																	</li>
																	<li><a href="#">Government and Military</a>
																	</li>
																	<li><a href="#">Healthcare</a>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
												<div id="menu5" class="tab-pane fade">
													<div class="row">
														<div class="col-xl-6 col-lg-12">
															<div class="jen_tabs_conent_list float_left">
																<ul>
																	<li><a href="#">Environmental Consulting</a>
																	</li>
																	<li><a href="#">Government and Military</a>
																	</li>
																	<li><a href="#">Environmental Consulting</a>
																	</li>
																	<li><a href="#">Government and Military</a>
																	</li>
																</ul>
															</div>
														</div>
														<div class="col-md-6 d-none d-sm-none d-md-none d-lg-none d-xl-block">
															<div class="jen_tabs_conent_list jen_tabs_conent_list2 float_left">
																<ul>
																	<li><a href="#">Environmental Consulting</a>
																	</li>
																	<li><a href="#">Government and Military</a>
																	</li>
																	<li><a href="#">Healthcare</a>
																	</li>
																	<li><a href="#">Healthcare</a>
																	</li>
																	<li><a href="#">Historic Buildings & Museums</a>
																	</li>
																	<li><a href="#">Hospitality and Entertainment</a>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
												<div id="menu6" class="tab-pane fade">
													<div class="row">
														<div class="col-xl-6 col-lg-12">
															<div class="jen_tabs_conent_list float_left">
																<ul>
																	<li><a href="#">Environmental Consulting</a>
																	</li>
																	<li><a href="#">Government and Military</a>
																	</li>
																	<li><a href="#">Historic Buildings & Museums</a>
																	</li>
																	<li><a href="#">Hospitality and Entertainment</a>
																	</li>
																</ul>
															</div>
														</div>
														<div class="col-md-6 d-none d-sm-none d-md-none d-lg-none d-xl-block">
															<div class="jen_tabs_conent_list jen_tabs_conent_list2 float_left">
																<ul>
																	<li><a href="#">Environmental Consulting</a>
																	</li>
																	<li><a href="#">Government and Military</a>
																	</li>
																	<li><a href="#">Healthcare</a>
																	</li>
																	<li><a href="#">Healthcare</a>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="jn_menu_partion_div jn_menu_partion_div_responsive">
											<div class="jn_menu_img_blog float_left">
												<img src="images/owl_5.jpg" alt="img"/>
												<h5>lorem ipsum dolor</h5>
												<a href="#">read more</a>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</li>
						<li class="has-mega gc_main_navigation"><a href="#" class="gc_main_navigation hover_color">  Blog&nbsp; <i class="fas fa-angle-down"></i></a>
							<ul>
								<li class="parent"><a href="blog_category.html">Blog-Category</a>
								</li>
								<li class="parent"><a href="blog_single.html">Blog-Single</a>
								</li>
							</ul>
						</li>
						{/* <!-- mega menu start --> */}
						<li class="has-mega gc_main_navigation"><a href="#" class="gc_main_navigation hover_color">  Gallery&nbsp; <i class="fas fa-angle-down"></i></a>
							<ul>
								<li class="parent"><a href="gallery_III.html">Gallery-III</a>
								</li>
								<li class="parent"><a href="gallery_IV.html">Gallery-IV</a>
								</li>
							</ul>
						</li>
						<li class="has-mega gc_main_navigation"><a href="#" class="gc_main_navigation hover_color">  Pages&nbsp; <i class="fas fa-angle-down"></i></a>
							<ul>
								<li class="parent"><a href="error.html">Error</a>
								</li>
								<li class="parent"><a href="course.html">Course</a>
								</li>
								<li class="parent"><a href="course_single.html">Course-Single</a>
								</li>
								<li class="parent"><a href="service.html">Services</a>
								</li>
								<li class="parent"><a href="teacher.html">Teacher</a>
								</li>
								<li class="parent"><a href="teacher_single.html">Teacher-Single</a>
								</li>
								<li class="parent"><a href="event.html">Event</a>
								</li>
								<li class="parent"><a href="event_single.html">Event-Single</a>
								</li>
								<li class="parent"><a href="login.html">Login</a>
								</li>
								<li class="parent"><a href="register.html">Register</a>
								</li>
							</ul>
						</li>
						<li class="has-mega gc_main_navigation"><a href="contact_us.html" class="gc_main_navigation hover_color">Contact Us</a>
						</li>
					</ul>
				</div>
				{/* <!-- mainmenu end --> */}
			</div>
			<div class="edu_profile_wrapper">
				<div class="nice-select" tabindex="0">	<span class="current"><img src="images/profile_img.png" alt="img"/> <span class="hidden_xs_content"></span></span>
					<ul class="list">
						<li><a href="#">Upgrade Now</a>
						</li>
						<li><a href="#"> Profile</a>
						</li>
						<li><a href="#"> My Balance</a>
						</li>
						<li><a href="#"> My Task</a>
						</li>
						<li><a href="#"> My Calender</a>
						</li>
						<li><a href="#"> Inbox</a>
						</li>
						<li><a href="#"> Setting</a>
						</li>
						<li><a href="#"> Help</a>
						</li>
						<li><a href="#"> Lock Screen</a>
						</li>
						<li><a href="#"> Logout</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="edu_message_dropbox_wrapper">
				<div class="nice-select budge_noti_wrapper" tabindex="0">	<span class="current"><i class="flaticon-notification"></i></span>
					<div class="budge_noti">4</div>
					<ul class="list">
						<li><a href="#">2 New Messages</a>
						</li>
						<li>
							<div class="crm_mess_main_box_wrapper">
								<div class="crm_mess_img_wrapper">
									<img src="images/mess1.jpg" alt="img"/>
								</div>
								<div class="crm_mess_img_cont_wrapper">
									<h4>Mr.Farhan <span>01:30PM</span></h4>
									<p>I'm Leaving early</p>
								</div>
							</div>
						</li>
						<li>
							<div class="crm_mess_main_box_wrapper">
								<div class="crm_mess_img_wrapper">
									<img src="images/mess2.jpg" alt="img"/>
								</div>
								<div class="crm_mess_img_cont_wrapper">
									<h4>Mr.ajay <span>01:30PM</span></h4>
									<p>I'm Leaving early</p>
								</div>
							</div>
						</li>
						<li>
							<div class="crm_mess_main_box_wrapper">
								<div class="crm_mess_img_wrapper">
									<img src="images/mess3.jpg" alt="img"/>
								</div>
								<div class="crm_mess_img_cont_wrapper">
									<h4>Mr.akshay <span>01:30PM</span></h4>
									<p>I'm Leaving early</p>
								</div>
							</div>
						</li>
						<li>
							<div class="crm_mess_main_box_wrapper">
								<div class="crm_mess_img_wrapper">
									<img src="images/mess4.jpg" alt="img"/>
								</div>
								<div class="crm_mess_img_cont_wrapper">
									<h4>Mr.john <span>01:30PM</span></h4>
									<p>I'm Leaving early</p>
								</div>
							</div>
						</li>
						<li>
							<div class="crm_mess_all_main_box_wrapper">
								<p><a href="#">See All</a>
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
			{/* <div class="edu_seach_wrapper">
				<div id="search_button">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_2" x="0px" y="0px" viewBox="0 0 451 451" style="enable-background:new 0 0 451 451;" xml:space="preserve">
						<g>
							<path id="search" d="M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3   s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4   C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3   s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z" />
						</g>
					</svg>
				</div>
			</div> */}
		</div>
	</div>
    )
}
export default function App() {
  return (
    <div>
      <HeaderNav />
    </div>
  );
}