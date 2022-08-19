const TODOlist = {
    "Check lil sister": "In Progress",
    "Call to Mom": "Done",
    "Write a post": "To Do"
};

function changeStatus(task, status) {
    TODOlist[task] = status;
};

function addTask(task) {
    TODOlist[task] = "To Do";
};

function deleteTask(task) {
    delete TODOlist[task];
};

function showList() {
    const result = {};
    for (key in TODOlist) {
        const value = TODOlist[key];
        if (result.hasOwnProperty(value)) {
            result[value] = [value, key];
        } else result[value] = key;
    };
    console.log(JSON.stringify(result, null, 4));
};

changeStatus("Write a post", "In Progress");
addTask("Have a walk");
addTask("Buy new phone");
changeStatus("Buy new phone", "Done");
deleteTask("Call to Mom");
showList()