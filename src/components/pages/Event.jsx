	import React from "react";
import { useState } from "react";

import {Events} from "../../data/home";

const EventSection = ()=>{
	
	const [allevent, setAllEvent] = useState(Events);
	const [events,setEvents] = useState (['All','Happening','Upcoming','Expired']);
	
	console.log(allevent)
	const funcEvent = (event)=>{
		console.log(event)
		if(event === 'All'){
            setAllEvent(Events);
        }else{
			setAllEvent(Events.filter(events => events.type === event));
        }
	}

    return(
       <>
       <div className="page_title_section float_left">
		<div className="page_header">
			<div className="container">
				<div className="row">
					{/* <!-- section_heading start --> */}
					<div className="col-lg-12 col-md-12 col-12 col-sm-12">
						<h1>Event </h1>
					</div>
					<div className="col-lg-12 col-md-12 col-12 col-sm-12">
						<div className="sub_title_section">
							<ul className="sub_title">
								<li> <a href="/"> Home </a> &nbsp;&nbsp;&nbsp; &gt; &nbsp;&nbsp;</li>
								<li>Event</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- inner header wrapper end -->
	<!--edu course wrapper Start--> */}
	<div className="edu_course_main_wrapper float_left">
		<div className="container">
			<div className="row">
				<div className="col-lg-12 col-md-12 col-sm-12">
					<div className="edu_heading_wrapper float_left">
						<h3>Events</h3>
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
							{events&&events.map((event)=>(
							<li key={event.id} role="presentation" className="active"><a onClick={()=>funcEvent(event)} href="#" role="tab" data-toggle="tab">{event}</a>
							</li>
							))}
							
						</ul>
					</div>
				</div>
				<div className="col-md-12">
					<div className="tab-content">
						
							<div className="tab-pane active" role="tabpanel">
							<div className="row">
								{allevent&&allevent.map((event)=>(
								<div className="col-xl-12 col-lg-12 col-md-6 col-sm-6 col-12">
									<div className="edu_slide_tab_box float_left">
										<div className="edu_slide_tabs_img_box edu_slide_tabs_img_box_event float_left">
											<img src={event.image} alt="img"/>
											<div className="edu_tabs_label edu_tabs_label_event_wrapper">
												<p className="edu_tabs_label_event">OCT</p>
												<div className="edu_tabs_label_inner">
													<p>31</p>
												</div>
											</div>
										</div>
										<div className="edu_slide_tabs_img_cont_box edu_slide_tabs_img_cont_box_event float_left">
											<h4>Start Date : <span>{event.startDate}</span></h4>
											<h3><a href="#">{event.title}</a></h3>
											<p>{event.description}</p>
											<h5><a href="#">Join Now</a></h5>
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
       </>
    )
}

export default function App(){
    return(
        <>
            <EventSection/>
        </>
    )
}