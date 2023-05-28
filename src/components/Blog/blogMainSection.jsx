import React from "react";

const BlogMainSection = ()=>{
    return(
        <div className="blog_wrapper float_left">
		<div className="container">
			<div className="row">
				<div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
					<div className="blog-post-wrapper iner_blog">
						<div className="post-thumbnail">
							<img src="images/blog_s1.jpg" className="img-responsive " alt="Image"/>
						</div>
						{/* <!-- /.post-thumbnail --> */}
						<div className="blog-content">
							<header className="entry-header">
								<div className="entry-meta">
									<ul>
										<li><i className="fa fa-user" aria-hidden="true"></i>  <a href="#">author</a>
										</li>
										<li><i className="fa fa-calendar" aria-hidden="true"></i>  <a href="#">sept 19, 2019</a>
										</li>
										<li><i className="fa fa-heart"></i><a href="#">39</a>
										</li>
										<li><a href="#"><i className="far fa-eye"></i>25</a>
										</li>
									</ul>
								</div>
								<h4 className="entry-title"><a href="#">How to Become Master In CSS Week.</a></h4>
							</header>
							{/* <!-- /.entry-header --> */}
							<div className="entry-content">
								<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>
							</div> <a href="#" className="blog_read">read more <i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
							{/* <!-- /.entry-content --> */}
						</div>
						{/* <!-- /.blog-content --> */}
					</div>
					<div className="blog-post-wrapper iner_blog">
						<div className="post-thumbnail">
							<div id="blogoneSlider" className="carousel slide" data-ride="carousel">
								{/* <!-- Wrapper for slides --> */}
								<div className="carousel-inner" role="listbox">
									<div className="carousel-item active">
										<img src="images/blog_s2.jpg" className="img-responsive " alt="Image"/>
									</div>
									<div className="carousel-item">
										<img src="images/blog_s3.jpg" className="img-responsive " alt="Image"/>
									</div>
								</div>
								{/* <!-- Controls --> */}
								<a className="left carousel-control" href="#blogoneSlider" role="button" data-slide="prev"> <i className="flaticon-left-arrow" aria-hidden="true"></i>
									<span className="sr-only">Previous</span>
								</a>
								<a className="right carousel-control" href="#blogoneSlider" role="button" data-slide="next"> <i className="flaticon-right-arrow" aria-hidden="true"></i>
									<span className="sr-only">Next</span>
								</a>
							</div>
						</div>
						{/* <!-- /.post-thumbnail --> */}
						<div className="blog-content">
							<header className="entry-header">
								<div className="entry-meta">
									<ul>
										<li><i className="fa fa-user" aria-hidden="true"></i>  <a href="#">author</a>
										</li>
										<li><i className="fa fa-calendar" aria-hidden="true"></i>  <a href="#">sept 19, 2019</a>
										</li>
										<li><i className="fa fa-heart"></i><a href="#">39</a>
										</li>
										<li><a href="#"><i className="far fa-eye"></i>25</a>
										</li>
									</ul>
								</div>
								<h4 className="entry-title"><a href="#">Students work together to solve a problem</a></h4>
							</header>
							{/* <!-- /.entry-header --> */}
							<div className="entry-content">
								<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p> <a href="#" className="blog_read">read more <i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
							</div>
							{/* <!-- /.entry-content --> */}
						</div>
						{/* <!-- /.blog-content --> */}
					</div>
					<div className="blog_dark_wrapper float_left"> <a href="#"><i className="fas fa-link"></i></a>
						<h1>Click Latest Event on Wednesday 06 July, 2016</h1>
						<div className="port-single-entry-meta">
							<ul>
								<li>
									<a href="#"> <i className="fa fa-calendar"></i> 07 feb,2018</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="blog-post-wrapper iner_blog">
						<div className="post-thumbnail">
							<img src="images/blog_s4.jpg" className="img-responsive " alt="Image"/>
						</div>
						{/* <!-- /.post-thumbnail --> */}
						<div className="blog-content">
							<header className="entry-header">
								<div className="entry-meta">
									<ul>
										<li><i className="fa fa-user" aria-hidden="true"></i>  <a href="#">author</a>
										</li>
										<li><i className="fa fa-calendar" aria-hidden="true"></i>  <a href="#">sept 19, 2019</a>
										</li>
										<li><i className="fa fa-heart"></i><a href="#">39</a>
										</li>
										<li><a href="#"><i className="far fa-eye"></i>25</a>
										</li>
									</ul>
								</div>
								{/* <!-- /.entry-meta --> */}
								<h4 className="entry-title"><a href="#">Research of Learn training process</a></h4>
							</header>
							{/* <!-- /.entry-header --> */}
							<div className="entry-content">
								<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>
							</div> <a href="#" className="blog_read">read more <i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
							{/* <!-- /.entry-content --> */}
						</div>
						{/* <!-- /.blog-content --> */}
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
				<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
					<div className="blog_pagination_section pd22 jb_cover">
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
    )
}
export default function App(){
    return(
        <>
            <BlogMainSection/>
        </>
    )
}