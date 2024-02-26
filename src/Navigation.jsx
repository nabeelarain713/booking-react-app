import * as React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import PersonPinIcon from "@mui/icons-material/PersonPin";
export default function Navigation() {
  return (
    
    <nav class="navbar navbar-expand-lg navbar-light "  >
      <div class="container-fluid">
        <a class="navbar-brand text-white" href="#">
            <img src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/logo-white.png" alt="" width="120px" />
          
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active text-white" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                About
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ticket
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item text-black"  href="#">
                    Flights
                  </a>
                </li>
                <li>
                  <a class="dropdown-item text-black" href="#">
                    Hotels
                  </a>  
                </li>
               
                <li>
                  <a class="dropdown-item text-black" href="#">
                  Buses
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                Contact
              </a>
            </li>
          </ul>
          <div class="d-flex justify-content-between px-5  align-items-center ">
           
              <div class="searchbar">
                <input
                  class="search_input"
                  type="text"
                  name=""
                  placeholder="Search..."
                />
                <a href="#" class="search_icon">
                <i class="ri-search-line text-black fs-4"></i>
                </a>
              </div>
            {/* </div> */}
            <div className=" d-flex align-items-end  justify-content-center  " 
            style={{padding:"7px",borderRadius:"50%",  backgroundColor:"white"}}>
              <PersonPinIcon sx={{ fontSize: "35px", color: "black" }} />
            </div>
            
          </div>
        </div>
      </div>
    </nav>
  );
}
