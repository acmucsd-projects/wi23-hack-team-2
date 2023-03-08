import React from "react";
import "./style.css";

const InputClasses = () => {
    const initialFormData = {
        course1: "",
        course2: "",
        course3: "",
        course4: ""
    };

    const [formData, updateFormData] = useState(initialFormData);

    /*
    const handleChange = (e) => {
        updateFormData({
        ...formData,

        // Trimming any whitespace
        [e.target.name]: e.target.value.trim()
        });
    }; */

    return (
        <div className="class-input">Input Classes
            <input type="text" id="course1" name="course1" required
        minlength="1" maxlength="15" placeholder="Course Code + Name" onChange={handleChange}/>
            <input type="text" id="course2" name="course2" required
            minlength="1" maxlength="15" onChange={handleChange}/>
            <input type="text" id="course3" name="course3" required
            minlength="1" maxlength="15" onChange={handleChange}/>
            <input type="text" id="course4" name="course4" required
            minlength="1" maxlength="15" onChange={handleChange}/>            
        </div>
    );
  };
  
  export default InputClasses;
