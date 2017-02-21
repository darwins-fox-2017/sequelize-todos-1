'use strict';
let db = require("./models")
//write your code here

let arg = process.argv

let addTask = (task) => {
  db.Tasks.create({task: task, done: "No", createdAt: new Date(), updatedAt: new Date()})
}

let listTask = () => {
  db.Tasks.findAll().then(function(tasks) {
    tasks.forEach(function(task) {
      if(task.done == 'Done')
        console.log(`${task.id}. [x] ${task.task}`)
      else
        console.log(`${task.id}. [ ] ${task.task}`)
    })
  })

}
let deleteTask = (idTask) => {
  db.Tasks.destroy({where: { id: idTask }})
}

let completeTask = (idTask) => {
  db.Tasks.update({done: 'Done', updatedAt: new Date()}, {where: {id: idTask}})
}

switch(arg[2]) {
  case("add"):
    if(arg[3])
      addTask(arg[3])
    else
      console.log("Please define task name")
    break;
  case("list"):
    listTask()
    break;
  case("delete"):
    if(arg[3])
      deleteTask(arg[3])
    else
      console.log("Please define task id");
    break;
  case("complete"):
    if(arg[3])
      completeTask(arg[3])
    else
    console.log("Please define completed task id");
    break;
  default:
    console.log("Please input proper command")
}
