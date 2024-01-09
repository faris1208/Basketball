import icon from "../img/User.svg";
import notification from "../img/Bell.svg";
import user2 from "../img/User (1).svg";
import edit2 from "../img/PencilSimpleLine.svg";
import line9 from "../img/Line 9.svg";
import line8 from "../img/Line 8.svg";
import email from "../img/PencilSimpleLine (1).svg";
import { useNavigate } from "react-router-dom";

const Admin = () => {

    const navigate = useNavigate()

    return ( 
        <div className="admin-container">
            <div className="admin-wrapper">
                <div className="admin-head">
                    <img src={icon} alt="" className="admin-image" width="100%" />
                    <p>Hello Admin!</p>
                </div>
                <div className="notification-head">
                    <img src={notification} alt="" className="notification-image" width="100%" />
                </div>
            </div>
            <div className="information">
                <h1>Personal Information</h1>
                <div className="admin-wrapper2">
                    <div className="admin-heading">
                        <div className="user2">
                            <img src={user2} alt="" className="user2-image" width="100%" />
                        </div>
                        <h6>Admin</h6>
                        <div className="new-edit">
                            <p>Edit</p>
                            <img src={edit2} alt="" className="edit2-image" width="100%" />
                        </div>
                    </div>

                    <div className="account-information">
                        <h3 onClick={() => {navigate("/admin")}}>My Profile</h3>
                        <h3 onClick={() => {navigate("/account")}}>Account Information</h3>
                        <h3 onClick={() => {navigate("/settings")}}>Settings</h3>
                    </div>
                    <div className="compile">
                        <div className="complete">
                            <h3>Your Profile 25% Complete</h3>
                            <div className="lines">
                                <img src={line9} alt="" className="line9-image" width="100%" />
                                <img src={line8} alt="" className="line8-image" width="100%" />
                            </div>
                        </div>
                    </div>

                    <div className="email">
                        <div className="email-head">
                            <p>Email</p>
                            <div className="faris">
                                <p>Farislawal3@gmail.com</p>
                                <img src={email} alt="" className="email-image" width="100%" />
                            </div>
                        </div>

                        <div className="email-head">
                            <p>Phone Number</p>
                            <div className="faris">
                                <p>+2349139254991</p>
                                <img src={email} alt="" className="email-image" width="100%" />
                            </div>
                        </div>

                        <div className="email-head">
                            <p>Location</p>
                            <div className="faris">
                                <p>Lorem ipsum dolor sit amet</p>
                                <img src={email} alt="" className="email-image" width="100%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Admin;