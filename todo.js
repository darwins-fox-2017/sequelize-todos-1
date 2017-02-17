'use strict';

//write your code here

const db = require("./models");
let temp = process.argv;
let argv = temp.slice(2);

class Todo {
  static list() {
    db.todos.findAll().then(function(listToDo) {
        for(let i = 0; i < listToDo.length; i++) {
          console.log(` ${i+1}. [${listToDo[i].status}] ${listToDo[i].task_content} `);
        }
    })
  }

  static add() {
    // console.log(argv.slice(1).join(' '))
    db.todos.create({ task_content: `'${argv.slice(1).join(' ')}'`, status: ' '}).then(function(result) {
      console.log(`Task ${argv.slice(1).join(' ')} Added Successfully`);
    })
  }

  static delete() {
    db.todos.findById(argv[1]).then(function(resultFindById) {
      return resultFindById.destroy().then(function(message) {
        console.log(`Deleted Task with id ${argv[1]} from your TODO list!`);
      })
    })
  }

  static complete() {
    db.todos.findById(argv[1]).then(function(resultFindById) {
      return resultFindById.update({ status: 'X'}, {fields: ['status']}).then(function(message) {
        console.log(`${resultFindById.task_content} have been completed`);
      })
    })
  }

  static help() {
    console.log("+++ TO-DO-LIST +++ \n");
    console.log("'babel-node todo.js help' - for help");
    console.log("'babel-node todo.js list' - to show all of to-do list");
    console.log("'babel-node todo.js add <task_content>' - to add new task content");
    console.log("'babel-node todo.js delete <task_id>' - to delete a task");
    console.log("'babel-node todo.js complete <task_id>' - to mark a task as a completed task");
  }
}


switch (argv[0]) {
  case 'list':
    Todo.list()
    break;
  case 'add':
    Todo.add()
    break;
  case 'complete':
    Todo.complete()
    break;
  case 'delete':
    Todo.delete()
    break;
  case 'help':
    Todo.help()
    break;
}
