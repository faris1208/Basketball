import icon from "../img/User.svg";
import notification from "../img/Bell.svg";
// import vector from "../img/Vector.svg";
import { useNavigate } from "react-router-dom";
import plus2 from "../img/Vector.svg";
import salam from "../img/Timmy-1.svg";
import { useState } from "react";
// import salam2 from "../img/salam-2.svg";
// import salam3 from "../img/salam-3.svg";

const Create = () => {

    // const navigate = useNavigate()

    const [drop, setDrop] = useState(false);
    const [on, setOn] = useState(false);

    
    const toggleDrop = () => {
        setDrop((open) => !open)
    }

    const toggleOn = () => {
        setOn((open) => !open)
    }

    const navigate = useNavigate()

    return ( 
        <div className="Create-container">
            <div className="admin-wrapper">
                <div className="admin-head">
                    <img src={icon} alt="" className="admin-image" width="100%" />
                    <p>Hello Admin!</p>
                </div>
                <div className="notification-head">
                    <img src={notification} alt="" className="notification-image" width="100%" />
                </div>
            </div>

            <div className="create-item-contents">
                <div className="create-items">
                    <h3><span className="span-one">All Activity /</span> Add New Activity</h3>
                </div>
                <div className="three-btn">
                    <button className="Preview-btn">Cancel</button>
                    <button className="Save-btn" onClick={() => {navigate("/beginners")}}>Save</button>
                </div>
            </div>

            <div className="add-activity">
                <div className="all-activty">
                    <div className="basic-information">
                        <h3>Basic Information</h3>
                    </div>
                </div>
                <div className="salam-heading">
                    <div className="salam-head">
                        <h3>Animation Images<span className="star">*</span></h3>
                    </div>
                    <div className="salam">
                        <img src={salam} alt="" className="salam3-image" width="100%" />
                        <img src={salam} alt="" className="salam3-image" width="100%" />
                        <img src={salam} alt="" className="salam3-image" width="100%" />
                    </div>
                    <div className="plus2">
                        <div className="plus2-contents">
                            {/* <img src={plus2} alt="" className="plus2-image" width="100%" /> */}
                            <p>+ Add more</p>
                        </div>
                    </div>
                </div>

                <div className="videos-contents">
                    <div className="videos">
                        <h3>Animation Videos<span className="star">*</span></h3>
                    </div>
                    <div className="drag">
                        <p>+ Drag or click to add</p>
                    </div>
                </div>

                <div className="URL-contents">
                    <div className="URL">
                        <h3>Animation URL<span className="star">*</span></h3>
                    </div>
                    <div className="drag1">
                        <input  className="drags1"/>
                    </div>
                </div>

                <div className="videos-contents">
                    <div className="videos">
                        <h3>Animation Names<span className="star">*</span></h3>
                    </div>
                    <div className="drag2">
                        <input  className="drags2"/>
                    </div>
                </div>

                <div className="Description-contents">
                    <div className="Description">
                        <h3>Description<span className="star">*</span></h3>
                    </div>
                    <div className="drag3">
                        <input  className="drags3"/>
                    </div>
                </div>

                <div className="Time-contents">
                    <div className="Time">
                        <h3>Time<span className="star">*</span></h3>
                    </div>
                    <div className="sec">
                        <input type="minutes" placeholder="00:00" className="time-min"/>
                        <label className="min-label">Min</label>
                        <input type="seconds" placeholder="00:00" className="time-sec"/>
                        <label className="min-label">Sec</label>
                    </div>
                </div>

                <div className="category-day1">
                    <div className="categor-day">
                        <h3>Category<span className="star">*</span></h3>
                    </div>
                    <div className="exercise-day1">
                        <div className="new-exercise">
                            <div className="exercise1">
                                <h3>Exercise</h3>
                                <img src={plus2} alt="" className="men-image" width="100%" onClick={toggleDrop} />
                            </div>
                            <div className={`new-moves ${drop ? "is-open" : ""}`}>
                                <ul>
                                    <li>Exercise</li>
                                    <li>Drills</li>
                                    <li>Moves</li>
                                </ul>
                            </div>
                        </div>

                        
                        <div className="begginer-day1">
                            <div className="new-beginner">
                                <div className="begginer-day2">
                                    <h3>Beginner</h3>
                                    <img src={plus2} alt="" className="men-image" width="100%"onClick={toggleOn} />
                                </div>
                                <div className={`new-elite ${on ? "is-open" : ""}`}>
                                    <ul>
                                        <li>Beginner</li>
                                        <li>Intermidiate</li>
                                        <li>Expert</li>
                                        <li>Elite</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="day3">
                                <input type="text" placeholder="Day" className="day3-input" />
                                {/* <h3>Day</h3> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="last-create">
                    <div className="last-date">
                        <h3>Date<span className="star">*</span></h3>
                    </div>
                    <div className="last-date-input">
                        <input type="date" className="date-year"/>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Create;