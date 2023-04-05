import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../API";

const ViewSchedule = () => {
    const [body, setBody] = useState([]);

    useEffect(() => {
        API.getSchedule().then((response) => {
            console.log(response);
            setBody(response.data.schedule);
        });
    }, []);

    return (
        <div className="viewing">
            <div className ="question">
                <h2>list layout</h2>
            </div>

            <div class="grid-container">
                <div class="grid-header">Subject/Course</div>
                <div class="grid-header">Title</div>
                <div class="grid-header">Section Code</div>
                <div class="grid-header">Type</div>
                <div class="grid-header">Instructor</div>
                <div class="grid-header">Grade Option</div>
                <div class="grid-header">Units</div>
                <div class="grid-header">Days</div>
                <div class="grid-header">Time</div>
                <div class="grid-header">BLDG</div>
                <div class="grid-header">Room</div>

                <div class="grid-item">Information for Classes</div>
                <div class="grid-item"></div>
                <div class="grid-item"></div>
                <div class="grid-item"></div>
                <div class="grid-item"></div>
                <div class="grid-item"></div>
                <div class="grid-item"></div>
                <div class="grid-item"></div>
                <div class="grid-item"></div>
                <div class="grid-item"></div>
                <div class="grid-item"></div>

                <div class="grid-item">Empty</div>
                <div class="grid-item">Empty</div>
                <div class="grid-item"></div>
                <div class="grid-item"></div>
                <div class="grid-item">Empty</div>
                <div class="grid-item">Empty</div>
                <div class="grid-item">Empty</div>
                <div class="grid-item"></div>
                <div class="grid-item"></div>
                <div class="grid-item"></div>
                <div class="grid-item"></div>

                <div class="grid-item">Empty</div>
                <div class="grid-item"></div>
                <div class="grid-item">Empty</div>
                <div class="grid-item"></div>
                <div class="grid-item">Empty</div>
                <div class="grid-item">Empty</div>
                <div class="grid-item">Empty</div>
                <div class="grid-item"></div>
                <div class="grid-item"></div>
                <div class="grid-item"></div>
                <div class="grid-item"></div>
            </div>

            <div className="footer">
                <h3>
                    Thank you for using our project!<br/>
                </h3>
            </div>
        </div>
    );
};

export default ViewSchedule;