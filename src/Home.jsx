import React from "react";
import Navigation from "./Navigation";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Navigation />
      <div className="home container-fluid w-100">
        <div className="home-abs container-fluid">
          <div className="">
          <span className="text-white mb-0" style={{ fontSize: "70px" }}>
                BOOK YOUR TICKETS
            </span>
                <div className=" d-flex justify-content-center">
                    <div class="wrapper d-flex justify-content-start">
                    <div class="static-txt" style={{ fontSize: "50px" }}>TICKETS FOR</div>
                    <ul class="dynamic-txts mb-0 me-auto">
                        <li>
                        <span>FLIGHTS</span>
                        </li>
                        <li>
                        <span>HOTELS</span>
                        </li>
                        <li>
                        <span>BUSES</span>
                        </li>
                    </ul>
                   </div>
                </div> 

          </div>
        </div>
        <div className="services">

        </div>
        <div className="row">
            
        </div>
      </div>
    </>
  );
};

export default Home;
