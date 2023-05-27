import React from "react";

const Signup = ()=>{
    return(
        <div className="edu_letter_main_wrapper float_left">
        <div className="container">
            <div className="edu_left_envo">
                <img src="images/innn.png" alt="img"/>
                <h3>Sign up for Newsletter</h3>
            </div>
            <div className="edu_right_form">
                <input type="text" placeholder="Enter your email"/>
                <button>Sign Up</button>
            </div>
        </div>
    </div>
    )
}

export default function App(){
    return (
        <>
            <Signup/>
        </>
    )
}