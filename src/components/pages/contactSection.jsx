import React from "react";
const ContactSection = ()=>{
    return(
        <>

	<div class="page_title_section float_left">
		<div class="page_header">
			<div class="container">
				<div class="row">
					{/* <!-- section_heading start --> */}
					<div class="col-lg-12 col-md-12 col-12 col-sm-12">
						<h1>contact us</h1>
					</div>
					<div class="col-lg-12 col-md-12 col-12 col-sm-12">
						<div class="sub_title_section">
							<ul class="sub_title">
								<li> <a href="/"> Home </a> &nbsp;&nbsp;&nbsp; &gt; &nbsp;&nbsp;</li>
								<li>contact us</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- inner header wrapper end -->
	<!-- contact_icon_section start--> */}
	<div class="contact_icon_section float_left">
		<div class="container">
			<div class="row">
				<div class="col-lg-4 col-md-4 col-sm-12">
					<div class="contact_main">
						<div class="contact_rotate"> <i class="fas fa-map-marker-alt"></i>
						</div>
						<h4><a href="#">Address</a></h4>
						<p>512 - omexcity, California
							<br/>California, omexcity</p>
					</div>
				</div>
				<div class="col-lg-4 col-md-4 col-sm-12">
					<div class="contact_main contact_main2">
						<div class="contact_rotate"> <i class="fas fa-envelope"></i>
						</div>
						<h4><a href="#">Email</a></h4>
						<p><a href="#">hello@example.com</a>
							<br/><a href="#">support@example.com</a>
						</p>
					</div>
				</div>
				<div class="col-lg-4 col-md-4 col-sm-12">
					<div class="contact_main contact_main2">
						<div class="contact_rotate"> <i class="fas fa-phone"></i>
						</div>
						<h4><a href="#">Phone</a></h4>
						<p>+1-804-548-5214
							<br/>+1-804-548-5215</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- contact info section end --> */}
	<div class="map_wrapper float_left">
		<div id='map'></div>
	</div>
	{/* <!-- contact_wrapper start --> */}
	<div class="contact_section float_left">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12">
					<div class="edu_heading_wrapper edu_heading_wrapper_contactus float_left">
						<h3>contact us</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor, libero non
							<br/>interdum maximus, ligula nulla pretium ligula, a egestas ex nibh.</p>
					</div>
				</div>
				<div class="col-lg-10 offset-lg-1 col-md-12 col-sm-12 col-12">
                    <form>
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="form-pos">
                                    <div class="form-group i-name">

                                        <input type="text" class="form-control require" name="first_name" required="" placeholder="First Name*"/>

                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="form-pos">
                                    <div class="form-group i-name">

                                        <input type="text" class="form-control require" name="last_name" required="" placeholder="last Name*"/>

                                    </div>
                                </div>
                            </div>
                            {/* <!-- /.col-md-12 --> */}
                            <div class="col-lg-6 col-md-6">
                                <div class="form-e">
                                    <div class="form-group i-email">
                                        <input type="email" class="form-control require" name="email" required="" placeholder=" Email *" data-valid="email" data-error="Email should be valid."/>

                                    </div>
                                </div>
                            </div>
                            {/* <!-- /.col-md-12 --> */}
                            <div class="col-lg-6 col-md-6">
                                <div class="form-s">
                                    <div class="form-group i-subject">

                                        <input type="text" class="form-control require" name="Subject" required="" placeholder="subject"/>

                                    </div>
                                </div>
                            </div>
                            {/* <!-- /.col-md-12 --> */}
                            <div class="col-md-12">
                                <div class="form-m">
                                    <div class="form-group i-message">

                                        <textarea class="form-control require" name="message" required="" rows="5" id="messageTen" placeholder=" Message"></textarea>

                                    </div>
                                </div>
                            </div>
                            {/* <!-- /.col-md-12 --> */}
                            <div class="col-md-12">
                                <div class="tb_es_btn_div">
                                    <div class="response"></div>
                                    <div class="tb_es_btn_wrapper conatct_btn2 cont_bnt">
                                        <button type="button" class="submitForm">send message !</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
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
            <ContactSection/>
        </>
    )
}