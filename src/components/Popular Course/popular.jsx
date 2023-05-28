import React from "react";
import { useState } from "react";

import { CourseData } from "../../data/home";

const PopularCourse = ()=>{

    const [courseCategory, setCourseCategory] = useState(['All','html','psd','WordPress'])
    const [popularCourse, setPopularCourse] = useState (CourseData);

    const tabAction = (tab)=>{
        if(tab === 'All'){
            setPopularCourse(CourseData);
        }else{
        setPopularCourse(CourseData.filter(tabs => tabs.type === tab));
        }
 
    }

    return(
        <div className="edu_course_main_wrapper float_left">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="edu_heading_wrapper float_left">
                        <h3>Popular Courses</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor, libero non
                            <br/>interdum maximus, ligula nulla pretium ligula, a egestas ex nibh.</p>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="edu_coll_slider_tabs">
                        <ul className="nav nav-tabs" role="tablist">
                            <li>
                                <div className="slider"></div>
                            </li>
                            {
                                courseCategory && courseCategory.map((tab,index)=>(
                                    <li key={index} role="presentation" className="active"><a onClick={()=>tabAction(tab)} style={{cursor:'pointer'}}>{tab}</a>
                            </li>
                                ))
                            }
                            
                        </ul>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="tab-content">
                            <div className="row">
                                { popularCourse && popularCourse.map((course)=>(
                                <div key={course.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div className="edu_slide_tab_box float_left">
                                        <div className="edu_slide_tabs_img_box float_left">
                                            <img src="images/pc1.jpg" alt="img"/>
                                            <div className="edu_tabs_label">
                                                <p><del>${course.oldPrice}</del>
                                                </p>
                                                <div className="edu_tabs_label_inner">
                                                    <p>${course.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="edu_slide_tabs_img_cont_box float_left">
                                            <h4>Start Date : <span>{course.StartDate}</span></h4>
                                            <h3><a href="#">{course.title}</a></h3>
                                            <p>{course.description}</p>
                                            <h5><a href="#">Join Now</a></h5>
                                        </div>
                                    </div>
                                </div>))}
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
            <PopularCourse/>
        </>
    )
}