import React from "react";
import "./style.css";
import InputNum from "../InputNum";
import InputClasses from "../InputClasses";

const MainBody = () => {
    /*
    //MODIFY !!!! 
    const createSchedule = async (e) => {
        //prevent default values
            e.preventDefault();
            //get data typed in
            const req = e.target;
            console.log(req.name);
            const payload = {
                purchase: formData
            };
            console.log(JSON.stringify(payload.purchase));
            console.log(req);
            console.log(e);
            await API.createPurchase(payload);
            alert("Created successfully");
    };
    //MODIFY !!!!!!!!
    */

    return (
        <div className="input">
            <p>Your Course Builder</p>
            <InputNum/>
            <InputClasses/>
            <input type="submit" value="Submit" onClick={createSchedule}></input>
        </div>
    );
};

export default MainBody;