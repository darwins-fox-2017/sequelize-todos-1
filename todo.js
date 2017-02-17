'use strict';

//write your code here
var db = require('./models/')

// Model.Todo.findAll({
//   attributes: ['task', 'completed', 'completedAt']
// }).then(function(data){
//   data.forEach(function(item) {
//     // console.log(item.getFullName());
//   })
//   // console.log(Murid);
//   // --
// })


//const repl = require('repl');
class Todo {
  constructor(command) {
    this.command = command
  }

  help() {
    switch(this.command[2]) {
			case "help" :
				console.log("$===================================$")
				console.log("$ node todo.js # will can help")
				console.log("$ node todo.js help")
				console.log("$ node todo.js list")
				console.log("$ node todo.js add <task_content>")
				console.log("$ node todo.js task <task_id>")
				console.log("$ node todo.js delete <task_id>")
				console.log("$ node todo.js complete <task_id>")
				console.log("$ node todo.js uncomplete <task_id>")
        console.log("$==================================$")
				break;
			case "list" :
				this.listData()
				break;
			case "add" :
				this.addData()
				break;
			case "task" :
				this.task()
				break;
			case "delete" :
				this.delete()
				break;
			case "completed" :
				this.completed()
				break;
			case "uncompleted" :
				this.uncompleted()
				break;

		}

  }

  listData() {
		console.log("================ Cek list data ================")
		 db.Todo.findAll().then(function (todo){
     todo.forEach(function (todo) {
       if(todo.completed) {
         console.log(`[X] ${todo.id}. ${todo.task}`)
       } else {
        console.log(`[ ] ${todo.id}. ${todo.task}`)
       }
     })
   })
	}

  addData() {
    console.log("================ Add data ================")
    db.Todo.create({
      task : (this.command[3]),
      completed : 0,
      createdAt : new Date(),
      updatedAt : new Date()
    })
    console.log(`${this.command[3]} berhasil di tambahkan!`);
  }

  delete() {
		db.Todo.destroy({
    where:  {
        // criteria
        id: this.command[3]
    }
    }).then(function(rowDeleted) {
      if(rowDeleted === 1) {
        console.log('Data Berhasil dihapus !');
      }
    }, function(err) {
      console.log(err);
    })
	}

  completed() {
  
    db.Todo.update({'completed': 1}, {'where': {id: `${this.command[3]}`}}).then(function() {
      console.log('Data Completed');
    })
  }

  uncompleted() {
    db.Todo.update({'completed': 0}, {'where': {id: `${this.command[3]}`}}).then(function() {
      console.log('Data uncompleted');
    })
  }

}
let todo_test = process.argv;
let command = todo_test.slice(2).join('')
let start = new Todo(todo_test);
start.help()
