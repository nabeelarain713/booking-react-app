import React from "react";
import Navigation from "./Navigation";
import "./Home.css";
// import dayjs from 'dayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
const Home = () => {
  // const [value, setValue] = React.useState(dayjs('2022-04-17'));
  return (
    <>
      <Navigation />
      <div className="home container-fluid w-100">
        <div className="home-abs container-fluid">
          <div className="">
            <span className="text-white mb-0" style={{ fontSize: "70px" }}>
              TICKETS BOOKING
            </span>
            <div className=" d-flex justify-content-center">
              <div class="wrapper d-flex justify-content-start">
                <div class="static-txt" style={{ fontSize: "50px" }}>
                  FOR
                </div>
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
          <div className="row">
            <div className="col-lg-6">
              <span>Book TICKETS</span>
              <br />
              <span>Travel Bookings Made Easy</span>
            </div>
            <div className="col-lg-6 d-flex justify-content-between  align-items-end">
              <div>
                <button className="btn bg-light">
                  <i class="ri-flight-takeoff-line"></i> Flights
                </button>
              </div>
              <div>
                <button className="btn bg-light">
                  <i class="ri-hotel-fill"></i> Hotels
                </button>
              </div>
              <div>
                <button className="btn bg-light">
                  <i class="ri-bus-line"></i>Buses
                </button>
              </div>
            </div>
          </div>
          <div className="row bg-warning p-3 mt-2">
            <div className="row">
              <div className="col-lg-9  d-flex justify-content-around p-3 align-items-center">
                <button className="btn bg-light">One Way</button>
                <button className="btn bg-light">Return</button>
                <button className="btn bg-light">Multi City</button>
                <div className="d-flex justify-content-start align-items-center ">
                  <span>1</span>
                  <span>Adults</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="_1MZrIK28AE8HVj289UBgZw st-svg-icon "
                  >
                    <path
                      d="M3.48042 18.1237C2.81329 17.4643 2.89511 16.8589 3.39441 16.235C4.04896 15.4092 4.69302 14.5685 5.35386 13.7446C6.07974 12.8367 6.56226 12.7619 7.58814 13.371C8.66227 14.0062 9.16367 13.9483 9.51402 12.7825C9.87906 11.5719 10.7728 10.7069 11.4441 9.68871C11.8406 9.0778 12.2833 8.49678 12.7364 7.91016C13.3973 7.03583 14.3329 6.80043 15.4322 7.21705C16.37 7.57388 16.8127 8.35293 16.6197 9.33561C16.5427 9.91451 16.4157 10.4873 16.2399 11.0488C15.7029 12.4499 16.0071 13.7147 16.7413 15.0019C17.4336 16.1976 17.9518 17.4717 18.5707 18.7029C18.8099 19.1812 18.8728 19.6202 18.2854 19.8911C17.698 20.162 17.3371 19.8163 17.056 19.3773C15.8476 17.4829 14.6266 15.5979 13.4224 13.7017C13.2014 13.371 13.0565 13.0045 12.996 12.6234C12.9355 12.2424 12.9606 11.8545 13.07 11.4822C13.2168 10.9666 13.2798 10.4323 13.3994 9.77651C13.2723 9.85572 13.1542 9.94582 13.0469 10.0455C11.2972 12.4275 9.02731 14.4695 7.38254 16.9225C7.07834 17.3764 6.8245 17.453 6.25806 17.212C5.24477 16.7824 4.53567 17.0551 3.48042 18.1237Z"
                      fill="#060606"
                    ></path>
                    <path
                      d="M18.3315 4.87055C18.3274 5.11245 18.2698 5.35126 18.162 5.57334C18.0543 5.79543 17.8984 5.99643 17.7034 6.16488C17.5084 6.33333 17.2781 6.46593 17.0255 6.5551C16.773 6.64427 16.5032 6.68827 16.2315 6.68459C15.9599 6.68091 15.6917 6.62962 15.4423 6.53365C15.1929 6.43768 14.9672 6.2989 14.7781 6.12525C14.5889 5.95159 14.44 5.74646 14.3399 5.52156C14.2397 5.29667 14.1903 5.05641 14.1945 4.8145C14.1986 4.5726 14.2562 4.33379 14.364 4.11171C14.4717 3.88962 14.6276 3.68862 14.8226 3.52017C15.0176 3.35172 15.2479 3.21912 15.5005 3.12995C15.753 3.04078 16.0228 2.99678 16.2945 3.00046C16.5661 3.00414 16.8343 3.05543 17.0837 3.1514C17.3331 3.24737 17.5588 3.38615 17.7479 3.5598C17.9371 3.73346 18.086 3.93859 18.1861 4.16349C18.2863 4.38838 18.3357 4.62864 18.3315 4.87055Z"
                      fill="#060606"
                    ></path>
                    <path
                      d="M12.7761 13.7316C14.2656 15.8128 14.2656 15.8595 12.6985 17.709C12.1614 18.3442 11.6265 18.9831 11.081 19.6146C10.8062 19.9359 10.4516 20.1284 10.0153 19.8762C9.57891 19.6239 9.52646 19.2428 9.82227 18.843C9.95234 18.6562 10.0803 18.4825 10.2125 18.3031C10.737 17.5857 11.2614 16.8646 11.7922 16.1509C12.323 15.4373 12.323 14.5853 12.7761 13.7316Z"
                      fill="#0A0A0A"
                    ></path>
                    <path
                      d="M17.0351 9.8064C17.4546 10.8339 18.577 11.301 19.4036 12.0016C19.7707 12.3154 20.3078 12.6031 19.7854 13.1225C19.3218 13.5858 18.9232 13.2196 18.5435 12.9581C18.3901 12.8352 18.2283 12.721 18.0588 12.6162C16.8001 11.9698 16.1917 11.116 17.0351 9.8064Z"
                      fill="#0A0A0A"
                    ></path>
                    <path
                      d="M5.51741 20.0032C4.73489 19.9079 4.24607 19.566 4.25866 18.8822C4.27125 18.1985 4.72859 17.7931 5.49013 17.7949C6.25168 17.7968 6.71112 18.2115 6.71322 18.8897C6.71532 19.5679 6.20552 19.9004 5.51741 20.0032Z"
                      fill="#0A0A0A"
                    ></path>
                  </svg>
                  <span className="mt-2">
                    <i class="ri-arrow-down-s-fill fs-3"></i>
                  </span>
                </div>
                <div className="d-flex justify-content-start align-items-center ">
                  <span>Economy</span>
                  <span className="mt-2">
                    <i class="ri-arrow-down-s-fill fs-3"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3">
                <div class="input-group">
                  <span class="input-group-text">
                    <i class="ri-map-pin-fill"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div class="input-group">
                  <span class="input-group-text">
                    <i class="ri-map-pin-fill"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div class="input-group">
                  <span class="input-group-text">
                    <i class="ri-calendar-line"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div class="input-group">
                  <span class="input-group-text">
                    <i class="ri-calendar-line"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="row  Hotels bg-warning p-3 mt-2 "
            style={{ display: "none" }}
          >
            <div className="row">
              <div className="col-lg-3">
                <div class="form-floating mb-3 mt-3">
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                  />
                  <label for="email">Email</label>
                </div>
              </div>
              <div className="col-lg-3">
                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                   <DemoContainer components={['DatePicker', 'DatePicker']}>
                     <DatePicker label="Uncontrolled picker" defaultValue={dayjs('2022-04-17')} />
                       <DatePicker
                        label="Controlled picker"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                      />
                      </DemoContainer>
                    </LocalizationProvider> */}
              </div>
              <div className="col-lg-3">
                {/* <DatePicker
                        label="Controlled picker"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                       /> */}
              </div>
              <div className="col-lg-3">
                <div class="input-group">
                  <span class="input-group-text">
                    <i class="ri-calendar-line"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row p-3">
            <div className="col-lg-12 d-flex justify-content-center">
              <div>
                <button className="btn bg-light">
                  {" "}
                  <i class="ri-search-line"></i> Search Flights
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" d-flex justify-content-center mb-5"
        style={{ marginTop: "250px" }}
      >
        <div className="row  w-75  d-flex justify-content-around">
          <div className="col-lg-4  text-center border border-2 p-2  ">
            <div>
              <img
                src="https://cdn-icons-png.freepik.com/512/1073/1073180.png"
                alt=""
                width="70"
              />
            </div>

            <h4 className="mt-3">Search </h4>
            <p className="my-3">
              Choose your origin ,destination and journey <br />
              dates searches for flights,hotels and buses
            </p>
          </div>
          <div className="col-lg-4  text-center border border-2 p-2 ">
            <div>
              <img
                src="https://cdn-icons-png.freepik.com/512/1598/1598638.png"
                alt=""
                width="70"
              />
            </div>

            <h4 className="mt-3">Select </h4>
            <p className="my-3">
              Select your desired trip and choose your
              <br />
              Seats
            </p>
          </div>
          <div className="col-lg-4  text-center border border-2 p-2">
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1019/1019607.png"
                alt=""
                width="70"
              />
            </div>

            <h4 className="mt-3">Pay </h4>
            <p className="my-3">Pay for the tickets via Debit /Credit Cards</p>
          </div>
        </div>
      </div>
      <section class="destination-area destination-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="section-title">
                <span class="sub-title">Offer Deals</span>
                <h2 class="title">Your Great Destination</h2>
              </div>
              <div class="destination-content">
                <p>
                  Get rewarded for your travels – unlock instant savings of 10%
                  or more with a free <span>Geairinfo.com</span> account
                </p>
                <ul>
                  <li>
                    <div class="counter-item">
                      <div class="counter-content">
                        <h2 class="count">
                          <span
                            class="odometer odometer-auto-theme"
                            data-count="5830"
                          >
                            <div class="odometer-inside">
                              <span class="odometer-digit">
                                <span class="odometer-digit-spacer">8</span>
                                <span class="odometer-digit-inner">
                                  <span class="odometer-ribbon">
                                    <span class="odometer-ribbon-inner">
                                      <span class="odometer-value">5</span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                              <span class="odometer-formatting-mark">,</span>
                              <span class="odometer-digit">
                                <span class="odometer-digit-spacer">8</span>
                                <span class="odometer-digit-inner">
                                  <span class="odometer-ribbon">
                                    <span class="odometer-ribbon-inner">
                                      <span class="odometer-value">8</span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                              <span class="odometer-digit">
                                <span class="odometer-digit-spacer">8</span>
                                <span class="odometer-digit-inner">
                                  <span class="odometer-ribbon">
                                    <span class="odometer-ribbon-inner">
                                      <span class="odometer-value">3</span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                              
                            </div>
                          </span>
                          +
                        </h2>
                        <p>Happy Customers</p>
                      </div>
                      <div class="counter-icon">
                       <i class="ri-group-2-fill"></i>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="counter-item">
                      <div class="counter-content">
                        <h2 class="count">
                          <span
                            class="odometer odometer-auto-theme"
                            data-count="100"
                          >
                            <div class="odometer-inside">
                              <span class="odometer-digit">
                                <span class="odometer-digit-spacer">8</span>
                                <span class="odometer-digit-inner">
                                  <span class="odometer-ribbon">
                                    <span class="odometer-ribbon-inner">
                                      <span class="odometer-value">1</span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                              <span class="odometer-digit">
                                <span class="odometer-digit-spacer">8</span>
                                <span class="odometer-digit-inner">
                                  <span class="odometer-ribbon">
                                    <span class="odometer-ribbon-inner">
                                      <span class="odometer-value">0</span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                              
                            </div>
                          </span>
                          %
                        </h2>
                        <p>Client Setisfied</p>
                      </div>
                      <div class="counter-icon">
                        <i class="ri-global-line"></i>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="content-bottom">
                  <p>
                    Discover the latest offers &amp; news and start planning
                  </p>
                  <a href="contact.html" style={{textDecoration:"none"}}>contact us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
