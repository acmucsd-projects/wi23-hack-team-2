import React from "react";
import "./style.css";

const InputNum = () => {
    return (
        <div className="class-count">How Many Classes?
            <label for="count">How Many Classes?</label>
            <div class="dropdown">
                <select name="count" id="count" onChange={handleChange}>
                    <option value="" selected>Select Option</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
        </div>
    );
  };
  
  export default InputNum;