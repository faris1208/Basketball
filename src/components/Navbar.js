import basket from "../img/Component 6.svg";
import home from "../img/home.svg";
import dribble from "../img/DribbbleLogo.svg";
import down from "../img/CaretUp.svg";
import profile from "../img/UserCircle.svg";
import gear from "../img/Gear.svg";
import out from "../img/SignOut.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = ({children}) => {

    // const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState(false);
    // const [signUp, setSignUp] = useState(false);

    const toggleMenu = () => {
        setActive((open) => !open)
    }

    const navigate = useNavigate()

    return ( 
        <div className="navbar-container">
            <div className="navbar-wrapper">
                <div className="basket-contents">
                    <img src={basket} alt="" className="basket-image" width="100%" />
                </div>

                <div className="general">
                    <h2>GENERAL</h2>
                    <div className="dashboard">
                        <img src={home} alt="" className="home-image" width="100%" />
                        <h2  onClick={() => {navigate("/dashboard")}}>Dashboard</h2>
                    </div>
                    <div className="level-open" >
                        <div className="Levels" onClick={toggleMenu} >
                            <img src={dribble} alt="" className="dribble-image" width="100%" />
                            <h2>Levels</h2>
                            <img src={down} alt="" className="down-image" width="100%"/>
                        </div>

                        <div className={`expert ${active ? "is-open" : ""}`}>
                            <ul>
                                <li  onClick={() => {navigate("/beginners")}}>Beginner </li>
                                <li  onClick={() => {navigate("/intermediate")}}>Intermediate </li>
                                <li  onClick={() => {navigate("/expert")}}>Expert </li>
                                <li  onClick={() => {navigate("/elite")}}>Elite </li>
                            </ul>
                        </div>
                    </div>

                    <h3>ACCOUNT</h3>
                    <div className="profile">
                        <img src={profile} alt="" className="profile-image" width="100%" />
                        <h3 onClick={() => {navigate("/admin")}}>My Profile </h3>
                    </div>
                    <div className="profile">
                        <img src={gear} alt="" className="profile-image" width="100%" />
                        <h3 onClick={() => {navigate("/settings")}}>SETTINGS </h3>
                    </div>
                    <div className="gear">
                        <img src={out} alt="" className="profile-image" width="100%" />
                        <h3 onClick={() => {navigate("/")}}>LOG OUT </h3>
                    </div>
                </div>
            </div>

            <div className="new-child">
            {
                children
            }
            </div>
        </div>
     );
}
 
export default Navbar;