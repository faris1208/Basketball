import check from "../img/mdi_checkbox-outline.svg";
import eye from "../img/eye-slash.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Log = () => {

    const navigate = useNavigate()

    const [show,setShow] = useState(false)
    const handleShow=() =>{
        setShow(!show)
    }

    return ( 
        <div className="container">
            <div className="log-container">
                <div className="log-wrapper">
                    <div className="legacy">
                        <h1>LEGACY </h1>
                        <p>Welcome back</p>
                    </div>
                </div>
                <div className="login">
                    <h3>Log in</h3>
                    <form className="log-form">
                        <div className="log-label">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email" className="log-input" />
                        </div>
                        <div className="log-label2">
                            <label>Email</label>
                            <input type={show?"text" : "password"} placeholder="*** *** *** ***"  className="log-input" />
                            <img src={eye} alt="" className="eye-image" width="100%" onClick={handleShow} />
                        </div>
                        <div className="check-contents">
                            <div className="remember">
                                <img src={check} alt="" className="check-image" width="100%" />
                                <p>Remember me</p>
                            </div>
                            <div className="forget">
                                <p>Forgot Password?</p>
                            </div>
                        </div>
                        <div className="log-button">
                            <button className="log-btn"  onClick={() => {navigate("/dashboard")}}>Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Log;