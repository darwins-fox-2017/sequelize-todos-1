'use strict';

//write your code here
const fs = require('fs')
const db = require('./models/')
let argv = process.argv
let proArg = process.argv.splice(3, argv.length).join(" ")
let node = "=> node todo.js"
let menu = (` ${node} add <task content> \n ${node} list \n ${node} help \n ${node} delete <task_id> \n ${node} complete <task_id> \n ${node} uncomplete <task_id \n ${node} task <task_id>`);

switch(argv[2]) {
  case "add":
    db.Todo.create({
      task: proArg ,
      status: '0',
      updatedAt : new Date()
    })
  break

  case "list":
    db.Todo.findAll().then(function (todo){
      todo.forEach(function (todo) {
        console.log(`${todo.id}. ${(todo.status == '1')?"[x]":"[ ]"} ${todo.task}`)
      })
    })
  break
  // case "list":
  //   db.Todo.findAll().then(function (todo){
  //     todo.forEach(function (todo) {
  //       console.log(`${todo.id}. ${(todo.status == '1'){return '[x]'}else{return '[ ]'} ${todo.task}`)
  //     })
  //   })
  // break
  case "delete":
    db.Todo.find({
      where:{
        id: proArg
      }
    }).then(function(result) {
      result.destroy()
    })
  break

  case "complete":
    db.Todo.findById(proArg).then(function (todo){
      if(todo.status === '0'){
          todo.updateAttributes({
            status: '1'
          })
      }
    })
    break;
    case "uncomplete":
      db.Todo.findById(proArg).then(function (todo){
        if(todo.status === '1'){
            todo.updateAttributes({
              status: '0'
            })
        }
      }).catch(function(err){
        console.log("Jelek Lu");
      })
      break
  default:
  console.log(menu);
  break
}
