import React from "react";

const Error = ()=>{
    return(
        <>
            <div className="page_title_section float_left">
		<div className="page_header">
			<div className="container">
				<div className="row">
					{/* <!-- section_heading start --> */}
					<div className="col-lg-12 col-md-12 col-12 col-sm-12">
						<h1>404 Error </h1>
					</div>
					<div className="col-lg-12 col-md-12 col-12 col-sm-12">
						<div className="sub_title_section">
							<ul className="sub_title">
								<li> <a href="/"> Home </a> &nbsp;&nbsp;&nbsp; &gt; &nbsp;&nbsp;</li>
								<li>404 Error</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- inner header wrapper end -->
	<!-- edu 404 error wrapper start --> */}
	<div className="error_page">
		<div className="container">
			<div className="row">
				<div className="col-md-12 text-center">
					<div className="error_page_cntnt">
						<h2>
                            <span>4</span>
                            <span>0</span>
                            <span>4</span>
                        </h2>
						<h3>Sorry, This Page Isn't available :( </h3>
						<p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. A Aenean sollicitudin, lorem quis bibend Aenean sollicitudin, lorem . <a href="/">Home Page</a>
						</p>
						<div className="error_page_mail_wrapper"><i className="fa fa-envelope error_env" aria-hidden="true"></i>
							<input type="text" placeholder="Email Address *"/>
							<a href="/"><i className="fas fa-long-arrow-alt-right"></i></a>
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
            <Error/>
        </>
    )
}