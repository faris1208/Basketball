import icon from "../img/User.svg";
import notification from "../img/Bell.svg";
import time from "../img/Vector.svg";
import arrows from "../img/ArrowDown.svg"
import redarrow from "../img/ArrowDown (1).svg"
// import chart from "../img/Component 6.svg";
// import timmy1 from "../img/Timmy Action pose 5 with background 2.svg";
// import timmy2 from "../img/Timmy Action pose 4 with background 2.svg";
// import timmy3 from "../img/Frame 11795 (1).svg4";

const Dashboard = () => {
    return ( 
        <div className="dashboard-container">
            <div className="dashboard-wrapper">
                <div className="bar-contents">
                    <h2>Dashboard</h2>
                </div>
                <div className="icon-contents">
                    <div className="icon-head">
                        <img src={icon} alt="" className="icon-image" width="100%" />
                        <p>Hello Admin!</p>
                    </div>
                    <div className="notification-head">
                        <img src={notification} alt="" className="notification-image" width="100%" />
                    </div>
                </div>
            </div>
            <div className="chart-contents">
                <div className="range">
                    <p>Select data range</p>
                    <div className="time-range">
                        <p>Today</p>
                        <img src={time} alt="" className="time-vector-image" width="100%"  />
                    </div>
                </div>
            </div>

            <div className="dashboard-cal">
                <div className="dashboard-flex">
                    <div className="total-videos">
                        <div className="total-videos-head">
                            <p>Total Videos</p>
                            <h2>5623</h2>
                        </div>
                        <div className="kings">
                            <div className="percent">
                                <h3>+25%</h3>
                                <img src={arrows} alt="" className="arrows-image" width="100%"  />
                            </div>
                        </div>
                    </div>

                    <div className="total-videos">
                        <div className="total-videos-head">
                            <p>Total Views</p>
                            <h2>223.2</h2>
                        </div>
                        <div className="kings">
                            <div className="percent">
                                <h3>+14%</h3>
                                <img src={arrows} alt="" className="arrows-image" width="100%"  />
                            </div>
                        </div>
                    </div>

                    <div className="total-videos">
                        <div className="total-videos-head">
                            <p>Active Member</p>
                            <h2>105</h2>
                        </div>
                        <div className="kings">
                            <div className="percent-red">
                                <h3>+8.2%</h3>
                                <img src={redarrow} alt="" className="arrows-image" width="100%"  />
                            </div>
                        </div>
                    </div>

                    <div className="total-videos">
                        <div className="total-videos-head">
                            <p>Total Member</p>
                            <h2>3613</h2>
                        </div>
                        <div className="kings">
                            <div className="percent">
                                <h3>+15%</h3>
                                <img src={arrows} alt="" className="arrows-image" width="100%"  />
                            </div>
                        </div>
                    </div>

                    <div className="total-videos">
                        <div className="total-videos-head">
                            <p>New Sign-ups</p>
                            <h2>30</h2>
                        </div>
                        <div className="kings">
                            <div className="percent">
                                <h3>+59.2%</h3>
                                <img src={arrows} alt="" className="arrows-image" width="100%"  />
                            </div>
                        </div>
                    </div>

                    <div className="total-videos">
                        <div className="total-videos-head">
                            <p>Inactive Member</p>
                            <h2>3508</h2>
                        </div>
                        <div className="kings">
                            <div className="percent-red">
                                <h3>+3.2%</h3>
                                <img src={redarrow} alt="" className="arrows-image" width="100%"  />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="timmy-contents">
                <h1>Popular Tutorials</h1>
                <div className="timmy-head">
                    {/* <img src={timmy1} alt="" className="timmy-image" width="100%" />
                    <img src={timmy2} alt="" className="timmy-image" width="100%" />
                    <img src={timmy3} alt="" className="timmy-image1" width="100%" /> */}
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;