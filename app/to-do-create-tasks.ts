
/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
///<reference path="to-do-listing-functions.ts" />



var people = ToDoList.people;
//Home Tasks

var tasks = [];
tasks.push(new ToDoList.HomeTask("Do the dishes.", "High"));
tasks.push(new ToDoList.HomeTask("Buy chocolate.", "Low", people.diane));
tasks.push(new ToDoList.HomeTask("Wash the laundry.", "High"));
tasks[0].markDone();

//Hobby Tasks

tasks.push(new ToDoList.HobbyTask("practice guitar"));
tasks.push(new ToDoList.HobbyTask("Bake a pie."));

//Work Tasks

var today = new Date();
var tomorrow = today;
tomorrow.setDate(today.getDate() + 1);
var nextDay = today;  // create another date object and set it to today's date plus 2.
nextDay.setDate(today.getDate() + 2);

tasks.push(new ToDoList.WorkTask(today, "Update blog.", "High", people.diane));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting.", "Medium", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Save the world.", "High", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Buy a new shirt.", "Low", people.thor));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling.", "Low", people.loki));

console.log(tasks);
var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
console.log("Here are Thor's tasks: ");
for(var task of thorTasks){
  console.log(task);
}
