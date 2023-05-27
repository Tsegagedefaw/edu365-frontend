import React from 'react';


// const Preloader = () => {
//   return (
//     <div id="preloader">
//       <div id="status">
//         <img src="../../asset/images/preloader.gif" id="preloader_image" alt="loader" />
//       </div>
//     </div>
//   );
// };

const EduTopHeaderWrapper = () => {
  return (
    <div class="edu_top_header_wrapper float_left">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="edu_top_header_left_wrapper">
              <p>Hello !! Welcome to our online study</p>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="edu_top_header_right_wrapper">
              <ul>
                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default function App() {
  return (
    <div>
      {/* <Preloader /> */}
      <EduTopHeaderWrapper />
    </div>
  );
}
