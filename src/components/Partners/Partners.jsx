import React from "react";

const Partners=()=>{
    return(
        <div className="edu_partner_main_wrapper float_left">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="edu_heading_wrapper float_left">
                        <h3>OUR partners</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor, libero non
                            <br/>interdum maximus, ligula nulla pretium ligula, a egestas ex nibh.</p>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="partners_slider_wrapper">
                        <div className="owl-carousel owl-theme">
                            <div className="item">
                                <div className="lr_prt_img_wrapper">
                                    <img src="images/partner_1.png" alt="partner_img"/>
                                </div>
                            </div>
                            <div className="item">
                                <div className="lr_prt_img_wrapper">
                                    <img src="images/partner_2.png" alt="partner_img"/>
                                </div>
                            </div>
                            <div className="item">
                                <div className="lr_prt_img_wrapper">
                                    <img src="images/partner_3.png" alt="partner_img"/>
                                </div>
                            </div>
                            <div className="item">
                                <div className="lr_prt_img_wrapper">
                                    <img src="images/partner_4.png" alt="partner_img"/>
                                </div>
                            </div>
                            <div className="item">
                                <div className="lr_prt_img_wrapper">
                                    <img src="images/partner_5.png" alt="partner_img"/>
                                </div>
                            </div>
                            <div className="item">
                                <div className="lr_prt_img_wrapper">
                                    <img src="images/partner_2.png" alt="partner_img"/>
                                </div>
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
            <Partners/>
        </>
    )
}