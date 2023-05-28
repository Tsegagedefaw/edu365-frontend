import React from "react";

const BlogHeaderCategory = ()=>{
    return(
        <div class="page_title_section float_left">
		<div class="page_header">
			<div class="container">
				<div class="row">
					{/* <!-- section_heading start --> */}
					<div class="col-lg-12 col-md-12 col-12 col-sm-12">
						<h1>blog category</h1>
					</div>
					<div class="col-lg-12 col-md-12 col-12 col-sm-12">
						<div class="sub_title_section">
							<ul class="sub_title">
								<li> <a href="/"> Home </a> &nbsp;&nbsp;&nbsp; &gt; &nbsp;&nbsp;</li>
								<li>blog category</li>
							</ul>
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
            <BlogHeaderCategory/>
        </>
    )
}