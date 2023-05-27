import React from "react";

const Blog = ()=>{
    return(
        <div className="edu_blog_main_wrapper float_left">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="edu_heading_wrapper edu_heading_second_wrapper float_left">
                        <h3>OUR Blog</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor, libero non
                            <br/>interdum maximus, ligula nulla pretium ligula, a egestas ex nibh.</p>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="edu_blog_main_box float_left">
                        <div className="edu_blog_label">
                            <p>Latest</p>
                        </div>
                        <div className="edu_blog_date float_left">
                            <p>Febuary 14, 2019</p>
                        </div>
                        <div className="edu_blog_img_wrapper float_left">
                            <img src="images/blog_01.jpg" alt="img"/>
                        </div>
                        <div className="edu_blog_img_content_wrapper float_left">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula velit lectus, non ornare nibh consectetur accumsan.</p>
                            <ul>
                                <li><a href="#"><i className="far fa-eye"></i> &nbsp;78 View</a>
                                </li>
                                <li><a href="#"><i className="fas fa-heart"></i> &nbsp;05 Like</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="edu_blog_main_box float_left">
                        <div className="edu_blog_label">
                            <p>Latest</p>
                        </div>
                        <div className="edu_blog_date float_left">
                            <p>Febuary 14, 2019</p>
                        </div>
                        <div className="edu_blog_img_wrapper float_left">
                            <img src="images/blog_02.jpg" alt="img"/>
                        </div>
                        <div className="edu_blog_img_content_wrapper float_left">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula velit lectus, non ornare nibh consectetur accumsan.</p>
                            <ul>
                                <li><a href="#"><i className="far fa-eye"></i> &nbsp;78 View</a>
                                </li>
                                <li><a href="#"><i className="fas fa-heart"></i> &nbsp;05 Like</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="edu_blog_main_box float_left">
                        <div className="edu_blog_label">
                            <p>Latest</p>
                        </div>
                        <div className="edu_blog_date float_left">
                            <p>Febuary 14, 2019</p>
                        </div>
                        <div className="edu_blog_img_wrapper float_left">
                            <img src="images/blog_03.jpg" alt="img"/>
                        </div>
                        <div className="edu_blog_img_content_wrapper float_left">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula velit lectus, non ornare nibh consectetur accumsan.</p>
                            <ul>
                                <li><a href="#"><i className="far fa-eye"></i> &nbsp;78 View</a>
                                </li>
                                <li><a href="#"><i className="fas fa-heart"></i> &nbsp;05 Like</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="edu_bottom_btn_wrapper float_left"> <a href="#">View All</a>
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
            <Blog/>
        </>
    )
}