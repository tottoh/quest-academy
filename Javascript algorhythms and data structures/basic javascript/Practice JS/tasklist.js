
var taskList = ["Math Homework", "Science Project", "English Essay"];

function displayTasks() {
    console.log("Tasks List:");
    if (taskList.length === 0) {
        console.log("No tasks to display");
    }
    if (taskList.length >= 1) {
        console.log(`1. ${taskList[0]}`);
    }
    if (taskList.length >= 2) {
        console.log(`2. ${taskList[1]}`);
    }
    if (taskList.length >= 3) {
        console.log(`3. ${taskList[2]}`);
    }
    if (taskList.length >= 4) {
        console.log(`4. ${taskList[3]}`);
    }
    if (taskList.length >= 5) {
        console.log(`5. ${taskList[4]}`);
    }
console.log("Total tasks:", taskList.length);
}

 

function addTask(subject) {
    taskList.push(subject);
    console.log(`Added new task: ${subject}`)
}




function removeTask(subject){
    let removedSubject =  taskList.shift([0]);
    console.log(`Removed task: ${removedSubject}`)}
displayTasks(); 
addTask("coding");
displayTasks(); 
removeTask();
displayTasks();

/*
tasklist.length
console.log(tasklist);

if (){
    console.log(tasklist;)
}
if () {
    console.log(1. Math Homework)
}

Tasks List:
1. Math Homework
2. Science Project
3. English Essay
Total tasks: 3
Added new task: History Assignment
Tasks List:
1. Math Homework
2. Science Project
3. English Essay
4. History Assignment
Total tasks: 4
Removed task: Math Homework
Tasks List:
1. Science Project
2. English Essay
3. History Assignment
Total tasks: 3
*/
