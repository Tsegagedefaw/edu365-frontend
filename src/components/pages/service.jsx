import React from "react";
import { useState } from "react";

import Service from "../../data/home";
import {TagsCloud} from "../../data/home";
import {Blogs} from "../../data/home";

	
const ServiceSection = ()=>{

    const [service, setService] = useState(Service);
    // const [tags, setTags] = 
    return(
        <>
    <div class="page_title_section float_left">
            <div class="page_header">
                <div class="container">
                    <div class="row">
                        {/* <!-- section_heading start --> */}
                        <div class="col-lg-12 col-md-12 col-12 col-sm-12">
                            <h1>Services</h1>
                        </div>
                        <div class="col-lg-12 col-md-12 col-12 col-sm-12">
                            <div class="sub_title_section">
                                <ul class="sub_title">
                                    <li> <a href="/"> Home </a> &nbsp;&nbsp;&nbsp; &gt; &nbsp;&nbsp;</li>
                                    <li>Services</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* // <!-- inner header wrapper end -->
        // <!--blog wrapper start--> */}
        <div class="blog_wrapper float_left">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
                        <div class="row">
                            { service.map((services)=>(
                               <div key={services.id} class="col-md-6">
                                <div class="blog-post-wrapper iner_blog">
                                    <div class="post-thumbnail">
                                        <img src={services.image} class="img-responsive " alt="Image"/>
                                    </div>
                                    {/* <!-- /.post-thumbnail --> */}
                                    <div class="blog-content edu_service_header">
                                        <header class="entry-header">
                                            <h4 class="entry-title edu_service_heading"><a href="#">{services.title}</a></h4>
                                        </header>
                                        {/* <!-- /.entry-header --> */}
                                        <div class="entry-content">
                                            <p>{services.description}</p>
                                        </div> <a href="#" class="blog_read">read more <i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
                                        {/* <!-- /.entry-content --> */}
                                    </div>
                                    {/* <!-- /.blog-content --> */}
                                </div>
                            </div> 
                            ))}
                            
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
                        <div className="sidebar_widget float_left">
						<div className="widget_heading">
							<h2>latest post</h2>
						</div>
						{ Blogs && Blogs.map((blogs)=>(<div className="blog_wrapper22 float_left">
							<div className="blog_image">
								<img src={blogs.image} className="img-responsive" width={'80px'} height={'70px'} alt="blog_img1" />
							</div>
							<div className="blog_text">
								<h5><a href="#">{blogs.title}</a></h5>
								<div className="blog_date">{blogs.date}</div>
							</div>
						</div>))}
						
					</div>
                        <div class="sidebar_widget float_left">
                            <div class="widget_heading">
                                <h2>tags cloud</h2>
                            </div>
                            <div class="sidebar_tag_cloud">
                                <ul>
                                    {TagsCloud.map((tag)=>(<li><a href="#">{tag} </a>
                                    </li>))}
                                </ul>
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
            <ServiceSection/>
        </>
    )
}