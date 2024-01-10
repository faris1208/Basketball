import icon from "../img/User.svg";
import notification from "../img/Bell.svg";
import vector from "../img/Vector.svg";
import { useNavigate } from "react-router-dom";
import plus2 from "../img/Plus.svg";
// import edit2 from "../img/PencilSimpleLine.svg";

const Create = () => {

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
                    <h2>Create Items</h2>
                </div>
                <div className="three-btn">
                    <button className="Save-btn">Save</button>
                    <button className="Preview-btn">Preview</button>
                    <button className="Delete-btn">Delete Task</button>
                </div>
            </div>

            <div className="activity-contents">
                <div className="activity2">
                    <label>Activity name</label>
                    <input  type="text" className="activity-input" />
                </div>
                <div className="time-contents">
                    <div className="time">
                        <label>Time</label>
                        <input type="time" placeholder="00:00" className="time-input" />
                    </div>
                    <div className="minutes">
                        <label className="minus">Minutes</label>
                        <input type="time" placeholder="00:00:00" className="minutes-input" />
                        <label className="add">Seconds</label>
                    </div>
                </div>
            </div>

            <div className="description-contents">
                <div className="description">
                    <label>Description</label>
                    <input type="text" className="description-input" />
                </div>
                <div className="description2">
                    <div className="description2-contents">
                        <div className="days-text">
                            <label>Days</label>
                            <input type="text" className="days-text-input" />
                        </div>
                        <div className="text-levels">
                            <label>Levels</label>
                            <input type="text" className="text-levels-input" />
                            <img src={vector} alt="" className="vector-image" width="100%" />
                        </div>
                        <div className="text-category">
                            <label>Category</label>
                            <input type="text" className="text-category-input" />
                            <img src={vector} alt="" className="vector-image" width="100%" />
                        </div>
                    </div>

                    <div className="date2">
                        <label>Date</label>
                        <input type="date" className="date2-input" />
                    </div>
                </div>
            </div>

            <div className="animation">
                <label>Animation URL  </label>
                <input type="text" className="animation-input" />
            </div>

            <div className="last-task-contents">
                <div className="last-task" >
                    <div className="plus2-contents">
                        <div className="plus2-box" onClick={() => {navigate("/beginners")}}>
                            <img src={plus2} alt="" className="plus2-image" width="100%" />
                        </div>
                        <p>Add New Task</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Create;