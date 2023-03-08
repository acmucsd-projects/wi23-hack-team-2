// takes an input of list of classes (represented as strings)

function check(classes) {
    var final_classes = []

    if (classes.length < 1 || classes.length > 4) {
        return "Number of classes more than 4";
    }

    for (let i = 0; i < classes.length; i++) {
        j = database_search(classes[i], final_classes)

        if (j == final_classes.length) {
            final_classes.push(classes[i])
        }
    }

    if (final_classes.length != classes.length) {
        return "Added classes: " + final_classes + " not equal to the " +  classes.length + " requested";
    }

    return "Classes: " + final_classes;
}


//function to run the for loop

function iterate(final_classes){
    class
}

//compare day
function compare_day(classinfo1, classinfo2) {
    list1 = classinfo1.split(",");
    list2 = classinfo2.split(",");

    days1 = list1[1];
    days2 = list2[1];

    if (days1[0]!= days2[0]) {
        comparetime(classinfo1, classinfo2)
    }


}

// compare time
function  comparetime(classinfo1, classinfo2){

    no_conflicts = []

    list1 = classinfo1.split(",");
    list2 = classinfo2.split(",");

    time1 = list1[2];
    time2 = list2[2];

    //split time chunk into start and end time
    x = time1.split("-");

    start_time1 = x[0];
    end_time1 = x[1];

    y = time2.split("-");

    start_time2 = y[0];
    end_time2 = y[1];

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


    if (class1_start != class2_start) {
        
    }

}

console.log(check(["CSE 11", "CSE 12", "CSE 12", "CSE 20"]));


time = "2:00";

x = time[0]+"."+time[2]
x = Number(x);
console.log(x);



start1= 3
start2 = 2

if (start2 > start1 + 0.5 || start2 < start1 - 0.9){
    no_conflicts.push

}
    