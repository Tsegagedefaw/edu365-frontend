import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import {EventComment} from "../../data/home";

const EventSingleSection = ()=>{

	const location = useLocation();
	const datas = location.state;
	const [data,setData] = useState(datas);

	const [names,setName] = useState('');
	const [emails,setEmail] = useState('');
	const [comments,setComment] = useState('');

	const comm_obj ={
				id : EventComment.length + 1,
				name: names,
				email:emails,
				image:'images/author1.jpg',
				date:'July 1, 2019',
				comment: comments
			}
	const comment_function = ()=>{
		console.log(names,emails,comments)
		EventComment.push(comm_obj);

	}


    return(
       <>
            <div className="page_title_section float_left">
		<div className="page_header">
			<div className="container">
				<div className="row">
					{/* <!-- section_heading start --> */}
					<div className="col-lg-12 col-md-12 col-12 col-sm-12">
						<h1>Event-Single </h1>
					</div>
					<div className="col-lg-12 col-md-12 col-12 col-sm-12">
						<div className="sub_title_section">
							<ul className="sub_title">
								<li> <a href="#"> Home </a> &nbsp;&nbsp;&nbsp; &gt; &nbsp;&nbsp;</li>
								<li>Event-Single</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- inner header wrapper end -->
	<!-- event single wrapper Start --> */}
	<div className="blog_wrapper float_left">
		<div className="container">
			<div className="row">
				<div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
					<div className="blog-post-wrapper iner_blog edu_event_bottom_padding float_left">
						<div className="post-thumbnail edu_ev_sin_timer_img_wrapper float_left">
							<div id="clockdiv">
								<div><span className="days"></span>
									<div className="smalltext"><b>Days</b>
									</div>
								</div>
								<div><span className="hours"></span>
									<div className="smalltext"><b>Hours</b>
									</div>
								</div>
								<div><span className="minutes"></span>
									<div className="smalltext"><b>Minutes</b>
									</div>
								</div>
								<div><span className="seconds"></span>
									<div className="smalltext"><b>Seconds</b>
									</div>
								</div>
							</div>
						</div>
						<div className="edu_evnt_single_timer_cont_wrapper float_left">
							<h3>EVENT DESCRIPTION</h3>
							<p>{data.description}</p>
						</div>
						<div className="edu_evnt_single_timer_bottom_cont_wrapper float_left">
							<h3>EVENT CONTENT</h3>
							<ul>
								<li><i className="fas fa-circle"></i>Over 37 lectures and 55.5 hours of content!</li>
								<li><i className="fas fa-circle"></i>LIVE PROJECT End to End Software Testing Training Included.</li>
								<li><i className="fas fa-circle"></i>Learn Software Testing and Automation basics from a professional trainer from your own desk.</li>
								<li><i className="fas fa-circle"></i>Information packed practical training starting from basics to advanced testing techniques.</li>
								<li><i className="fas fa-circle"></i>Best suitable for beginners to advanced level users and who learn faster when demonstrated.</li>
								<li><i className="fas fa-circle"></i>Course content designed by considering current software testing technology and the job market.</li>
								<li><i className="fas fa-circle"></i>Practical assignments at the end of every session.</li>
								<li><i className="fas fa-circle"></i>Practical learning experience with live project work and examples.</li>
							</ul>
						</div>
						<div className="blog_dark_wrapper blog_dark_wrapper_event_single float_left"> <a href="#"><i className="fas fa-link"></i></a>
							<h1>Click Latest Event on Wednesday 06 July, 2016</h1>
							<div className="port-single-entry-meta">
								<ul>
									<li>
										<a href="#"> <i className="fa fa-calendar"></i> 07 feb,2018</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="comments_wrapper comments_wrapper_edu float_left">
							<div className="widget_heading">
								<h2>comments (04)</h2>
							</div>
							<div className="row">
								{EventComment&&EventComment.map((comment)=>(<div className="col-lg-12 col-md-12 col-12 col-sm-12">
									<div className="comments_Box">
										<div className="img_wrapper">
											<img src={comment.image} className="" alt="author_img" />
										</div>
										<div className="text_wrapper">
											<div className="author_detail"> <span className="author_name"> {comment.name}<i className="fa fa-circle"></i> </span>
												<span className="publish_date"> {comment.date} - <a href="#">Reply</a> </span>
											</div>
											<div className="author_content">
												<p>{comment.description}</p>
											</div>
										</div>
									</div>
								</div>))}
							</div>
						</div>
						<div className="comments_form comments_form_edu float_left">
							<div className="widget_heading">
								<h2>leave a comment</h2>
							</div>
							<div className="row">
								<div className="col-md-6 col-sm-12">
									<div className="formsix-pos">
										<div className="form-group i-name">
											<label className="sr-only">Name</label>
											<input onChange={(e)=>setName(e.target.value)} type="text" className="form-control" required="" id="namTen-first" placeholder="Full Name *"/> <i className="fas fa-user-alt"></i>
										</div>
									</div>
								</div>
								{/* <!-- /.col-md-6 --> */}
								<div className="col-md-6 col-sm-12">
									<div className="formsix-e">
										<div className="form-group i-email">
											<label className="sr-only">Email</label>
											<input  onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" required="" id="emailTen" placeholder="Email Address *"/> <i className="fas fa-envelope"></i>
										</div>
									</div>
								</div>
								{/* <!-- /.col-md-6 --> */}
								<div className="col-md-12 col-sm-12">
									<div className="formsix-m">
										<div className="form-group i-message">
											<label className="sr-only">Message</label>
											<textarea onChange={(e)=>setComment(e.target.value)}  className="form-control" required="" rows="4" id="messageTen" placeholder="Message"></textarea> <i className="fas fa-comment"></i>
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
            <EventSingleSection/>
        </>
    )
}