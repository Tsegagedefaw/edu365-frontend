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
				<div class="col-md-12">
					<div class="tab-content">
						<div class="tab-pane active" role="tabpanel">
							<div class="row">
                                {gallery && gallery.map((photo)=>(
								<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                
                                    <div class="edu_gallery_img_wrapper d-flex flex-wrap">
										<img src={photo.image} alt="screenshot"/>
										<div class="edu_gallery_slider_overlay">	<a href={photo.image} class="venobox info" data-title="PORTFOLIO TITTLE" data-gall="gall12"><i class="flaticon-plus-symbol"></i></a>
										</div>
                                        
									</div>
								</div>
                                ))}
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
            <GallerySection2/>
        </>
    )
}