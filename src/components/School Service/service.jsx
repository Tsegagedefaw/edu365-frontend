import React from "react";
import { useState } from "react";

import {HomeService} from "../../data/home";
const Service = ()=>{
    const [service, setService] = useState(HomeService);
    return(
        <div class="edu_books_main_wrapper float_left">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="edu_heading_wrapper float_left">
                        <h3>OUR SCHOOL SERVICES</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor, libero non
                            <br/>interdum maximus, ligula nulla pretium ligula, a egestas ex nibh.</p>
                    </div>
                </div>
                {service.slice(0,4).map((serviceData)=>(
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <figure class='book'>
                            {/* <!-- Front --> */}
                            <ul class='hardcover_front'>
                                <li>
                                    <img src={serviceData.image} alt=""/>
                                </li>
                                <li></li>
                            </ul>
                            {/* <!-- Pages --> */}
                            <ul class='page'>
                                <li></li>
                                <li> <a class="btn" href="#">Download</a>
                                </li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            {/* <!-- Back --> */}
                            <ul class='hardcover_back'>
                                <li></li>
                                <li></li>
                            </ul>
                            <ul class='book_spine'>
                                <li></li>
                                <li></li>
                            </ul>
                            <figcaption class="edu_books_text">
                                <h3><a href="#">{serviceData.title}</a></h3>
                                <p>{serviceData.description}</p>
                                <h4><a href="#">Read More</a></h4>
                            </figcaption>
                        </figure>
                    </div>
                ))}
                
            </div>
        </div>
    </div>
    )
}
export default function App(){
    return (
        <>
            <Service/>
        </>
    )
}