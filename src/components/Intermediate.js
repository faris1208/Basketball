// import bar from "../img/MagnifyingGlass.svg";
import icon from "../img/User.svg";
import notification from "../img/Bell.svg";
import bars from "../img/gridicons_dropdown.svg";
import plus from "../img/Plus.svg";
import phahey from "../img/Rectangle 7040.svg";
import faheys from "../img/Timmy-1.svg";
import edit from "../img/PencilLine.svg";
import law from "../img/Trash.svg";
import law2 from "../img/Trash.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Intermediate = () => {

    const [active, setActive] = useState(false);
    const [close, setClose] = useState(false);

    const toggleMenu = () => {
        setActive((open) => !open)
    }

    const toggleDelete = () => {
        setClose((open) => !open)
    }

    const navigate = useNavigate()
    return ( 
        <div className="beginners-view">
             <div className="beginners-wrapper">
              
                <div className="begin-contents">
                    <div className="new-contents">
                        <div className="icons-head">
                            <img src={icon} alt="" className="icons-image" width="100%" />
                            <p>Hello Admin!</p>
                        </div>
                        <div className="notify-head">
                            <img src={notification} alt="" className="notify-image" width="100%" />
                        </div>
                    </div>
                </div>

                
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

            </div>

            <div className="exercise-container">
                <div className="exercise-wrapper">
                    <div className="activity">
                        <h3>Animation</h3>
                    </div>
                    <div className="activity">
                        <h3>Activity name</h3>
                    </div>
                    <div className="activity">
                        <h3>Description</h3>
                    </div>
                    <div className="activity">
                        <h3>Duration</h3>
                    </div>
                    <div className="activity">
                        <h3>Days</h3>
                    </div>
                    <div className="activity">
                        <h3>Animation Url</h3>
                    </div>
                </div>

                <div className="neck-stretch">
                    <div className="pharris">
                        <img src={phahey} alt="" className="phahey-image" width="100%" />
                        <img src={faheys} alt="" className="faheys-image" width="100%" />
                    </div>
                    <div className="stretch">
                        <h3>Neck Stretch</h3>
                    </div>
                    <div className="stretch5">
                        <h3>10 Neck Stretch</h3>
                    </div>
                    
                    <div className="stretch2">
                        <h3>01:59</h3>
                    </div>
                    <div className="stretch3">
                        <h3>01</h3>
                    </div>
                    <div className="stretch4">
                        <h3>Lorem ipsum dolor...</h3>
                    </div>
                    <div className="two-button">
                        <img src={edit} alt="" className="edit-image" width="100%" />
                        <img src={law} alt="" className="law-image" width="100%"  onClick={toggleDelete} />
                    </div>
                </div>

                
                <div className="neck-stretch">
                    <div className="pharris">
                        <img src={phahey} alt="" className="phahey-image" width="100%" />
                        <img src={faheys} alt="" className="faheys-image" width="100%" />
                    </div>
                    <div className="stretch">
                        <h3>Shoulder...</h3>
                    </div>
                    <div className="stretch5">
                        <h3>20 Shoulder...</h3>
                    </div>
                    
                    <div className="stretch2">
                        <h3>01:59</h3>
                    </div>
                    <div className="stretch3">
                        <h3>01</h3>
                    </div>
                    <div className="stretch4">
                        <h3>Lorem ipsum dolor...</h3>
                    </div>
                    <div className="two-button">
                        <img src={edit} alt="" className="edit-image" width="100%" />
                        <img src={law} alt="" className="law-image" width="100%"  onClick={toggleDelete} />
                    </div>
                </div>

                
                <div className="neck-stretch">
                    <div className="pharris">
                        <img src={phahey} alt="" className="phahey-image" width="100%" />
                        <img src={faheys} alt="" className="faheys-image" width="100%" />
                    </div>
                    <div className="stretch">
                        <h3>Hip Stretch</h3>
                    </div>
                    <div className="stretch5">
                        <h3>20 Hip Stretch</h3>
                    </div>
                    
                    <div className="stretch2">
                        <h3>01:59</h3>
                    </div>
                    <div className="stretch3">
                        <h3>01</h3>
                    </div>
                    <div className="stretch4">
                        <h3>Lorem ipsum dolor...</h3>
                    </div>
                    <div className="two-button">
                        <img src={edit} alt="" className="edit-image" width="100%" />
                        <img src={law} alt="" className="law-image" width="100%"  onClick={toggleDelete} />
                    </div>
                </div>

                <div className="neck-stretch">
                    <div className="pharris">
                        <img src={phahey} alt="" className="phahey-image" width="100%" />
                        <img src={faheys} alt="" className="faheys-image" width="100%" />
                    </div>
                    <div className="stretch">
                        <h3>Windmill</h3>
                    </div>
                    <div className="stretch5">
                        <h3>20 Windmill</h3>
                    </div>
                    
                    <div className="stretch2">
                        <h3>01:59</h3>
                    </div>
                    <div className="stretch3">
                        <h3>01</h3>
                    </div>
                    <div className="stretch4">
                        <h3>Lorem ipsum dolor...</h3>
                    </div>
                    <div className="two-button">
                        <img src={edit} alt="" className="edit-image" width="100%" />
                        <img src={law} alt="" className="law-image" width="100%"  onClick={toggleDelete} />
                    </div>
                </div>

                
                <div className="neck-stretch">
                    <div className="pharris">
                        <img src={phahey} alt="" className="phahey-image" width="100%" />
                        <img src={faheys} alt="" className="faheys-image" width="100%" />
                    </div>
                    <div className="stretch">
                        <h3>Reach and...</h3>
                    </div>
                    <div className="stretch5">
                        <h3>20 Reach and...</h3>
                    </div>
                    
                    <div className="stretch2">
                        <h3>01:59</h3>
                    </div>
                    <div className="stretch3">
                        <h3>01</h3>
                    </div>
                    <div className="stretch4">
                        <h3>Lorem ipsum dolor...</h3>
                    </div>
                    <div className="two-button">
                        <img src={edit} alt="" className="edit-image" width="100%" />
                        <img src={law} alt="" className="law-image" width="100%"  onClick={toggleDelete} />
                    </div>
                </div>

                
                <div className={`warning ${close ? "is-open" : ""}`}>
                    <div className="cancel">
                        <img src={law2} alt="" className="law2-image" width="100%"  onClick={() => {navigate("/ongoing")}} />
                    </div>
                    <h5>Delete Activity</h5>
                    <p>Are you sure you want to delete this activity item? This action cannot be undone</p>
                    <div className="confirm">
                        <button className="confirm-btn" onClick={() => {navigate("/beginners")}}>Delete </button>
                        <button className="cancel-btn" onClick={() => {navigate("/beginners")}}>Cancel</button>
                    </div>
                </div>

               
                <div className="plus-wrapper">
                    <div className="plus">
                        <img src={plus} alt="" className="plus-image" width="100%" onClick={() => {navigate("/create")}} />
                        <h2>Add More Fields</h2>
                    </div>
                </div>

            </div>

        </div>
     );
}
 
export default Intermediate;