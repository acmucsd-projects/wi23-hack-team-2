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

// retrieve lecture and discussion times in this function

function database_search(class1, final_classes) {
    
    if (final_classes.length == 0) {
        final_classes.push(class1);
        return;
    }

    for (let i = 0; i < final_classes.length; i++) {
        if (class1 == final_classes[i]) {
            console.log("Already added that class", class1);
            return;
        }
    }

    final_classes.push(class1)
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
    list1 = classinfo1.split(",");
    list2 = classinfo2.split(",");


}

console.log(check(["CSE 11", "CSE 12", "CSE 12", "CSE 20"]));


time = "2:00";

x = time[0]+"."+time[2]

console.log(x);

sdsds