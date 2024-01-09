import icon from "../img/User.svg";
import notification from "../img/Bell.svg";
import user2 from "../img/User (1).svg";
import edit2 from "../img/PencilSimpleLine.svg";
import { useNavigate } from "react-router-dom";

const Settings = () => {

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
            <div className="admin-wrapper3">
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

             
            </div>
        </div>
    </div>
     );
}
 
export default Settings;