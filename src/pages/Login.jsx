import React from "react";
import { useState,useEffect } from "react";
const Login = () => {
	const [loading,setLoading] = useState(true);

	useEffect(()=>{
	  setLoading(false);
	},[])
  if(loading){
	return(
	  <div id="preloader">
	  <div id="status">
		  <img src="images/preloader.gif" id="preloader_image" alt="loader"/>
	  </div>
  </div>
	)
  }else{
  return (
    <>
  <div className="login_section">
		{/* <!-- login_form_wrapper --> */}
		<div className="login_form_wrapper">
			<div className="container">
				<div className="row">
					<div className="col-md-8 offset-md-2">
						{/* <!-- login_wrapper --> */}
						<h1>LOGIN TO YOUR ACCOUNT</h1>
						<div className="login_wrapper">
							<div className="row">
								<div className="col-lg-6 col-md-6 col-xs-12 col-sm-6">
									<a href="#" className="btn btn-primary"> <span>Login with Facebook</span>  <i className="fab fa-facebook-f"></i> 
									</a>
								</div>
								<div className="col-lg-6 col-md-6 col-xs-12 col-sm-6">	<a href="#" className="btn btn-primary google-plus"> Login  with Google <i className="fab fa-google-plus-g"></i></a>
								</div>
							</div>
							<h2>or</h2>
							<div className="formsix-pos">
								<div className="form-group i-email">
									<input type="email" className="form-control" required="" id="email2" placeholder="Username*"/>
								</div>
							</div>
							<div className="formsix-e">
								<div className="form-group i-password">
									<input type="password" className="form-control" required="" id="password2" placeholder="Password *"/>
								</div>
							</div>
							<div className="login_remember_box">
								<label className="control control--checkbox">Remember me
									<input type="checkbox"/>	<span className="control__indicator"></span>
								</label>	<a href="#" className="forget_password">
									Forgot Password
								</a>
							</div>
							<div className="login_btn_wrapper">	<a href="/" className="btn btn-primary login_btn"> Login </a>
							</div>
							<div className="login_message">
								<p>Don’t have an account ? <a href="/register"> Register Now </a> 
								</p>
							</div>
						</div>
						<p>In case you are using a public/shared computer we recommend that you logout to prevent any un-authorized access to your account</p>
						{/* <!-- /.login_wrapper--> */}
					</div>
				</div>
			</div>
		</div>
		{/* <!-- /.login_form_wrapper--> */}
	</div>
    </>
  );
};
}
export default Login;
