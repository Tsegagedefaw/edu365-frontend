import React from "react";
import { useLocation } from "react-router-dom";

const BlogSingleSection = ()=>{
	const location = useLocation();
	const data = location.state;
    return(
<div class="blog_wrapper float_left">
		<div class="container">
			<div class="row">
				<div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
					<div class="blog-post-wrapper iner_blog">
						<div class="post-thumbnail">
							<img src={data.image} class="img-responsive " alt="Image"/>
						</div>
						{/* <!-- /.post-thumbnail --> */}
						<div class="blog-content">
							<header class="entry-header">
								<div class="entry-meta">
									<ul>
										<li><i class="fa fa-user" aria-hidden="true"></i>  <a href="#">{data.author}</a>
										</li>
										<li><i class="fa fa-calendar" aria-hidden="true"></i>  <a href="#">{data.date}</a>
										</li>
										<li><i class="fa fa-heart"></i><a href="#">{data.love}</a>
										</li>
										<li><a href="#"><i class="far fa-eye"></i>{data.view}</a>
										</li>
									</ul>
								</div>
								{/* <!-- /.entry-meta --> */}
								<h4 class="entry-title"><a href="#">{data.title}</a></h4>
							</header>
							{/* <!-- /.entry-header --> */}
							<div class="entry-content">
								<p>{data.discription}
									<br/>
									<br/>Education is the process of facilitating learning. Knowledge kills, values, beliefs, and habits of a group of people are transferred Friendly Schools is a multi-component, evidence-based, whole-school initiative involving the whole-school community</p>
							</div> <a href="#" class="blog_read">read more <i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
							{/* <!-- /.entry-content --> */}
						</div>
						{/* <!-- /.blog-content --> */}
					</div>
					<div class="blog_dark_wrapper  blog_single_box float_left">
						<img src="images/quote.png" alt="img"/>
						<h1>" The Education of Tomorrow, Rooted in Tradition Invite You
Learning Management System"</h1>
						<div class="port-single-entry-meta">
							<ul>
								<li> <a href="#">
                                      by- joahn doe</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="float_left">
						<p>Sollicitudin, lorem quis bibe u auctor, nisi elit conat ipsu, nec sagittis sem ni id elit. Duis sed odio sit amet nibh vulpute rsus. Proin gravida nibh vel velit auctor aliquet. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							<br/>
							<br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</div>
					<div class="blog_single_img float_left">
						<div class="blog_image_single">
							<img src="images/bs1.png" class="img-responsive" alt="blog_img1"/>
						</div>
						<div class="blog_text_single">
							<p>Duis et nibh blat, eifend liberost amet, suscipit enim. Sed rutrum suere orci. Lorem ipsum dolor sitt amet. This is Photoshoctor aliqet. Aenean sollicitudin, lorem quis bibendum.</p>
							<ul>
								<li>
									<a href="#"> <i class="far fa-thumbs-up"></i> lorem quis bibendum auctor, nisi elit.</a>
								</li>
								<li>
									<a href="#"> <i class="far fa-thumbs-up"></i> bibendum Sollib bibendum auctor, nisi elit.</a>
								</li>
								<li>
									<a href="#"> <i class="far fa-thumbs-up"></i> citudin, lorem quis bibendum consequat bibendum</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="blog_single_img float_left">
						<div class="blog_image_single">
							<img src="images/bs2.png" class="img-responsive" alt="blog_img1"/>
						</div>
						<div class="blog_text_single">
							<p>Duis et nibh blat, eifend liberost amet, suscipit enim. Sed rutrum suere orci. Lorem ipsum dolor sitt amet. This is Photoshoctor aliqet. Aenean sollicitudin, lorem quis bibendum.</p>
							<ul>
								<li>
									<a href="#"> <i class="far fa-thumbs-up"></i> lorem quis bibendum auctor, nisi elit.</a>
								</li>
								<li>
									<a href="#"> <i class="far fa-thumbs-up"></i> bibendum Sollib bibendum auctor, nisi elit.</a>
								</li>
								<li>
									<a href="#"> <i class="far fa-thumbs-up"></i> citudin, lorem quis bibendum consequat bibendum</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="blog_single_text float_left">
						<p>Sollicitudin, lorem quis bibe u auctor, nisi elit conat ipsu, nec sagittis sem ni id elit. Duis sed odio sit amet nibh vulpute rsus. Proin gravida nibh vel velit auctor aliquet. Lorem ipsum dolor sit amet, consecteolore magna aliqua.
							<br/>
							<br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis auttur adipisicing elit, sed do eiod tempor incididunt ut labore et dolore magna aliqua. Ut en esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</div>
					<div class="tb_btm_link_left">
						<ul>
							<li><span><i class="fa fa-tag"></i> Tags :</span>
							</li>
							<li><a href="#">business </a>
							</li>
							<li><a href="#">corporate </a>
							</li>
							<li><a href="#">services</a>
							</li>
						</ul>
					</div>
					<div class="tb_btm_link_right">
						<ul>
							<li>share :</li>
							<li><a href="#"><i class="fab fa-facebook-f"></i></a>
							</li>
							<li><a href="#"><i class="fab fa-twitter"></i></a>
							</li>
							<li><a href="#"><i class="fab fa-google-plus-g"></i></a>
							</li>
							<li><a href="#"><i class="fab fa-linkedin-in"></i></a>
							</li>
						</ul>
					</div>
					<div class="btc_blog_post_admin_main_wrapper float_left">
						<div class="btc_blog_single_post_admin_img">
							<img src="images/author.png" alt="admin_img"/>
						</div>
						<div class="btc_blog_single_post_admin_img_cont">
							<h2>about admin</h2>
							<h1><a href="#">joahn doe</a></h1>
							<p class="ggg">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctorm, nec sagittis sem nibh id elit.</p>
						</div>
					</div>
					<div class="comments_wrapper float_left">
						<div class="widget_heading">
							<h2>comments (04)</h2>
						</div>
						<div class="row">
							<div class="col-lg-12 col-md-12 col-12 col-sm-12">
								<div class="comments_Box">
									<div class="img_wrapper">
										<img src="images/author1.jpg" class="" alt="author_img" />
									</div>
									<div class="text_wrapper">
										<div class="author_detail"> <span class="author_name"> Jhon Doe <i class="fa fa-circle"></i> </span>
											<span class="publish_date"> July 1, 2019 - <a href="#">Reply</a> </span>
										</div>
										<div class="author_content">
											<p>Integer porttitor fringilla vestibulum. Phasellus curs our tinnt nulla, ut mattis augue finibus ac. Vivamus elementum enim ac enim ultrices rhoncus.</p>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-12 col-md-12 col-12 col-sm-12">
								<div class="comments_Box">
									<div class="row">
										<div class="col-lg-11 col-md-12 col-12 col-sm-12">
											<div class="img_wrapper">
												<img src="images/author2.jpg" class="" alt="author_img" />
											</div>
											<div class="text_wrapper">
												<div class="author_detail"> <span class="author_name"> Steffa Ferello  <i class="fa fa-circle"></i> </span>
													<span class="publish_date"> July 4, 2019 - <a href="#">Reply</a> </span>
												</div>
												<div class="author_content">
													<p>Integer porttitor fringilla vestibulum. Phasellus curs our tinnt nulla, ut mattis augue finibus ac. Vivamus elementum enim ac enim ultrices rhoncus.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-12 col-md-12 col-12 col-sm-12">
								<div class="comments_Box">
									<div class="img_wrapper">
										<img src="images/author3.jpg" class="" alt="author_img" />
									</div>
									<div class="text_wrapper">
										<div class="author_detail"> <span class="author_name"> Matin Lauran <i class="fa fa-circle"></i> </span>
											<span class="publish_date"> March 1, 2019 - <a href="#">Reply</a> </span>
										</div>
										<div class="author_content">
											<p>Integer porttitor fringilla vestibulum. Phasellus curs our tinnt nulla, ut mattis augue finibus ac. Vivamus elementum enim ac enim ultrices rhoncus.</p>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-12 col-md-12 col-12 col-sm-12">
								<div class="comments_Box last_comment_box">
									<div class="img_wrapper">
										<img src="images/author4.jpg" class="" alt="author_img" />
									</div>
									<div class="text_wrapper">
										<div class="author_detail"> <span class="author_name"> Eva Marilla <i class="fa fa-circle"></i></span>
											<span class="publish_date"> July 10, 2019 - <a href="#">Reply</a> </span>
										</div>
										<div class="author_content">
											<p>Integer porttitor fringilla vestibulum. Phasellus curs our tinnt nulla, ut mattis augue finibus ac. Vivamus elementum enim ac enim ultrices rhoncus.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="comments_form float_left">
						<div class="widget_heading">
							<h2>leave a comment</h2>
						</div>
						<div class="row">
							<div class="col-md-6 col-sm-12">
								<div class="formsix-pos">
									<div class="form-group i-name">
										<label class="sr-only">Name</label>
										<input type="text" class="form-control" required="" id="namTen-first" placeholder="Full Name *"/> <i class="fas fa-user-alt"></i>
									</div>
								</div>
							</div>
							{/* <!-- /.col-md-6 --> */}
							<div class="col-md-6 col-sm-12">
								<div class="formsix-e">
									<div class="form-group i-email">
										<label class="sr-only">Email</label>
										<input type="email" class="form-control" required="" id="emailTen" placeholder="Email Address *"/> <i class="fas fa-envelope"></i>
									</div>
								</div>
							</div>
							{/* <!-- /.col-md-6 --> */}
							<div class="col-md-12 col-sm-12">
								<div class="formsix-m">
									<div class="form-group i-message">
										<label class="sr-only">Message</label>
										<textarea class="form-control" required="" rows="4" id="messageTen" placeholder="Message"></textarea> <i class="fas fa-comment"></i>
									</div>
								</div>
							</div>
							{/* <!-- /.col-md-12 --> */}
						</div>
						{/* <!-- /.row--> */}
						<div class="edu_bottom_btn_wrapper edu_btn float_left">	<a href="#">Send Now</a>
						</div>
					</div>
				</div>
				<div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 right_sidebar blog_single_sidebar">
					<div class="sidebar_widget float_left">
						<div class="widget_heading">
							<h2>Search feed</h2>
						</div>
						<form class="search_form" role="search">
							<div class="form-group">
								<input type="text" class="form-control" placeholder="Search..."/>
							</div>
							<button type="submit"><i class="fa fa-search"></i>
							</button>
						</form>
					</div>
					<div class="sidebar_widget float_left">
						<div class="widget_heading">
							<h2>latest post</h2>
						</div>
						<div class="blog_wrapper22 float_left">
							<div class="blog_image">
								<img src="images/blog1.jpg" class="img-responsive" alt="blog_img1" />
							</div>
							<div class="blog_text">
								<h5><a href="#">How to Become Master In CSS within qa Week.</a></h5>
								<div class="blog_date">June 28, 2018-19</div>
							</div>
						</div>
						<div class="blog_wrapper22 float_left">
							<div class="blog_image">
								<img src="images/blog2.jpg" class="img-responsive" alt="blog_img2" />
							</div>
							<div class="blog_text">
								<h5><a href="#">Connecting volunteers & nonprofitsz worldwide.</a></h5>
								<div class="blog_date">June 28, 2018-19</div>
							</div>
						</div>
						<div class="blog_wrapper22 float_left">
							<div class="blog_image">
								<img src="images/blog3.jpg" class="img-responsive" alt="blog_img3" />
							</div>
							<div class="blog_text">
								<h5><a href="#">Research of Learn training process </a></h5>
								<div class="blog_date">June 28, 2018-19</div>
							</div>
						</div>
					</div>
					<div class="sidebar_widget float_left">
						<div class="widget_heading">
							<h2>tags cloud</h2>
						</div>
						<div class="sidebar_tag_cloud">
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
					<div class="sidebar_widget float_left">
						<div class="widget_heading">
							<h2>text widget</h2>
						</div>
						<div class="text_widget float_left">
							<p>Sollicitudin, lorem quis bibe u auctor, nisi elit couat ipsu, nec sagittis sem ni id elit. Duis sed odio sit amet.
								<br/>
								<br/>Nibh vulpute cursus. Proin gravida nibh vel velit tor aliquet.</p> <a href="#">http://www.webstrot.com/</a>
						</div>
					</div>
					<div class="sidebar_widget float_left">
						<div class="widget_heading">
							<h2>instagram</h2>
						</div>
						<ul class="instagram_images">
							<li>
								<div class="instagram_wrapper">
									<div class="instagram_img_wrapper">
										<img src="images/galery1.jpg" class="img-responsive" alt="gallery_img"/>
										<div class="instagram_img_overlay">
											<div class="instagram_img_overlay_icon"> <i class="fa fa-search" aria-hidden="true"></i>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="instagram_wrapper">
									<div class="instagram_img_wrapper">
										<img src="images/galery2.jpg" class="img-responsive" alt="gallery_img"/>
										<div class="instagram_img_overlay">
											<div class="instagram_img_overlay_icon"> <i class="fa fa-search" aria-hidden="true"></i>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="instagram_wrapper">
									<div class="instagram_img_wrapper">
										<img src="images/galery3.jpg" class="img-responsive" alt="gallery_img"/>
										<div class="instagram_img_overlay">
											<div class="instagram_img_overlay_icon"> <i class="fa fa-search" aria-hidden="true"></i>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="instagram_wrapper">
									<div class="instagram_img_wrapper">
										<img src="images/galery4.jpg" class="img-responsive" alt="gallery_img"/>
										<div class="instagram_img_overlay">
											<div class="instagram_img_overlay_icon"> <i class="fa fa-search" aria-hidden="true"></i>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="instagram_wrapper">
									<div class="instagram_img_wrapper">
										<img src="images/galery5.jpg" class="img-responsive" alt="gallery_img"/>
										<div class="instagram_img_overlay">
											<div class="instagram_img_overlay_icon"> <i class="fa fa-search" aria-hidden="true"></i>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="instagram_wrapper">
									<div class="instagram_img_wrapper">
										<img src="images/galery6.jpg" class="img-responsive" alt="gallery_img"/>
										<div class="instagram_img_overlay">
											<div class="instagram_img_overlay_icon"> <i class="fa fa-search" aria-hidden="true"></i>
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div class="sidebar_widget float_left">
						<div class="widget_heading">
							<h2>upcoming events</h2>
						</div>
						<div class="blog_wrapper22 float_left">
							<div class="blog_image">
								<img src="images/blog1.jpg" class="img-responsive" alt="blog_img1" />
							</div>
							<div class="blog_text blog_single_text2">
								<h5><a href="#">Online MBA Course 2019 </a></h5>
								<div class="blog_date"> <i class="fa fa-map-marker-alt"></i> 950, Street Avenue,Viana</div>
							</div>
						</div>
						<div class="blog_wrapper22 float_left">
							<div class="blog_image">
								<img src="images/blog2.jpg" class="img-responsive" alt="blog_img2" />
							</div>
							<div class="blog_text blog_single_text2">
								<h5><a href="#">Reading Skill Development</a></h5>
								<div class="blog_date"> <i class="fa fa-map-marker-alt"></i> 950, Street Avenue,Viana</div>
							</div>
						</div>
						<div class="blog_wrapper22 float_left">
							<div class="blog_image">
								<img src="images/blog3.jpg" class="img-responsive" alt="blog_img3" />
							</div>
							<div class="blog_text blog_single_text2">
								<h5><a href="#">Online Education for Women</a></h5>
								<div class="blog_date"> <i class="fa fa-map-marker-alt"></i> 950, Street Avenue,Viana</div>
							</div>
						</div>
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
            <BlogSingleSection/>
        </>
    )
}