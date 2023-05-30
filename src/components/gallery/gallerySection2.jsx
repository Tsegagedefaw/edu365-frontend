import React from "react";
import {useState} from 'react'

import { Gallery } from "../../data/home";

const GallerySection2 = ()=>{

	const [courseCategory, setCourseCategory] = useState(['All','html','psd','WordPress']);
	const [gallery, setGallery] = useState(Gallery);

	const tabAction = (tab)=>{
        if(tab === 'All'){
            setGallery(Gallery);
        }else{
			setGallery(Gallery.filter(tabs => tabs.type === tab));
        }
 
    }

	return(
<div className="edu_gallery_inner_main_wrapper float_left">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="edu_coll_slider_tabs edu_coll_slider_tabs_gallery">
						<ul className="nav nav-tabs" role="tablist">
							<li>
								<div className="slider"></div>
							</li>
							{
                                courseCategory && courseCategory.map((tab)=>(
                                    <li key={tab.id} role="presentation" className="active"><a onClick={()=>tabAction(tab)} style={{cursor:'pointer'}}>{tab}</a>
                            </li>
                                ))
                            }
						</ul>
					</div>
				</div>
				<div className="col-md-12">
                    <div className="tab-content">
                            <div className="row">
                                { gallery && gallery.map((course)=>(
                                <div key={course.id} className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
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
				<div className="col-md-12">
					<div className="edu_bottom_btn_wrapper float_left">	<a href="#">Read More</a>
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
            <GallerySection2/>
        </>
    )
}