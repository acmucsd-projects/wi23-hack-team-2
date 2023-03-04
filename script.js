// takes an input of list of classes (represented as strings)

function check(classes) {
    var final_classes = []

    if (classes.length < 1 || classes.length > 4) {
        return "Number of classes more than 4";
    }

    for (let i = 0; i < classes.length; i++) {
        let splitted = classes[i].split(", ");
        let class_name = splitted[0]
        let lec_time = splitted[1].slice(2, splitted[1].length).split("-");
        let disc_time = splitted[2].slice(2, splitted[2].length).split("-");
        let j = 0;
        
        if (final_classes.length == 0) {
            final_classes.push(classes[i]);
            continue;
        }

        for (j = 0; j < final_classes.length; j++) {
            let compared_class = final_classes[j].split(", ")
            let compared_class_name = compared_class[0]
            let compared_lec_time = compared_class[1].slice(2, splitted[1].length).split("-");
            let compared_disc_time = compared_class[2].slice(2, compared_class[2].length).split("-");

            
            if (compared_lec_time[0] <= lec_time[0] && lec_time[0] <= compared_lec_time[1]) {
                console.log("Conflicting lecture times", class_name);
                break;
            }

            if (compared_disc_time[0] <= disc_time[0] && disc_time[0] <= compared_disc_time[1]) {
                console.log("Conflicting discussion times", class_name);
                break;
            }

            if (compared_lec_time[0] <= disc_time[0] && disc_time[0] <= compared_lec_time[1]) {
                console.log("Discussion conflicts with lecture", class_name);
                break;
            }

            if (compared_disc_time[0] <= lec_time[0] && lec_time[0] <= compared_disc_time[1]) {
                console.log("Lecture conflicts with discussion", class_name);
                break;
            }

            if (compared_class_name == class_name) {
                console.log("Already added that class", class_name);
                break;
            }
        }

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

function database_search(class1, classes) {
    let startTime = "";
    let endTime = "";
    let name1 = "";
    let name2 = "";

    if (name1.toLowerCase() == name2.toLowerCase()) {
        return name1 + "already added!";
    }

    /*if (startTime.slice(0,2) == "") {

    }*/
}

console.log(check(["CSE 11, L 2:00p-2:50p, D 8:00a-8:50a", "CSE 12, L 9:00a-9:50a, D 2:00p-2:50p", "CSE 12, L 10:00a-10:50a, D 1:00p-1:50p", "CSE 20, L 12:00p-12:50p, D 5:00p-5:50p"]));