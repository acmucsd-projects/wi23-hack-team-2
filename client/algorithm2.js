// takes an input of list of classes (represented as strings)

classes = [{"_id": "64081caf1ddeb825edc889f9", "subj_course_id": "CSE 11","sec_code":"A01","sec_id":"135615","instructor":"Cao, Yingjun",
"total_seats":"100","meetings":"LE,TuTh,8:00 - 9:20,SOLIS 104|FI,2023-06-15,8:00 - 10:59,SOLIS 104|DI,…"}, {"_id": "64081cae1ddeb825edc883b0",
    "subj_course_id": "BICD 100", "sec_code": "C07", "sec_id": "165824","instructor": "Cooper, Andrew Michael","total_seats": "32",
    "meetings": "LE,TuTh,8:00 - 9:20,SOLIS 107|FI,2023-06-15,8:00 - 10:59,SOLIS 107|DI,W,19:00 - 19:50,PCYNH 240"}, {
        "_id": "64081cae1ddeb825edc883ed","subj_course_id": "BIEB 154","sec_code": "A01","sec_id": "157756",
        "instructor": "Stockwell, Sarah R","total_seats": "24",
        "meetings": "LE,TuTh,14:00 - 15:20,SEQUO 147|FI,2023-06-13,15:00 - 17:59,SEQUO 147|DI,F,15:00 - 15:50,CENTR 201"},
        {"_id": "64081caf1ddeb825edc886d1","subj_course_id": "CHEM 6C","sec_code": "C07","sec_id": "157585",
        "instructor": "Brydges, Stacey","total_seats": "40",
        "meetings": "LE,MWF,10:00 - 10:50,GH 242|FI,2023-06-12,8:00 - 10:59,GH 242|MI,2023-04-29,11:00 - 12:50,WLH 2001|MI,2023-06-03,11:00 - 12:50,WLH 2001|DI,F,11:00 - 11:50,SOLIS 111"
          }]

console.log(check(classes))

// input is a list of queries (each query represents one class)

function check(classes) {
    // final list of classes after checking for lecture time conflicts
    var final_classes = []

    // checks if there are no class queries in input or exceeds max of 4
    if (classes.length == 0 || classes.length > 4) {
        return "Number of classes more than 4";
    }

    // loop through all classes inputted (based on order)
    for (let i = 0; i < classes.length; i++) {
        
        // adds first class in input into final list
        if (final_classes.length == 0) {
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

        if (cnt == final_classes.length) {
            final_classes.push(classes[i])
        }
        
    }

    // if length of final list not equal to initial list, then one or more classes has a time conflict with a class on this list

    if (final_classes.length != classes.length) {
        return "Added classes: " + final_classes + " not equal to the " +  classes.length + " requested";
    }

    // else return all class objects inputted, no time conflicts
    return "Classes: " + final_classes;
}

//compare days
function compare_day(classinfo1, classinfo2) {
    
    // split class info 
    list1 = classinfo1.split("|");
    list2 = classinfo2.split("|");

    // pull lecture info and split by commas

    info1 = list1[0].split(",");
    info2 = list2[0].split(",");
    
    // if both classes are on the same day/days, compare their lecture times

    if (info1[1][0]== info2[1][0]) {

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

}

// compare time
function  comparetime(classinfo1, classinfo2){

    // split time interval to separate start and end times
    times1 = classinfo1.replace(/\s/g, "").split("-");
    times2 = classinfo2.replace(/\s/g, "").split("-");
    
    //split time chunk into start and end time
    start_time1 = times1[0];
    end_time1 = times1[1];

    start_time2 = times2[0];
    end_time2 = times2[1]
    
    // if start or end times are the same for both classes this is a time conflict, return false

    if (start_time1 == start_time2 || end_time1 == end_time2) {
        console.log("Time conflicts")
        return false;
    }

    // if the start time of class within start and end time of compared class, time conflict, return false

    else if (start_time2 < start_time1 && start_time1 < end_time2) {
        return false;
    }
    
    // no time conflicts, return true

    return true;
}
