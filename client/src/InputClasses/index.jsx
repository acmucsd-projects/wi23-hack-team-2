import React, { useState, useEffect } from "react";
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
    const [schedule, updateSchedule] = useState([]);
    const [list, updateList] = useState([]);

    const [class1, updateClass1] = useState("");
    const [class2, updateClass2] = useState("");
    const [class3, updateClass3] = useState("");
    const [class4, updateClass4] = useState("");

    //const [result, loading] = useAsyncHook(query);
    /*
    useEffect(() => {
        API.getCourse(classData.class1).then((response) => {
            console.log(response);
            updateList(response.data);
        });
        API.getCourse(classData.class2).then((response) => {
            console.log(response);
            updateList(response.data);
        });
        API.getCourse(classData.class3).then((response) => {
            console.log(response);
            updateList(response.data);
        });
        API.getCourse(classData.class4).then((response) => {
            console.log(response);
            updateList(response.data);
        });
    }, []); */

    const handleChange1 = (e) => {   
        updateClass1(e.target.value);
        
    };
    const handleChange2 = (e) => {   
        updateClass2(e.target.value);
    };
    const handleChange3 = (e) => {   
        updateClass3(e.target.value);
    };
    const handleChange4 = (e) => {   
        updateClass4(e.target.value);
    };
    const courseCombos = (bigarray) => {
        var combosthatwork = []
        if (bigarray.length ===1){
            return "Insert more classes to build a schedule"
        }else if (bigarray.length === 2){
            for (let i = 0; i < bigarray[0].length; i++) {
                for (let j = 0; j < bigarray[1].length; j++) {
                    let classcombo = [bigarray[0][i], bigarray[1][j]];
                    if (check(classcombo)===true) {
                        // if check returns true, add to combosthatwork
                        combosthatwork.push(classcombo)
                    }
                }
            }
        }else if (bigarray.length === 3){
            for (let i = 0; i < bigarray[0].length; i++) {
                for (let j = 0; j < bigarray[1].length; j++) {
                    for (let k = 0; k < bigarray[2].length; k++) {
                        let classcombo = [bigarray[0][i], bigarray[1][j], bigarray[2][k]];
                        if (check(classcombo)===true) {
                            // if check returns true, add to combosthatwork
                            combosthatwork.push(classcombo)
                        }
                    }
                }
            }
        }else if(bigarray.length === 4)
        // for loop for each class array
        for (let i = 0; i < bigarray[0].length; i++) {
            for (let j = 0; j < bigarray[1].length; j++) {
                for (let k = 0; k < bigarray[2].length; k++) {
                    for (let l = 0; l < bigarray[3].length; l++) {
                        var classcombo = [bigarray[0][i], bigarray[1][j], bigarray[2][k], bigarray[3][l]];
                        if (check(classcombo)===true) {
                            // if check returns true, add to combosthatwork
                            combosthatwork.push(classcombo)
                        }
                    }
                }
            }
        }

        if (combosthatwork.length === 0) {
            combosthatwork[0] = "no possible schedules"
            // some empty schedule that has a single class that says "no possible "
        }

        return combosthatwork[0];

    };

