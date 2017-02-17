'use strict';

import Todos from "./controller"

let argv     = process.argv
let todo = new Todos ()

switch (argv[2]) {
  case "help":
    todo.help()
    break;
  case "list":
    todo.listTask()
    break;
  case "add":
    todo.addTask()
    break;
  case "complete":
    todo.completeTask()
    break;
  case "uncomplete":
    todo.uncompleteTask()
    break;
  case "delete":
    todo.deleteTask()
    break;
  case "task":
    todo.task()
    break;
  default:
  todo.help()
  break;
}
