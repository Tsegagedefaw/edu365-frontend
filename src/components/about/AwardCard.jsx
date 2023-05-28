import React from "react";

const AwardAcard = ()=>{
    return(
        <div class="awards_wrapper float_left">
		<div class="award_left_Wrapper">
			<h3>premium awards</h3>
			<p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,<br/>lorem quis
				bibendum auctor, nisi elit consequat ipsum</p>
			<div class="edu_bottom_btn_wrapper award_btn float_left">	<a href="#">our badges</a>
			</div>
		</div>
		<div class="award_right_Wrapper">
			<div class="container">
				<div class="award_list float_left">
					<ul>
						<li> <i class="fas fa-award"></i>
							<br/> <a href="#">best css</a>
						</li>
						<li> <i class="fas fa-medal"></i>
							<br/> <a href="#">quality items</a>
						</li>
						<li> <i class="fas fa-trophy"></i>
							<br/> <a href="#">good author</a>
						</li>
						<li> <i class="fas fa-star"></i>
							<br/> <a href="#">reliability</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
    )
}

export default function App(){
    return(
        <AwardAcard/>
    )
}