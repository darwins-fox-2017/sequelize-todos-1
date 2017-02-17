'use strict';
const db = require("./models");
let temp = process.argv;
let argv = temp.slice(2);

class Todo {
  static list() {
    db.Todo.findAll().then(function(result) {
        for(let i = 0; i < result.length; i++) {
          console.log(`${i + 1}. Id Number: ${result[i].id} [${result[i].status}] ${result[i].task} `);
        }
    })
  }

  static add() {
    db.Todo.create({ task: `'${argv[1]}'`, status: ' '}).then(function(result) {
      console.log(`task ${argv[1]} berhasil ditambahkan`);
    })
  }

  static delete() {
    db.Todo.findById(argv[1]).then(function(resultFindById) {
      return resultFindById.destroy().then(function(message) {
        console.log(`Deleted task with id ${argv[1]} from your TODO list...`);
      })
    })
  }

  static completed() {
    db.Todo.findById(argv[1]).then(function(resultFindById) {
      return resultFindById.update({ status: 'X'}, {fields: ['status']}).then(function(message) {
        console.log(`${resultFindById.task} have been completed`);
      })
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
}
