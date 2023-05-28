import React from "react";
// import "./style/style_II.css";
// import "./style/responsive_II.css"; 
const HeaderNav2 = ()=>{
    return(
        <div className="edu_logo_header_wrapper float_left">
		<div id="search_open" className="gc_search_box">
			<input type="text" placeholder="Search here"/>
			<button><i className="fa fa-search" aria-hidden="true"></i>
			</button>
		</div>
		<div className="container">
			<div className="edu_logo_main_wrapper">
				<a href="/">
					<img src="images/logo.png" alt="logo"/>
				</a>
			</div>
			<div className="edu_seach_wrapper">
				<div id="search_button">
					<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_2" x="0px" y="0px" viewBox="0 0 451 451" style={{enableBackground:'new 0 0 451 451'}} xmlSpace="preserve">
						<g>
							<path id="search" d="M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3   s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4   C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3   s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z" />
						</g>
					</svg>
				</div>
			</div>
			<div className="kv_navigation_wrapper">
				<div className="mainmenu d-xl-block d-lg-block d-md-none d-sm-none d-none">
					<ul className="main_nav_ul">
						<li className="has-mega gc_main_navigation"><a href="#" className="gc_main_navigation hover_color">  Home&nbsp; <i className="fas fa-angle-down"></i></a>
							<ul>
								<li className="parent"><a href="/">Home-I</a>
								</li>
								<li className="parent"><a href="/home2">Home-II</a>
								</li>
							</ul>
						</li>
						{/* <!-- mega menu start --> */}
						<li className="has-mega gc_main_navigation"><a href="/about" className="gc_main_navigation hover_color">About Us</a>
						</li>
						<li className="has-mega gc_main_navigation kv_sub_menu">	<a href="#" className="gc_main_navigation hover_color">  Careers&nbsp; <i className="fas fa-angle-down"></i></a>
							{/* <!-- mega menu start --> */}
							<ul className="kv_mega_menu">
								<li className="kv_mega_menu_width">
									<div className="container jn_container">
										<div className="jn_menu_partion_div jn_menu_tabs_cont jn_menu_partion_div_responsive">
											<ul className="nav nav-tabs">
												<li className="nav-item"> <a className="nav-link active" data-toggle="tab" href="#menu1"> fire + bulding safety</a>
												</li>
												<li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#menu2"> risk + hazards</a>
												</li>
												<li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#menu3"> emergency management & planning</a>
												</li>
												<li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#menu4"> security</a>
												</li>
												<li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#menu5"> forensics</a>
												</li>
												<li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#menu6"> training + software</a>
												</li>
											</ul>
										</div>
										<div className="jn_menu_partion_div jn_menu_partion_div_responsive">
											<div className="tab-content">
												<div id="menu1" className="tab-pane active">
													<div className="row">
														<div className="col-xl-6 col-lg-12">
															<div className="jen_tabs_conent_list float_left">
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
														<div className="col-md-6 d-none d-sm-none d-md-none d-lg-none d-xl-block">
															<div className="jen_tabs_conent_list jen_tabs_conent_list2 float_left">
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
												<div id="menu2" className="tab-pane fade">
													<div className="row">
														<div className="col-xl-6 col-lg-12">
															<div className="jen_tabs_conent_list float_left">
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
														<div className="col-md-6 d-none d-sm-none d-md-none d-lg-none d-xl-block">
															<div className="jen_tabs_conent_list jen_tabs_conent_list2 float_left">
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
												<div id="menu3" className="tab-pane fade">
													<div className="row">
														<div className="col-xl-6 col-lg-12">
															<div className="jen_tabs_conent_list float_left">
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
														<div className="col-md-6 d-none d-sm-none d-md-none d-lg-none d-xl-block">
															<div className="jen_tabs_conent_list jen_tabs_conent_list2 float_left">
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
												<div id="menu4" className="tab-pane fade">
													<div className="row">
														<div className="col-xl-6 col-lg-12">
															<div className="jen_tabs_conent_list float_left">
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
														<div className="col-md-6 d-none d-sm-none d-md-none d-lg-none d-xl-block">
															<div className="jen_tabs_conent_list jen_tabs_conent_list2 float_left">
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
												<div id="menu5" className="tab-pane fade">
													<div className="row">
														<div className="col-xl-6 col-lg-12">
															<div className="jen_tabs_conent_list float_left">
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
														<div className="col-md-6 d-none d-sm-none d-md-none d-lg-none d-xl-block">
															<div className="jen_tabs_conent_list jen_tabs_conent_list2 float_left">
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
												<div id="menu6" className="tab-pane fade">
													<div className="row">
														<div className="col-xl-6 col-lg-12">
															<div className="jen_tabs_conent_list float_left">
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
														<div className="col-md-6 d-none d-sm-none d-md-none d-lg-none d-xl-block">
															<div className="jen_tabs_conent_list jen_tabs_conent_list2 float_left">
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
										<div className="jn_menu_partion_div jn_menu_partion_div_responsive">
											<div className="jn_menu_img_blog float_left">
												<img src="images/owl_5.jpg" alt="img"/>
												<h5>lorem ipsum dolor</h5>
												<a href="#">read more</a>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</li>
						<li className="has-mega gc_main_navigation"><a href="#" className="gc_main_navigation hover_color">  Blog&nbsp; <i className="fas fa-angle-down"></i></a>
							<ul>
								<li className="parent"><a href="/blog_category">Blog-Category</a>
								</li>
								<li className="parent"><a href="/blog_single">Blog-Single</a>
								</li>
							</ul>
						</li>
						{/* <!-- mega menu start --> */}
						<li className="has-mega gc_main_navigation"><a href="#" className="gc_main_navigation hover_color">  Gallery&nbsp; <i className="fas fa-angle-down"></i></a>
							<ul>
								<li className="parent"><a href="/gallery">Gallery-III</a>
								</li>
								<li className="parent"><a href="/gallery2">Gallery-IV</a>
								</li>
							</ul>
						</li>
						<li className="has-mega gc_main_navigation"><a href="#" className="gc_main_navigation hover_color">  Pages&nbsp; <i className="fas fa-angle-down"></i></a>
							<ul>
								<li className="parent"><a href="error.html">Error</a>
								</li>
								<li className="parent"><a href="/course">Course</a>
								</li>
								<li className="parent"><a href="/course_single">Course-Single</a>
								</li>
								<li className="parent"><a href="/service">Services</a>
								</li>
								<li className="parent"><a href="/teacher">Teacher</a>
								</li>
								<li className="parent"><a href="/teacher_single">Teacher-Single</a>
								</li>
								<li className="parent"><a href="/event">Event</a>
								</li>
								<li className="parent"><a href="/event_single">Event-Single</a>
								</li>
								<li className="parent"><a href="/login">Login</a>
								</li>
								<li className="parent"><a href="/register">Register</a>
								</li>
							</ul>
						</li>
						<li className="has-mega gc_main_navigation"><a href="/contact_us" className="gc_main_navigation hover_color">Contact Us</a>
						</li>
					</ul>
				</div>
				{/* <!-- mainmenu end --> */}
			</div>
			
			<header className="mobail_menu d-block d-sm-block d-md-block d-lg-none d-xl-none">
				<div className="cd-dropdown-wrapper">
					<a className="house_toggle" href="#0">	<i className="flaticon-menu"></i>
					</a>
					<nav className="cd-dropdown">
						<h2><a href="#">Edu365</a></h2>
						<a href="#0" className="cd-close">Close</a>
						<ul className="cd-dropdown-content">
							<li>
								<form className="cd-search">
									<input type="search" placeholder="Search..."/>
								</form>
							</li>
							<li className="has-children">	<a href="#">Home</a>
								<ul className="cd-secondary-dropdown icon_menu is-hidden">
									<li className="go-back"><a href="#0">Menu</a>
									</li>
									<li><a href="/">Home-I</a>
									</li>
									<li><a href="/home2">Home-II</a>
									</li>
								</ul>
							</li>
							<li><a href="/about">About</a>
							</li>
							<li className="has-children">	<a href="#">Careers</a>
								<ul className="cd-secondary-dropdown is-hidden">
									<li className="go-back"><a href="#0">Menu</a>
									</li>
									<li className="has-children">	<a href="#">fire + bulding safety</a>
										<ul className="cd-secondary-dropdown is-hidden">
											<li className="go-back"><a href="#0">Menu</a>
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
									<li className="has-children">	<a href="#">risk + hazards</a>
										<ul className="cd-secondary-dropdown is-hidden">
											<li className="go-back"><a href="#0">Menu</a>
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
									<li className="has-children">	<a href="#">emergency management & planning</a>
										<ul className="cd-secondary-dropdown is-hidden">
											<li className="go-back"><a href="#0">Menu</a>
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
									<li className="has-children">	<a href="#">security</a>
										<ul className="cd-secondary-dropdown is-hidden">
											<li className="go-back"><a href="#0">Menu</a>
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
									<li className="has-children">	<a href="#">forensics</a>
										<ul className="cd-secondary-dropdown is-hidden">
											<li className="go-back"><a href="#0">Menu</a>
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
									<li className="has-children">	<a href="#">training + software</a>
										<ul className="cd-secondary-dropdown is-hidden">
											<li className="go-back"><a href="#0">Menu</a>
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
							<li className="has-children">	<a href="#">Blog</a>
								<ul className="cd-secondary-dropdown icon_menu is-hidden">
									<li className="go-back"><a href="#0">Menu</a>
									</li>
									<li><a href="/blog_category">Blog-Category</a>
									</li>
									<li><a href="/blog_single">Blog-Single</a>
									</li>
								</ul>
							</li>
							<li className="has-children">	<a href="#">Gallery</a>
								<ul className="cd-secondary-dropdown icon_menu is-hidden">
									<li className="go-back"><a href="#0">Menu</a>
									</li>
									<li><a href="/gallery">Gallery-III</a>
									</li>
									<li><a href="/gallery2">Gallery-IV</a>
									</li>
								</ul>
							</li>
							<li className="has-children">	<a href="#">Pages</a>
								<ul className="cd-secondary-dropdown icon_menu is-hidden">
									<li className="go-back"><a href="#0">Menu</a>
									</li>
									<li><a href="error.html">Error</a>
								</li>
								<li><a href="/course">Course</a>
								</li>
								<li><a href="/course_single">Course-Single</a>
								</li>
								<li><a href="/service">Services</a>
								</li>
								<li><a href="/teacher">Teacher</a>
								</li>
								<li><a href="/teacher_single">Teacher-Single</a>
								</li>
								<li><a href="/event">Event</a>
								</li>
								<li><a href="/event_single">Event-Single</a>
								</li>
								<li><a href="/login">Login</a>
								</li>
								<li><a href="/register">Register</a>
								</li>
								</ul>
							</li>
							<li><a href="/contact_us">Contact Us</a>
							</li>
						</ul>
						{/* <!-- .cd-dropdown-content --> */}
					</nav>
					{/* <!-- .cd-dropdown --> */}
				</div>
				{/* <!-- .cd-dropdown-wrapper --> */}
			</header>
		</div>
	</div>
    )
} 

export default function App(){
    return(
        <>
            <HeaderNav2/>
        </>
    )
}