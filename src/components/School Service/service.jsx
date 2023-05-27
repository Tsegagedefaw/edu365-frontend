import React from "react";

const Service = ()=>{
    return(
        <div class="edu_books_main_wrapper float_left">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="edu_heading_wrapper float_left">
                        <h3>OUR SCHOOL SERVICES</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor, libero non
                            <br/>interdum maximus, ligula nulla pretium ligula, a egestas ex nibh.</p>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <figure class='book'>
                        {/* <!-- Front --> */}
                        <ul class='hardcover_front'>
                            <li>
                                <img src="images/cover4.jpg" alt=""/>
                            </li>
                            <li></li>
                        </ul>
                        {/* <!-- Pages --> */}
                        <ul class='page'>
                            <li></li>
                            <li> <a class="btn" href="#">Download</a>
                            </li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        {/* <!-- Back --> */}
                        <ul class='hardcover_back'>
                            <li></li>
                            <li></li>
                        </ul>
                        <ul class='book_spine'>
                            <li></li>
                            <li></li>
                        </ul>
                        <figcaption class="edu_books_text">
                            <h3><a href="#">HTML / CSS</a></h3>
                            <p>Lorem ipsum dolor sit amet, consecteturadipiscing elit. Aenean auctor, libero noninterdum maximus, ligula nulla pretium ligula.</p>
                            <h4><a href="#">Read More</a></h4>
                        </figcaption>
                    </figure>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <figure class='book'>
                        {/* <!-- Front --> */}
                        <ul class='hardcover_front'>
                            <li>
                                <div class="coverDesign blue"> <span class="ribbon">NEW</span>
                                    <h1>Web</h1>
                                    <p>Design</p>
                                </div>
                            </li>
                            <li></li>
                        </ul>
                        {/* <!-- Pages --> */}
                        <ul class='page'>
                            <li></li>
                            <li> <a class="btn" href="#">Download</a>
                            </li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        {/* <!-- Back --> */}
                        <ul class='hardcover_back'>
                            <li></li>
                            <li></li>
                        </ul>
                        <ul class='book_spine'>
                            <li></li>
                            <li></li>
                        </ul>
                        <figcaption class="edu_books_text">
                            <h3><a href="#">Web Design</a></h3>
                            <p>Lorem ipsum dolor sit amet, consecteturadipiscing elit. Aenean auctor, libero noninterdum maximus, ligula nulla pretium ligula.</p>
                            <h4><a href="#">Read More</a></h4>
                        </figcaption>
                    </figure>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <figure class='book'>
                        {/* <!-- Front --> */}
                        <ul class='hardcover_front'>
                            <li>
                                <img src="images/cover3.jpg" alt=""/>
                            </li>
                            <li></li>
                        </ul>
                        {/* <!-- Pages --> */}
                        <ul class='page'>
                            <li></li>
                            <li> <a class="btn" href="#">Download</a>
                            </li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        {/* <!-- Back --> */}
                        <ul class='hardcover_back'>
                            <li></li>
                            <li></li>
                        </ul>
                        <ul class='book_spine'>
                            <li></li>
                            <li></li>
                        </ul>
                        <figcaption class="edu_books_text">
                            <h3><a href="#">Certified Courses</a></h3>
                            <p>Lorem ipsum dolor sit amet, consecteturadipiscing elit. Aenean auctor, libero noninterdum maximus, ligula nulla pretium ligula.</p>
                            <h4><a href="#">Read More</a></h4>
                        </figcaption>
                    </figure>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <figure class='book'>
                        {/* <!-- Front --> */}
                        <ul class='hardcover_front'>
                            <li>
                                <img src="images/cover.jpg" alt=""/>
                            </li>
                            <li></li>
                        </ul>
                        {/* <!-- Pages --> */}
                        <ul class='page'>
                            <li></li>
                            <li> <a class="btn" href="#">Download</a>
                            </li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        {/* <!-- Back --> */}
                        <ul class='hardcover_back'>
                            <li></li>
                            <li></li>
                        </ul>
                        <ul class='book_spine'>
                            <li></li>
                            <li></li>
                        </ul>
                        <figcaption class="edu_books_text">
                            <h3><a href="#">Creative Arts & Media
</a></h3>
                            <p>Lorem ipsum dolor sit amet, consecteturadipiscing elit. Aenean auctor, libero noninterdum maximus, ligula nulla pretium ligula.</p>
                            <h4><a href="#">Read More</a></h4>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </div>
    )
}
export default function App(){
    return (
        <>
            <Service/>
        </>
    )
}