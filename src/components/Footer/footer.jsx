import React from "react";

const Footer = ()=>{
    return(
        <>
            <div className="footer jb_cover float_left">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="footerNav jb_cover">
                        <a href="#">
                            <img src="images/footer_logo.png" alt="img"/>
                        </a>
                        <ul className="footer_first_contact">
                            <li><i className="flaticon-map-marker"></i>
                                <p>123 City Avenue, Floor 10,
                                    <br/>malbourne, Australia.</p>
                            </li>
                            <li><i className="flaticon-telephone"></i>
                                <p>1 -234 -456 -7890
                                    <br/>1 -234 -456 -7890</p>
                            </li>
                            <li><i className="flaticon-close-envelope"></i><a href="#">info@Jbdesks.com </a>
                                <br/> <a href="#">support@Jbdesks.com</a>
                            </li>
                        </ul>
                        <ul className="icon_list_news jb_cover">
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a>
                            </li>
                            <li> <a href="#"><i className="fab fa-twitter"></i>
                                    </a>
                            </li>
                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </li>
                            <li><a href="#"><i className="fab fa-google-plus-g"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="footerNav jb_cover footer_border_displ footer_border_disp2">
                        <h5>features</h5>
                        <ul className="nav-widget">
                            <li><a href="#"><i className="fa fa-square"></i>Job Management & Billing
</a>
                            </li>
                            <li><a href="#"><i className="fa fa-square"></i>Time & Materials Tracking
</a>
                            </li>
                            <li><a href="#"><i className="fa fa-square"></i>Standards Compliance 
</a>
                            </li>
                            <li><a href="#"><i className="fa fa-square"></i>Real Time GPS Tracking
</a>
                            </li>
                            <li><a href="#"><i className="fa fa-square"></i>Client Portal
</a>
                            </li>
                            <li><a href="#"><i className="fa fa-square"></i> Powerful Workflow</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="footerNav jb_cover footer_border_displ footer_border_disp3">
                        <h5>browse</h5>
                        <ul className="nav-widget">
                            <li><a href="#"><i className="fa fa-square"></i>Freelancers by Category</a>
                            </li>
                            <li><a href="#"><i className="fa fa-square"></i> Freelancers in USA </a>
                            </li>
                            <li><a href="#"><i className="fa fa-square"></i> Freelancers in UK</a>
                            </li>
                            <li><a href="#"><i className="fa fa-square"></i> Freelancers in Canada</a>
                            </li>
                            <li><a href="#"><i className="fa fa-square"></i> Freelancers in india</a>
                            </li>
                            <li><a href="#"><i className="fa fa-square"></i> find jobs</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="footerNav jb_cover footer_border_displ footer_border_disp3">
                        <h5>app & integration</h5>
                        <ul className="nav-widget">
                            <li>
                                <a href="#">
                                    <img src="images/ft1.png" alt="img"/>Xero</a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="images/ft2.png" alt="img"/>Reckon</a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="images/ft3.png" alt="img"/>Flexidocs</a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="images/ft4.png" alt="img"/>Microsoft Exchange</a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="images/ft5.png" alt="img"/>Mailchimp</a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="images/ft6.png" alt="img"/>MYOB</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!--/.row--> */}
        </div>
    </div>
    <div className="edu_footer_bottom float_left">
        <div className="container">
            <div className="bottom_footer float_left">
                <p>&copy;2020-21 Education. All Rights Reserved.</p>
            </div>
        </div>
    </div>
        </>
    )
}

export default function App(){
    return(
        <>
            <Footer/>
        </>
    )
}