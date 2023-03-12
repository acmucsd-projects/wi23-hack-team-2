// takes an input of list of classes (represented as strings)

test = ["CSE 11,LE,TuTh,12:00-13:20,MAND B-150", "CSE 12,LE,MWF,14:00-14:50,HSS 2150"]

console.log(check(test))

function check(classes) {
    var final_classes = []

    if (classes.length < 1 || classes.length > 4) {
        return "Number of classes more than 4";
    }

    for (let i = 0; i < classes.length; i++) {

        if (final_classes.length == 0) {
            final_classes.push(classes[i])
            continue
        }

        let cnt = 0

        for (let j = 0; j < final_classes.length; j++) {
            if (!compare_day(classes[i], final_classes[j])) {
                break;
            }

            cnt += 1
        }

        if (cnt == final_classes.length) {
            final_classes.push(classes[i])
        }
    }

    if (final_classes.length != classes.length) {
        return "Added classes: " + final_classes + " not equal to the " +  classes.length + " requested";
    }

    return "Classes: " + final_classes;
}


//function to run the for loop

//compare day
function compare_day(classinfo1, classinfo2) {
    list1 = classinfo1.split(",");
    list2 = classinfo2.split(",");

    days1 = list1[2];
    days2 = list2[2];

    if (days1[0]!= days2[0]) {
        if (comparetime(classinfo1, classinfo2)) {
            return true;
        }
    }

    return false;

}

// compare time
function  comparetime(classinfo1, classinfo2){

    no_conflicts = []

    list1 = classinfo1.split(",");
    list2 = classinfo2.split(",");

    times1 = list1[3].split("-");
    times2 = list2[3].split("-");

    //split time chunk into start and end time
    start_time1 = times1[0];
    end_time1 = times1[1];

    start_time2 = times2[0];
    end_time2 = times2[1]
    console.log(times1, times2)

    if (start_time1 == start_time2 || end_time1 == end_time2) {
        console.log("Time conflicts")
        return false;
    }

    else if (start_time1 < start_time2 && start_time2 < end_time1) {
        return false;
    }

    /*

    2:00 - 2:50
    2:30 - 3:20

    */
    //convert start time to int
    temp_start_time1 = start_time1[0]+"."+start_time1[2];
    class1_start = Number(temp_start_time1);

    temp_start_time2 = start_time2[0]+"."+start_time2[2];
    class2_start = Number(temp_start_time2);
    
    //convert end time to int
    temp_end_time1 = end_time1[0]+"."+end_time1[2];
    class1_end = Number(temp_end_time1);

    temp_end_time2 = end_time2[0]+"."+end_time2[2];
    class2_end = Number(temp_end_time2);

    /*
    if (class1_start != class2_start) {
        
    */
    return true;
}

/*

start1= 3
start2 = 2

if (start2 > start1 + 0.5 || start2 < start1 - 0.9){
    no_conflicts.push()

}
  */  
