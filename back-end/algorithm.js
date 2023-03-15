// takes an input of list of classes (represented as queries)

// this list for testing purposes
bigarray = [[
    {
      "_id": "64081cae1ddeb825edc88054",
      "subj_course_id": "AAS 10",
      "sec_code": "A01",
      "sec_id": "121703",
      "instructor": "Butler, Elizabeth Annette",
      "total_seats": "34",
      "meetings": "LE,TuTh,14:00 - 15:20,MANDE B-150|FI,2023-06-13,15:00 - 17:59,MANDE B-150|DI,M,15:00 - 15:50,CENTR 217A"
    },
    {
      "_id": "64081cae1ddeb825edc88055",
      "subj_course_id": "AAS 10",
      "sec_code": "A02",
      "sec_id": "121704",
      "instructor": "Butler, Elizabeth Annette",
      "total_seats": "34",
      "meetings": "LE,TuTh,14:00 - 15:20,MANDE B-150|FI,2023-06-13,15:00 - 17:59,MANDE B-150|DI,W,16:00 - 16:50,HSS 2150"
    }
  ],
  [
    {
      "_id": "64081caf1ddeb825edc889fa",
      "subj_course_id": "CSE 12",
      "sec_code": "A01",
      "sec_id": "135617",
      "instructor": "Cao, Yingjun",
      "total_seats": "200",
      "meetings": "LE,TuTh,9:30 - 10:50,SOLIS 107|FI,2023-06-13,8:00 - 10:59,SOLIS 107|DI,W,16:00 - 16:50,PETER 110"
    },
    /*{
      "_id": "64081caf1ddeb825edc889fb",
      "subj_course_id": "CSE 12",
      "sec_code": "B01",
      "sec_id": "174883",
      "instructor": "Miranda, Gregory Joseph",
      "total_seats": "150",
      "meetings": "LE,MWF,8:00 - 8:50,CENTR 101|FI,2023-06-16,8:00 - 10:59,CENTR 101|DI,W,20:00 - 20:50,SOLIS 107"
    }*/
  ],
  [
    {
      "_id": "64081caf1ddeb825edc88a09",
      "subj_course_id": "CSE 30",
      "sec_code": "A01",
      "sec_id": "161576",
      "instructor": "Porter, Leonard Emerson",
      "total_seats": "150",
      "meetings": "LE,TuTh,11:00 - 12:20,CENTR 115|FI,2023-06-10,11:30 - 14:29,CENTR 119|MI,2023-05-04,20:00 - 21:50,CENTR 119|DI,F,9:00 - 9:50,CENTR 115"
    },
    /*{
      "_id": "64081caf1ddeb825edc88a0a",
      "subj_course_id": "CSE 30",
      "sec_code": "B01",
      "sec_id": "161577",
      "instructor": "Porter, Leonard Emerson",
      "total_seats": "150",
      "meetings": "LE,TuTh,12:30 - 13:50,CENTR 115|FI,2023-06-10,11:30 - 14:29,CENTR 115|MI,2023-05-04,20:00 - 21:50,PCYNH 106|DI,F,11:00 - 11:50,CENTR 115"
    },
    {
      "_id": "64081caf1ddeb825edc88a0b",
      "subj_course_id": "CSE 30",
      "sec_code": "C01",
      "sec_id": "161584",
      "instructor": "Chin, Bryan W.",
      "total_seats": "150",
      "meetings": "LE,TuTh,9:30 - 10:50,CENTR 115|FI,2023-06-10,11:30 - 14:29,CENTR 101|MI,2023-05-04,20:00 - 21:50,PCYNH 109|DI,F,12:00 - 12:50,CENTR 115"
    }*/
  ],
  [
    {
      "_id": "64081caf1ddeb825edc889f9",
      "subj_course_id": "CSE 11",
      "sec_code": "A01",
      "sec_id": "135615",
      "instructor": "Cao, Yingjun",
      "total_seats": "100",
      "meetings": "LE,TuTh,8:00 - 9:20,SOLIS 104|FI,2023-06-15,8:00 - 10:59,SOLIS 104|DI,W,9:00 - 9:50,CENTR 212"
    }
  ]

]
// classnarray has all the possible time slots for a certain class
function courseCombos(bigarray) {
    var combosthatwork = []
    if (bigarray.length ==1){
        return "Insert more classes to build a schedule"
    }else if (bigarray.length == 2){
        for (let i = 0; i < bigarray[0].length; i++) {
            for (let j = 0; j < bigarray[1].length; j++) {
                        var classcombo = [bigarray[0][i], bigarray[1][j]];
                        if (check(classcombo)==true) {
                            // if check returns true, add to combosthatwork
                            combosthatwork.push(classcombo)
                        }
                    }
                }

    }else if (bigarray.length == 3){
        for (let i = 0; i < bigarray[0].length; i++) {
            for (let j = 0; j < bigarray[1].length; j++) {
                for (let k = 0; k < bigarray[2].length; k++) {
                        var classcombo = [bigarray[0][i], bigarray[1][j], bigarray[2][k]];
                        if (check(classcombo)==true) {
                            // if check returns true, add to combosthatwork
                            combosthatwork.push(classcombo)
                        }
                    }
                }
            }

    }else if(bigarray.length == 4)
    // for loop for each class array
    for (let i = 0; i < bigarray[0].length; i++) {
        for (let j = 0; j < bigarray[1].length; j++) {
            for (let k = 0; k < bigarray[2].length; k++) {
                for (let l = 0; l < bigarray[3].length; l++) {
                    var classcombo = [bigarray[0][i], bigarray[1][j], bigarray[2][k], bigarray[3][l]];
                    if (check(classcombo)==true) {
                        // if check returns true, add to combosthatwork
                        combosthatwork.push(classcombo)
                    }
                }
            }
        }
    }

    if (combosthatwork.length == 0) {
        combosthatwork[0] = "no possible schedules"
        // some empty schedule that has a single class that says "no possible "
    }
    return combosthatwork[0]

}

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
        return false;
    }else{
        return true
    }

    // else return all class objects inputted, no time conflicts
    return final_classes;
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
        //console.log("Time conflicts")
        return false;
    }

    // if the start time of class within start and end time of compared class, time conflict, return false

    else if (start_time2 < start_time1 && start_time1 < end_time2) {
        return false;
    }
    
    // no time conflicts, return true

    return true;
}

console.log(courseCombos(bigarray))