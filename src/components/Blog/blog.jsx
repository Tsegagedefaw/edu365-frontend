import React from "react";
import {useState} from "react";

import {Blogs} from "../../data/home";
const Blog = ()=>{
    const [blog,setBlog] = useState(Blogs);

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
                {
                    blog && blog.map((blogs)=>(
                        <div key={blogs.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="edu_blog_main_box float_left">
                        <div className="edu_blog_label">
                            <p>Latest</p>
                        </div>
                        <div className="edu_blog_date float_left">
                            <p>{blogs.date}</p>
                        </div>
                        <div className="edu_blog_img_wrapper float_left">
                            <img src={blogs.image} alt="img"/>
                        </div>
                        <div className="edu_blog_img_content_wrapper float_left">
                            <p>{blogs.text}</p>
                            <ul>
                                <li><a href="#"><i className="far fa-eye"></i> &nbsp;{blogs.view} View</a>
                                </li>
                                <li><a href="#"><i className="fas fa-heart"></i> &nbsp;{blogs.love} Like</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                    ))
                }
                
                <div className="col-md-12">
                    <div className="edu_bottom_btn_wrapper float_left"> <a href="/blog_category">View All</a>
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