// input is a list of queries (each query represents one class)

    const check = (classes) => {
        // final list of classes after checking for lecture time conflicts
        var final_classes = []

        // checks if there are no class queries in input or exceeds max of 4
        if (classes.length === 0 || classes.length > 4) {
            return "Number of classes more than 4";
        }

        // loop through all classes inputted (based on order)
        for (let i = 0; i < classes.length; i++) {
            
            // adds first class in input into final list
            if (final_classes.length === 0) {
                final_classes.push(classes[i])
                continue
            }
            
            // counter to make sure each class has no time conflicts with 
            let cnt = 0
            
            // loop to compare class with classes already added
            for (let j = 0; j < final_classes.length; j++) {

                // checks for time conflicts, if false there is a time conflict and class will not be added to final list
                if (!compare_day(classes[i]["meetings"], final_classes[j]["meetings"])) {
                    break;
                }
                
                // if no time conflicts increment counter and compare class with next class in final list
                cnt += 1
            }
            
            // if class has no time conflicts with other classes then add it to final list

            if (cnt === final_classes.length) {
                final_classes.push(classes[i])
            }
            
        }

        // if length of final list not equal to initial list, then one or more classes has a time conflict with a class on this list

        if (final_classes.length !== classes.length) {
            return false;
        }else{
            return true
        }

        // else return all class objects inputted, no time conflicts
        //return final_classes;
    };

    //compare days
    const compare_day = (classinfo1, classinfo2) => {
        
        // split class info 
        var list1 = classinfo1.split("|");
        var list2 = classinfo2.split("|");

        // pull lecture info and split by commas

        var info1 = list1[0].split(",");
        var info2 = list2[0].split(",");
        
        // if both classes are on the same day/days, compare their lecture times

        if (info1[1][0] === info2[1][0]) {

            // if true there is no time conflict, return true

            if (comparetime(info1[2], info2[2])) {
                return true;
            }
        }

        // if both classes are on different days there is no time conflict, return true

        else {
            return true;
        }
        
        return false;

    };

    // compare time
    const comparetime = (classinfo1, classinfo2) => {

        // split time interval to separate start and end times
        var times1 = classinfo1.replace(/\s/g, "").split("-");
        var times2 = classinfo2.replace(/\s/g, "").split("-");
        
        //split time chunk into start and end time
        var start_time1 = times1[0];
        var end_time1 = times1[1];

        var start_time2 = times2[0];
        var end_time2 = times2[1]
        
        // if start or end times are the same for both classes this is a time conflict, return false

        if (start_time1 === start_time2 || end_time1 === end_time2) {
            //console.log("Time conflicts")
            return false;
        }

        // if the start time of class within start and end time of compared class, time conflict, return false

        else if (start_time2 < start_time1 && start_time1 < end_time2) {
            return false;
        }
        
        // no time conflicts, return true

        return true;
    };
    async function fetchData() {
        API.getCourse(class1).then((response) => {
            updateList([...list, response.data]);
        });
        API.getCourse(class2).then((response) => {
            updateList([...list, response.data]);
        });
        API.getCourse(class3).then((response) => {
            updateList([...list, response.data]);
        });
        API.getCourse(class4).then((response) => {
            updateList([...list, response.data]);
        });
    }

    async function createSchedule() {
        const schedules = courseCombos(list);
        updateSchedule([...schedule, schedules]);

    }

    const handleCreateSchedule = (e) => {
        e.preventDefault();
        //updateList([...list, class1, class2, class3, class4]);
        fetchData();
        createSchedule();
        //fetchData();
        //updateSchedule(courseCombos(list));

        /*
    
        API.getCourse(e.target.value).then((response) => {
            console.log(response);
            updateClassData([...classData, response])
            console.log(classData);
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
            */
    };

    return (
        <div className="question">
            <h2>input classes</h2>
            <form onSubmit={handleCreateSchedule}>
                <input type="text" placeholder="class 1" id="class 1" name="class1" required minlength="0" maxlength="15" size="20" value={class1} onChange={handleChange1}/>
                <input type="text" placeholder="class 2" id="class 2" name="class2" minlength="0" maxlength="15" size="20" value={class2} onChange={handleChange2}/>
                <input type="text" placeholder="class 3" id="class 3" name="class3" minlength="0" maxlength="15" size="20" value={class3} onChange={handleChange3}/>
                <input type="text" placeholder="class 4" id="class 4" name="class4" minlength="0" maxlength="15" size="20" value={class4} onChange={handleChange4}/>

                <input type="submit" />
            </form>
            
            <p>{schedule[1]}</p>
            

        </div>
    );
  };
  
  /*
  <p>{list[0]["subj_course_id"]}</p>
  action="input-classes"

{schedule.map((classes) => {
                return(
                    <p>{classes}</p>
                )
            })}
*/

  export default InputClasses;
