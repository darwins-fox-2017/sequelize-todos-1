'use strict';
const db = require("./models");
let temp = process.argv;
let argv = temp.slice(2);

class Todo {
  static list() {
    db.Todo.findAll().then(function(result) {
        for(let i = 0; i < result.length; i++) {
          console.log(`${i + 1}. [${result[i].status}] ${result[i].task} `);
        }
    })
  }

  static add() {
    db.Todo.create({ task: `'${argv[1]}'`, status: ' '}).then(function(result) {
      console.log(`task ${argv[1]} berhasil ditambahkan`);
    }).catch(function(errMessage) {
      console.log(`failed to add`);
    })
  }

  static delete() {
    db.Todo.findAll().then(function(resultFindAll) {
      return resultFindAll[argv[1] - 1].destroy().then(function(message) {
          console.log(`Deleted task with id ${argv[1]} from your TODO list...`);
      })
    }).catch(function(errMessage) {
      console.log(`failed, Number ID not found`);
    })
  }

  static completed() {
    db.Todo.findAll().then(function(resultFindAll) {
      return resultFindAll[Number(argv[1] - 1)].update({ status: 'X'}, {fields: ['status']}).then(function(message) {
          console.log(`${resultFindAll[Number(argv[1] - 1)].task} have been completed`);
        })
    }).catch(function(errMessage) {
      console.log(`failed, Number ID not found`);
    })
  }

  static uncompleted() {
    db.Todo.findAll().then(function(resultFindAll) {
      return resultFindAll[Number(argv[1] - 1)].update({ status: ' '}, {fields: ['status']}).then(function(message) {
        console.log(`${resultFindAll[Number(argv[1] - 1)].task} have been uncompleted`);
        })
      }).catch(function(errMessage) {
        console.log(`failed, Number ID not found`);
      })
  }

  static help() {
    console.log(
      `list            => list
       add             => add 'task_name'
       completed task  => completed number_id
       delete task     => delete number_id
       help            => help`
    );
  }
}


switch (argv[0]) {
  case 'list':
    Todo.list()
    break;
  case 'add':
    Todo.add()
    break;
  case 'completed':
    Todo.completed()
    break;
  case 'delete':
    Todo.delete()
    break;
  case 'help':
    Todo.help()
    break;
  case 'uncompleted':
    Todo.uncompleted()
    break;
}
