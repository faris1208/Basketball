import bar from "../img/MagnifyingGlass.svg";
import icon from "../img/User.svg";
import notification from "../img/Bell.svg";
import bars from "../img/gridicons_dropdown.svg";
import plus from "../img/Plus.svg";
import { useState } from "react";

const Beginners = () => {

        // const [isOpen, setIsOpen] = useState(false);
        const [active, setActive] = useState(false);
        // const [signUp, setSignUp] = useState(false);
    
        const toggleMenu = () => {
            setActive((open) => !open)
        }

    return ( 
        <div>
             <div className="beginners-wrapper">
                <div className="beginners-contents">
                    <img src={bar} alt="" className="bar2-image" width="100%" />
                    <input type="text" placeholder="Search" className="bars-input" />
                </div>
                <div className="begin-contents">
                    <div className="begin-head">
                        <div className="moves">
                            <p>All categories</p>
                            <img src={bars} alt="" className="new-image" width="100%"  onClick={toggleMenu}  />
                        </div>
                        <div className={`drills ${active ? "is-open" : ""}`}>
                            <ul>
                                <li>Exercise</li>
                                <li>Drills</li>
                                <li>Moves</li>
                            </ul>
                        </div>
                    </div>
                    <div className="icons-head">
                        <img src={icon} alt="" className="icons-image" width="100%" />
                        <p>Hello Admin!</p>
                    </div>
                    <div className="notify-head">
                        <img src={notification} alt="" className="notify-image" width="100%" />
                    </div>
                </div>
            </div>

            <div className="exercise-container">
                <div className="exercise-wrapper">
                    <div className="activity">
                        <h3>Activity name</h3>
                        <img src={bars} alt="" className="news-image" width="100%"/>
                    </div>
                    <div className="days">
                        <h3>Days</h3>
                    </div>
                    <div className="category">
                        <h3>Category</h3>
                    </div>
                </div>

                <div className="neck-stretch">
                    <div className="stretch">
                        <h3>Neck Stretch</h3>
                        <p>10 Neck Stretch</p>
                    </div>
                    <div className="number-one">
                        <h3>01</h3>
                    </div>
                    <div className="neck">
                        <h3>Exercise</h3>
                    </div>
                    <div className="two-button">
                        <button className="edit-btn">Edit</button>
                        <button className="edit-btn">Delete</button>
                    </div>
                </div>

                <div className="neck-stretch">
                    <div className="stretch">
                        <h3>Shoulder Stretch</h3>
                        <p>20 Shoulder Stretch</p>
                    </div>
                    <div className="number-one">
                        <h3>01</h3>
                    </div>
                    <div className="neck">
                        <h3>Exercise</h3>
                    </div>
                    <div className="two-button">
                        <button className="edit-btn">Edit</button>
                        <button className="edit-btn">Delete</button>
                    </div>
                </div>

                <div className="neck-stretch">
                    <div className="stretch">
                        <h3>Hip Stretch</h3>
                        <p>20 Hip Stretch</p>
                    </div>
                    <div className="number-one">
                        <h3>01</h3>
                    </div>
                    <div className="neck">
                        <h3>Exercise</h3>
                    </div>
                    <div className="two-button">
                        <button className="edit-btn">Edit</button>
                        <button className="edit-btn">Delete</button>
                    </div>
                </div>

                <div className="neck-stretch">
                    <div className="stretch">
                        <h3>Windmill</h3>
                        <p>20 Windmill</p>
                    </div>
                    <div className="number-one">
                        <h3>01</h3>
                    </div>
                    <div className="neck">
                        <h3>Exercise</h3>
                    </div>
                    <div className="two-button">
                        <button className="edit-btn">Edit</button>
                        <button className="edit-btn">Delete</button>
                    </div>
                </div>

                <div className="neck-stretch">
                    <div className="stretch">
                        <h3>Reach and Squat</h3>
                        <p>20 Reach and Squat</p>
                    </div>
                    <div className="number-one">
                        <h3>01</h3>
                    </div>
                    <div className="neck">
                        <h3>Exercise</h3>
                    </div>
                    <div className="two-button">
                        <button className="edit-btn">Edit</button>
                        <button className="edit-btn">Delete</button>
                    </div>
                </div>
                <div className="plus-wrapper">
                    <div className="plus">
                        <img src={plus} alt="" className="plus-image" width="100%" />
                        <h2>Add More Fields</h2>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Beginners;