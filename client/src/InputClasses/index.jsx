import React, { useState } from "react";
import "./style.css";
import API from "../API";

/*
        


        <div className="class-input">Input Classes
            <input type="text" id="course1" name="course1" required
        minlength="1" maxlength="15" placeholder="Course Code + Name" onChange={handleChange}/>
            <input type="text" id="course2" name="course2" required
            minlength="1" maxlength="15" onChange={handleChange}/>
            <input type="text" id="course3" name="course3" required
            minlength="1" maxlength="15" onChange={handleChange}/>
            <input type="text" id="course4" name="course4" required
            minlength="1" maxlength="15" onChange={handleChange}/>    
            <input type="submit" value="Submit" onChange={handleCreateSchedule}></input>        
        </div>

*/

const InputClasses = () => {
    const [classData, updateClassData] = useState([]);
    //e.target.value.trim() `http://localhost:3000//api/courselist/${e.target.value}`
    const handleChange = (e) => {
        API.getCourse(e.target.value).then((response) => {
            console.log(response);
            updateClassData(response)
            console.log(classData);
        });
    };

    const handleCreateSchedule = async (e) => {
            //prevent default values
            e.preventDefault();
            //get data typed in
            const req = e.target;
            console.log(req.name);
            const payload = {
                schedule: classData
            };
            console.log(JSON.stringify(payload.schedule));
            console.log(req);
            console.log(e);
            await API.createSchedule(payload);
            alert("Created successfully");
    };

    return (
        <div className="question">
            <h2>input classes</h2>
            <form action="input-classes" method="POST">
                <input type="text" placeholder="class 1" id="class 1" name="class 1" required minlength="0" maxlength="15" size="20"/>
                <input type="text" placeholder="class 2" id="class 2" name="class 2" minlength="0" maxlength="15" size="20"/>
                <input type="text" placeholder="class 3" id="class 3" name="class 3" minlength="0" maxlength="15" size="20"/>
                <input type="text" placeholder="class 4" id="class 4" name="class 4" minlength="0" maxlength="15" size="20"/>
                <input type="button" value="Submit" id="submit" name="submit"/>
            </form>
        </div>
    );
  };
  
  export default InputClasses;
