import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import {BlogComment} from "../../data/home"

const BlogSingleSection = ()=>{
	const location = useLocation();
	const datas = location.state;
	const [data,setData] = useState(datas);

	const [names,setName] = useState('');
	const [emails,setEmail] = useState('');
	const [comments,setComment] = useState('');

	const comm_obj ={
				id : BlogComment.length + 1,
				name: names,
				email:emails,
				image:'images/author1.jpg',
				date:'July 1, 2019',
				comment: comments
			}
	const comment_function = ()=>{
		console.log(names,emails,comments)
		BlogComment.push(comm_obj);
	}

    return(
<div className="blog_wrapper float_left">
		<div className="container">
			<div className="row">
				<div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
					<div className="blog-post-wrapper iner_blog">
						<div className="post-thumbnail">
							<img src={data.image} className="img-responsive " alt="Image"/>
						</div>
						{/* <!-- /.post-thumbnail --> */}
						<div className="blog-content">
							<header className="entry-header">
								<div className="entry-meta">
									<ul>
										<li><i className="fa fa-user" aria-hidden="true"></i>  <a href="#">{data.author}</a>
										</li>
										<li><i className="fa fa-calendar" aria-hidden="true"></i>  <a href="#">{data.date}</a>
										</li>
										<li><i className="fa fa-heart"></i><a href="#">{data.love}</a>
										</li>
										<li><a href="#"><i className="far fa-eye"></i>{data.view}</a>
										</li>
									</ul>
								</div>
								{/* <!-- /.entry-meta --> */}
								<h4 className="entry-title"><a href="#">{data.title}</a></h4>
							</header>
							{/* <!-- /.entry-header --> */}
							<div className="entry-content">
								<p>{data.discription}
									<br/>
									<br/>Education is the process of facilitating learning. Knowledge kills, values, beliefs, and habits of a group of people are transferred Friendly Schools is a multi-component, evidence-based, whole-school initiative involving the whole-school community</p>
							</div> <a href="#" className="blog_read">read more <i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
							{/* <!-- /.entry-content --> */}
						</div>
						{/* <!-- /.blog-content --> */}
					</div>
					<div className="blog_dark_wrapper  blog_single_box float_left">
						<img src="images/quote.png" alt="img"/>
						<h1>" The Education of Tomorrow, Rooted in Tradition Invite You
Learning Management System"</h1>
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
							<h2>comments ({BlogComment&&BlogComment.length})</h2>
						</div>
						<div className="row">
							{BlogComment&&BlogComment.map((comment)=>(<div className="col-lg-12 col-md-12 col-12 col-sm-12">
								<div className="comments_Box">
									<div className="img_wrapper">
										<img src={comment.image} className="" alt="author_img" />
									</div>
									<div className="text_wrapper">
										<div className="author_detail"> <span className="author_name"> {comment.name} <i className="fa fa-circle"></i> </span>
											<span className="publish_date"> {comment.date} - <a href="#">Reply</a> </span>
										</div>
										<div className="author_content">
											<p>{comment.comment}</p>
										</div>
									</div>
								</div>
							</div>))}
							
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
										<input type="text" onChange={(e)=>setName(e.target.value)} className="form-control" required="" id="namTen-first" placeholder="Full Name *"/> <i className="fas fa-user-alt"></i>
									</div>
								</div>
							</div>
							{/* <!-- /.col-md-6 --> */}
							<div className="col-md-6 col-sm-12">
								<div className="formsix-e">
									<div className="form-group i-email">
										<label className="sr-only">Email</label>
										<input  type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" required="" id="emailTen" placeholder="Email Address *"/> <i className="fas fa-envelope"></i>
									</div>
								</div>
							</div>
							{/* <!-- /.col-md-6 --> */}
							<div className="col-md-12 col-sm-12">
								<div className="formsix-m">
									<div className="form-group i-message">
										<label className="sr-only">Message</label>
										<textarea  onChange={(e)=>setComment(e.target.value)} className="form-control" required="" rows="4" id="messageTen" placeholder="Message"></textarea> <i className="fas fa-comment"></i>
									</div>
								</div>
							</div>
							{/* <!-- /.col-md-12 --> */}
						</div>
						{/* <!-- /.row--> */}
						<div className="edu_bottom_btn_wrapper edu_btn float_left">	<a href="#" onClick={()=>comment_function()}>Send Now</a>
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
    )
}

export default function App(){
    return(
        <>
            <BlogSingleSection/>
        </>
    )
}