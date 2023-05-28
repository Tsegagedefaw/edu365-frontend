import React from "react";
import HeaderNav from "./headerNav";
const MainHeader = () => {
  return (
    <div class="edu_logo_header_wrapper float_left">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="edu_border_line">
              <div class="row">
                
                {/* <div class="col-md-3"> */}
                  {/* <div class="edu_logo_main_wrapper"> */}
                    {/* <a href="index.html"> */}
                      {/* <img src='../' />/home/tsega/edu365_code/src/asset/images/logo.png  */}
                      {/* <img */}
                        {/* src="/home/tsega/edu365_code/src/asset/images/logo.png" */}
                        {/* alt="logo" */}
                      {/* /> */}
                    {/* </a> */}
                  {/* </div> */}
                {/* </div>  */}
                <div class="col-md-9 d-none d-sm-none d-md-block">
                  <div class="lv_share_info_wrapper">
                    <ul>
                      <li>
                        <div class="lv_header_icon">
                          <img
                            src="images/pin.png"
                            alt="Map Icon"
                            title="Map Icon"
                          />
                        </div>
                        <p>
                          PO Box 16122 Jhon Street
                          <br />
                          Victoria 8007 India.
                        </p>
                      </li>
                      <li>
                        <div class="lv_header_icon">
                          <img
                            src="images/phone.png"
                            alt="Call Icon"
                            title="Call Icon"
                          />
                        </div>
                        <p>
                          +1 123 456 7890
                          <br />
                          +1 0987 654 3210
                        </p>
                      </li>
                      <li>
                        <div class="lv_header_icon">
                          <img
                            src="images/env.png"
                            alt="Mail Icon"
                            title="Mail Icon"
                          />
                        </div>
                        <p>
                          {" "}
                          <a href="#">liveevent@example.com</a>
                          <br /> <a href="#">support@example.com</a>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <>
      <MainHeader />
    </>
  );
}
