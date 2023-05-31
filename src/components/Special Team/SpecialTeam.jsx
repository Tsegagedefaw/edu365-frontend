import React from "react";
import { User } from "../../data/home";
import { Link } from "react-router-dom";
const SpecialTeam = ()=>{
    return(
        <div className="edu_team_main_wrapper float_left">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="edu_heading_wrapper float_left">
                        <h3>OUR SPECIAL TEAM</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor, libero non
                            <br/>interdum maximus, ligula nulla pretium ligula, a egestas ex nibh.</p>
                    </div>
                </div>
                {User&&User.slice(0,4).map((users)=>(<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 self_align_center">
                    <div key={users.id} className="edu_team_main_box">
                        <h3><Link to="/teacher_single" state={users} >{users.name}</Link></h3>
                        <p>{users.title}</p>
                        <ul>
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a>
                            </li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a>
                            </li>
                            <li><a href="#"><i className="fab fa-youtube"></i></a>
                            </li>
                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </li>
                        </ul>
                        <div className="edu_team_inner_box">
                            <img src={users.image} alt="img"/>
                        </div>
                    </div>
                </div>))}
                <div className="col-md-12">
                    <div className="edu_bottom_btn_wrapper float_left"> <a href="/teacher_single">View All</a>
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
            <SpecialTeam/>
        </>
    )
}