import React from "react";


const Register = () => {
  return (
    <>
      <div class="login_section">
		{/* <!-- login_form_wrapper --> */}
		<div class="login_form_wrapper">
			<div class="container">
				<div class="row">
					<div class="col-md-8 offset-md-2">
						{/* <!-- login_wrapper --> */}
						<h1>Register TO YOUR ACCOUNT</h1>
						<div class="login_wrapper">
							<div class="row">
								<div class="col-lg-6 col-md-6 col-xs-12 col-sm-6">
									<a href="#" class="btn btn-primary"> <span>Login with Facebook</span>  <i class="fab fa-facebook-f"></i> 
									</a>
								</div>
								<div class="col-lg-6 col-md-6 col-xs-12 col-sm-6">	<a href="#" class="btn btn-primary google-plus"> Login  with Google <i class="fab fa-google-plus-g"></i></a>
								</div>
							</div>
							<h2>or</h2>
							<div class="formsix-pos">
								<div class="form-group">
									<input type="email" class="form-control" required="" id="email2" placeholder="Username*"/>
								</div>
							</div>
							<div class="formsix-e">
								<div class="form-group">
									<input type="email" class="form-control" required="" id="password2" placeholder="Email"/>
								</div>
							</div>
							<div class="formsix-e">
								<div class="form-group">
									<input type="password" class="form-control" required="" id="password2" placeholder="Password *"/>
								</div>
							</div>
							<div class="formsix-e">
								<div class="form-group">
									<input type="password" class="form-control" required="" id="password2" placeholder="Re-enter Password *"/>
								</div>
							</div>
							<div class="formsix-pos">
								<div class="form-group">
									<input type="text" class="form-control" required="" id="email2" placeholder="Phone*"/>
								</div>
							</div>
							<div class="login_remember_box">
								<label class="control control--checkbox">I agreed to the Terms and Conditions.
									<input type="checkbox"/>	<span class="control__indicator"></span>
								</label>
							</div>
							<div class="login_btn_wrapper">	<a href="#" class="btn btn-primary login_btn"> Register Now </a>
							</div>
							<div class="login_message">
								<p>Don’t have an account ? <a href="/login"> LogIn </a> 
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
export default Register;
