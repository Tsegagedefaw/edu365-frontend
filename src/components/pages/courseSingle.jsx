import React from "react";
import { useLocation } from "react-router-dom";

const CourseSingleSection = ()=>{

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
						<h1>Course single</h1>
					</div>
					<div className="col-lg-12 col-md-12 col-12 col-sm-12">
						<div className="sub_title_section">
							<ul className="sub_title">
								<li> <a href="/"> Home </a> &nbsp;&nbsp;&nbsp; &gt; &nbsp;&nbsp;</li>
								<li>Course single</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- inner header wrapper end -->
	<!--blog wrapper start--> */}
	<div className="blog_wrapper float_left">
		<div className="container">
			<div className="row">
				<div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
					<div className="blog-post-wrapper iner_blog">
						<div className="post-thumbnail">
							<img src={data.image} style={{maxHeight:'400px'}} className="img-responsive " alt="Image"/>
						</div>
						{/* <!-- /.post-thumbnail --> */}
						<div className="row">
							<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
								<div className="single_course_box_wrapper">
									<div className="single_course_categories_box">	<i className="fa fa-graduation-cap"></i>
									</div>
									<div className="single_course_box_content">
										<p>{data.title}</p>
										<h4><b>Lilton Fandores</b></h4>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
								<div className="single_course_box_wrapper">
									<div className="single_course_categories_box">	<i className="fa fa-calendar"></i>
									</div>
									<div className="single_course_box_content">
										<p>Course Start Date</p>
										<h4><b>{data.StartDate}</b></h4>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
								<div className="single_course_box_wrapper">
									<div className="single_course_categories_box">	<i className="fa fa-clock"></i>
									</div>
									<div className="single_course_box_content">
										<p>Course Duration</p>
										<h4><b>{data.courseDuration}</b></h4>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
								<div className="single_course_box_wrapper">
									<div className="single_course_categories_box">	<i className="fa fa-bookmark"></i>
									</div>
									<div className="single_course_box_content">
										<p>Language</p>
										<h4><b>{data.language}</b></h4>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
								<div className="single_course_box_wrapper">
									<div className="single_course_categories_box">	<i className="fa fa-star"></i>
									</div>
									<div className="single_course_box_content">
										<p>Review</p>	<span><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></span>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
								<div className="single_course_box_wrapper">
									<div className="single_course_categories_box">	<i className="fas fa-dollar-sign"></i>
									</div>
									<div className="single_course_box_content">
										<p>Price</p>
										<h4><b>{data.price}</b></h4>
									</div>
								</div>
							</div>
							<div className="col-md-12">
								<div className="edu_bottom_btn_wrapper float_left">	<a href="#">Join Now</a>
								</div>
								<div className="course_second_content_wrapper float_left">
									<h4><b>Description {data.title}</b></h4>
									<p>{data.discription}</p>
								</div>
								<div className="course_third_content_wrapper float_left">
									<h4><b>What You Will Learn</b></h4>
									<p>{data.discription}
										<br/>
										<br/>Morbi bibendum quis lectus nec gravida. Donec bibendum viverra urna a euismod. Nam eget nunc tortor. Integer odio purus, elementum vel auctor in, tincidunt nec est. Sed et felis imperdiet, laoreet lacus in, faucibus eros. Ut quis vulputate dolor, in sagittis nulla. Etiam at pretium magna.</p>
								</div>
								<div className="contant_img_course_wrapper float_left">
									<div className="row">
										<div className="col-lg-3 col-md-3 col-sm-6 col-6">
											<div className="content_img1">
												<img src="images/content_img1.jpg" alt="contnt_img" className="img-responsive" />
											</div>
										</div>
										<div className="col-lg-3 col-md-3 col-sm-6 col-6">
											<div className="content_img1">
												<img src="images/content_img2.jpg" alt="contnt_img" className="img-responsive" />
											</div>
										</div>
										<div className="col-lg-3 col-md-3 col-sm-6 col-6">
											<div className="content_img1">
												<img src="images/content_img3.jpg" alt="contnt_img" className="img-responsive" />
											</div>
										</div>
										<div className="col-lg-3 col-md-3 col-sm-6 col-6">
											<div className="content_img1">
												<img src="images/content_img4.jpg" alt="contnt_img" className="img-responsive" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- /.blog-content --> */}
					</div>
					<div className="blog_dark_wrapper  blog_single_box float_left">
						<img src="images/quote.png" alt="img"/>
                        <h1>" The Education of Tomorrow, Rooted in Tradition Invite YouLearning Management System"</h1>
						<div className="port-single-entry-meta">
							<ul>
								<li> <a href="#">
                                      by- joahn doe</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="float_left">
						<p>Sollicitudin, lorem quis bibe u auctor, nisi elit conat ipsu, nec sagittis sem ni id elit. Duis sed odio sit amet nibh vulpute rsus. Proin gravida nibh vel velit auctor aliquet. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							<br/>
							<br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</div>
					<div className="blog_single_img float_left">
						<div className="blog_image_single">
							<img src="images/bs1.png" className="img-responsive" alt="blog_img1"/>
						</div>
						<div className="blog_text_single">
							<p>Duis et nibh blat, eifend liberost amet, suscipit enim. Sed rutrum suere orci. Lorem ipsum dolor sitt amet. This is Photoshoctor aliqet. Aenean sollicitudin, lorem quis bibendum.</p>
							<ul>
								<li>
									<a href="#"> <i className="far fa-thumbs-up"></i> lorem quis bibendum auctor, nisi elit.</a>
								</li>
								<li>
									<a href="#"> <i className="far fa-thumbs-up"></i> bibendum Sollib bibendum auctor, nisi elit.</a>
								</li>
								<li>
									<a href="#"> <i className="far fa-thumbs-up"></i> citudin, lorem quis bibendum consequat bibendum</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="blog_single_img float_left">
						<div className="blog_image_single">
							<img src="images/bs2.png" className="img-responsive" alt="blog_img1"/>
						</div>
						<div className="blog_text_single">
							<p>Duis et nibh blat, eifend liberost amet, suscipit enim. Sed rutrum suere orci. Lorem ipsum dolor sitt amet. This is Photoshoctor aliqet. Aenean sollicitudin, lorem quis bibendum.</p>
							<ul>
								<li>
									<a href="#"> <i className="far fa-thumbs-up"></i> lorem quis bibendum auctor, nisi elit.</a>
								</li>
								<li>
									<a href="#"> <i className="far fa-thumbs-up"></i> bibendum Sollib bibendum auctor, nisi elit.</a>
								</li>
								<li>
									<a href="#"> <i className="far fa-thumbs-up"></i> citudin, lorem quis bibendum consequat bibendum</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="blog_single_text float_left">
						<p>Sollicitudin, lorem quis bibe u auctor, nisi elit conat ipsu, nec sagittis sem ni id elit. Duis sed odio sit amet nibh vulpute rsus. Proin gravida nibh vel velit auctor aliquet. Lorem ipsum dolor sit amet, consecteolore magna aliqua.
							<br/>
							<br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis auttur adipisicing elit, sed do eiod tempor incididunt ut labore et dolore magna aliqua. Ut en esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</div>
					<div className="tb_btm_link_left">
						<ul>
							<li><span><i className="fa fa-tag"></i> Tags :</span>
							</li>
							<li><a href="#">business </a>
							</li>
							<li><a href="#">corporate </a>
							</li>
							<li><a href="#">services</a>
							</li>
						</ul>
					</div>
					<div className="tb_btm_link_right">
						<ul>
							<li>share :</li>
							<li><a href="#"><i className="fab fa-facebook-f"></i></a>
							</li>
							<li><a href="#"><i className="fab fa-twitter"></i></a>
							</li>
							<li><a href="#"><i className="fab fa-google-plus-g"></i></a>
							</li>
							<li><a href="#"><i className="fab fa-linkedin-in"></i></a>
							</li>
						</ul>
					</div>
					<div className="btc_blog_post_admin_main_wrapper float_left">
						<div className="btc_blog_single_post_admin_img">
							<img src="images/author.png" alt="admin_img"/>
						</div>
						<div className="btc_blog_single_post_admin_img_cont">
							<h2>about admin</h2>
							<h1><a href="#">joahn doe</a></h1>
							<p className="ggg">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctorm, nec sagittis sem nibh id elit.</p>
						</div>
					</div>
					<div className="comments_wrapper float_left">
						<div className="widget_heading">
							<h2>comments (04)</h2>
						</div>
						<div className="row">
							<div className="col-lg-12 col-md-12 col-12 col-sm-12">
								<div className="comments_Box">
									<div className="img_wrapper">
										<img src="images/author1.jpg" className="" alt="author_img" />
									</div>
									<div className="text_wrapper">
										<div className="author_detail"> <span className="author_name"> Jhon Doe <i className="fa fa-circle"></i> </span>
											<span className="publish_date"> July 1, 2019 - <a href="#">Reply</a> </span>
										</div>
										<div className="author_content">
											<p>Integer porttitor fringilla vestibulum. Phasellus curs our tinnt nulla, ut mattis augue finibus ac. Vivamus elementum enim ac enim ultrices rhoncus.</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-12 col-md-12 col-12 col-sm-12">
								<div className="comments_Box">
									<div className="row">
										<div className="col-lg-11 col-md-12 col-12 col-sm-12 offset-lg-1">
											<div className="img_wrapper">
												<img src="images/author2.jpg" className="" alt="author_img" />
											</div>
											<div className="text_wrapper">
												<div className="author_detail"> <span className="author_name"> Steffa Ferello  <i className="fa fa-circle"></i> </span>
													<span className="publish_date"> July 4, 2019 - <a href="#">Reply</a> </span>
												</div>
												<div className="author_content">
													<p>Integer porttitor fringilla vestibulum. Phasellus curs our tinnt nulla, ut mattis augue finibus ac. Vivamus elementum enim ac enim ultrices rhoncus.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-12 col-md-12 col-12 col-sm-12">
								<div className="comments_Box">
									<div className="img_wrapper">
										<img src="images/author3.jpg" className="" alt="author_img" />
									</div>
									<div className="text_wrapper">
										<div className="author_detail"> <span className="author_name"> Matin Lauran <i className="fa fa-circle"></i> </span>
											<span className="publish_date"> March 1, 2019 - <a href="#">Reply</a> </span>
										</div>
										<div className="author_content">
											<p>Integer porttitor fringilla vestibulum. Phasellus curs our tinnt nulla, ut mattis augue finibus ac. Vivamus elementum enim ac enim ultrices rhoncus.</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-12 col-md-12 col-12 col-sm-12">
								<div className="comments_Box last_comment_box">
									<div className="img_wrapper">
										<img src="images/author4.jpg" className="" alt="author_img" />
									</div>
									<div className="text_wrapper">
										<div className="author_detail"> <span className="author_name"> Eva Marilla <i className="fa fa-circle"></i></span>
											<span className="publish_date"> July 10, 2019 - <a href="#">Reply</a> </span>
										</div>
										<div className="author_content">
											<p>Integer porttitor fringilla vestibulum. Phasellus curs our tinnt nulla, ut mattis augue finibus ac. Vivamus elementum enim ac enim ultrices rhoncus.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="comments_form float_left">
						<div className="widget_heading">
							<h2>leave a comment</h2>
						</div>
						<div className="row">
							<div className="col-md-6 col-sm-12">
								<div className="formsix-pos">
									<div className="form-group i-name">
										<label className="sr-only">Name</label>
										<input type="text" className="form-control" required="" id="namTen-first" placeholder="Full Name *"/> <i className="fas fa-user-alt"></i>
									</div>
								</div>
							</div>
							{/* <!-- /.col-md-6 --> */}
							<div className="col-md-6 col-sm-12">
								<div className="formsix-e">
									<div className="form-group i-email">
										<label className="sr-only">Email</label>
										<input type="email" className="form-control" required="" id="emailTen" placeholder="Email Address *"/> <i className="fas fa-envelope"></i>
									</div>
								</div>
							</div>
							{/* <!-- /.col-md-6 --> */}
							<div className="col-md-12 col-sm-12">
								<div className="formsix-m">
									<div className="form-group i-message">
										<label className="sr-only">Message</label>
										<textarea className="form-control" required="" rows="4" id="messageTen" placeholder="Message"></textarea> <i className="fas fa-comment"></i>
									</div>
								</div>
							</div>
							{/* <!-- /.col-md-12 --> */}
						</div>
						{/* <!-- /.row--> */}
						<div className="edu_bottom_btn_wrapper edu_btn float_left">	<a href="#">Send Now</a>
						</div>
					</div>
				</div>
				<div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 right_sidebar blog_single_sidebar">
					<div className="sidebar_widget float_left">
						<div className="widget_heading">
							<h2>Search feed</h2>
						</div>
						<form className="search_form" role="search">
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Search..."/>
							</div>
							<button type="submit"><i className="fa fa-search"></i>
							</button>
						</form>
					</div>
					<div className="sidebar_widget float_left">
						<div className="widget_heading">
							<h2>latest post</h2>
						</div>
						<div className="blog_wrapper22 float_left">
							<div className="blog_image">
								<img src="images/blog1.jpg" className="img-responsive" alt="blog_img1" />
							</div>
							<div className="blog_text">
								<h5><a href="#">How to Become Master In CSS within qa Week.</a></h5>
								<div className="blog_date">June 28, 2018-19</div>
							</div>
						</div>
						<div className="blog_wrapper22 float_left">
							<div className="blog_image">
								<img src="images/blog2.jpg" className="img-responsive" alt="blog_img2" />
							</div>
							<div className="blog_text">
								<h5><a href="#">Connecting volunteers & nonprofitsz worldwide.</a></h5>
								<div className="blog_date">June 28, 2018-19</div>
							</div>
						</div>
						<div className="blog_wrapper22 float_left">
							<div className="blog_image">
								<img src="images/blog3.jpg" className="img-responsive" alt="blog_img3" />
							</div>
							<div className="blog_text">
								<h5><a href="#">Research of Learn training process </a></h5>
								<div className="blog_date">June 28, 2018-19</div>
							</div>
						</div>
					</div>
					<div className="sidebar_widget float_left">
						<div className="widget_heading">
							<h2>tags cloud</h2>
						</div>
						<div className="sidebar_tag_cloud">
							<ul>
								<li><a href="#">business </a>
								</li>
								<li><a href="#">html</a>
								</li>
								<li><a href="#">PSD</a>
								</li>
								<li><a href="#">corporate </a>
								</li>
								<li><a href="#">customer</a>
								</li>
								<li><a href="#">money</a>
								</li>
								<li><a href="#">webstrot</a>
								</li>
								<li><a href="#">services</a>
								</li>
								<li><a href="#">joomla</a>
								</li>
								<li><a href="#">skils</a>
								</li>
								<li><a href="#">prices</a>
								</li>
								<li><a href="#">partners</a>
								</li>
								<li><a href="#">wordpress</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="sidebar_widget float_left">
						<div className="widget_heading">
							<h2>text widget</h2>
						</div>
						<div className="text_widget float_left">
							<p>Sollicitudin, lorem quis bibe u auctor, nisi elit couat ipsu, nec sagittis sem ni id elit. Duis sed odio sit amet.
								<br/>
								<br/>Nibh vulpute cursus. Proin gravida nibh vel velit tor aliquet.</p> <a href="#">http://www.webstrot.com/</a>
						</div>
					</div>
					<div className="sidebar_widget float_left">
						<div className="widget_heading">
							<h2>instagram</h2>
						</div>
						<ul className="instagram_images">
							<li>
								<div className="instagram_wrapper">
									<div className="instagram_img_wrapper">
										<img src="images/galery1.jpg" className="img-responsive" alt="gallery_img"/>
										<div className="instagram_img_overlay">
											<div className="instagram_img_overlay_icon"> <i className="fa fa-search" aria-hidden="true"></i>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div className="instagram_wrapper">
									<div className="instagram_img_wrapper">
										<img src="images/galery2.jpg" className="img-responsive" alt="gallery_img"/>
										<div className="instagram_img_overlay">
											<div className="instagram_img_overlay_icon"> <i className="fa fa-search" aria-hidden="true"></i>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div className="instagram_wrapper">
									<div className="instagram_img_wrapper">
										<img src="images/galery3.jpg" className="img-responsive" alt="gallery_img"/>
										<div className="instagram_img_overlay">
											<div className="instagram_img_overlay_icon"> <i className="fa fa-search" aria-hidden="true"></i>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div className="instagram_wrapper">
									<div className="instagram_img_wrapper">
										<img src="images/galery4.jpg" className="img-responsive" alt="gallery_img"/>
										<div className="instagram_img_overlay">
											<div className="instagram_img_overlay_icon"> <i className="fa fa-search" aria-hidden="true"></i>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div className="instagram_wrapper">
									<div className="instagram_img_wrapper">
										<img src="images/galery5.jpg" className="img-responsive" alt="gallery_img"/>
										<div className="instagram_img_overlay">
											<div className="instagram_img_overlay_icon"> <i className="fa fa-search" aria-hidden="true"></i>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div className="instagram_wrapper">
									<div className="instagram_img_wrapper">
										<img src="images/galery6.jpg" className="img-responsive" alt="gallery_img"/>
										<div className="instagram_img_overlay">
											<div className="instagram_img_overlay_icon"> <i className="fa fa-search" aria-hidden="true"></i>
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div className="sidebar_widget float_left">
						<div className="widget_heading">
							<h2>upcoming events</h2>
						</div>
						<div className="blog_wrapper22 float_left">
							<div className="blog_image">
								<img src="images/blog1.jpg" className="img-responsive" alt="blog_img1" />
							</div>
							<div className="blog_text blog_single_text2">
								<h5><a href="#">Online MBA Course 2019 </a></h5>
								<div className="blog_date"> <i className="fa fa-map-marker-alt"></i> 950, Street Avenue,Viana</div>
							</div>
						</div>
						<div className="blog_wrapper22 float_left">
							<div className="blog_image">
								<img src="images/blog2.jpg" className="img-responsive" alt="blog_img2" />
							</div>
							<div className="blog_text blog_single_text2">
								<h5><a href="#">Reading Skill Development</a></h5>
								<div className="blog_date"> <i className="fa fa-map-marker-alt"></i> 950, Street Avenue,Viana</div>
							</div>
						</div>
						<div className="blog_wrapper22 float_left">
							<div className="blog_image">
								<img src="images/blog3.jpg" className="img-responsive" alt="blog_img3" />
							</div>
							<div className="blog_text blog_single_text2">
								<h5><a href="#">Online Education for Women</a></h5>
								<div className="blog_date"> <i className="fa fa-map-marker-alt"></i> 950, Street Avenue,Viana</div>
							</div>
						</div>
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
            <CourseSingleSection/>
        </>
    )
}