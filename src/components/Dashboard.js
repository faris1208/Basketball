import bar from "../img/MagnifyingGlass.svg";
import icon from "../img/User.svg";
import notification from "../img/Bell.svg";
import chart from "../img/Component 6.svg";
// import timmy1 from "../img/Timmy Action pose 5 with background 2.svg";
// import timmy2 from "../img/Timmy Action pose 4 with background 2.svg";
// import timmy3 from "../img/Frame 11795 (1).svg4";

const Dashboard = () => {
    return ( 
        <div className="dashboard-container">
            <div className="dashboard-wrapper">
                <div className="bar-contents">
                    <img src={bar} alt="" className="bar-image" width="100%" />
                    <input type="text" placeholder="Search" className="bar-input" />
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
                <img src={chart} alt="" className="chart-image" width="100%" />
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