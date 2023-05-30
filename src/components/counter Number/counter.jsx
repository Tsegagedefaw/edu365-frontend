import React from "react";
import { Count } from "../../data/home";
const Counter = ()=>{
    return(
        <div class="edu_counter_main_section_wrapper float_left">
        <div class="edu_counter_img_overlay"></div>
        <section class="counter-section section-padding">
            <div class="container">
                <div class="row">
                    {Count && Count.map((counts)=>(
                    <div key={counts.id} class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 icon3">
                        <div class="icon">
                            <img src={counts.icon} alt="img"/>
                        </div>
                        <div class="count-description"> <span class="timer">{counts.number}</span>
                            <h5 class="con1">{counts.title}</h5>
                        </div>
                    </div>))}
                </div>
            </div>
        </section>
    </div>
    )
}
export default function App(){
    return(
        <>
            <Counter/>
        </>
    )
}