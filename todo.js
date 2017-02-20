'use strict';

//write your code here
const db = require('./models')

let argv = process.argv.splice(2)
console.log(argv);

let help = '$ node todo.js'
if(argv == 'help' || argv == '') {
  console.log(`${help} help`);
  console.log(`${help} list`);
  console.log(`${help} add <task_content>`);
  console.log(`${help} delete <task_id>`);
  console.log(`${help} completed <task_id>`);
  console.log(`${help} uncompleted <task_id>`);
}
var input = argv.splice(1).join(' ')
console.log(input);

if(argv == 'list') {
  db.Todo.findAll().then(function(list) {
    list.forEach(function(data) {
    // for(var i = 0; i < list.length;i++) {
      if(data.completed == true) {
        console.log(`[X] ${data.id}. ${data.task}`);
      } else {
        console.log(`[ ] ${data.id}. ${data.task}`);
      }
    // }
    })
  })
}

if(argv == 'add') {
  db.Todo.create({
    task: input,
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date()
  })
}

if(argv[0] == 'delete') {
  db.Todo.findAll().then(function(data) {
    return data[input-1].destroy().then(function(test){
      console.log(`data deleted`);
    })
  })
}

if (argv[0] == 'completed'){
  db.Todo.findById(input).then(function(todo){
    todo.update({
      completed: true,
      updatedAt: new Date()
    })
    // console.log(todo);
  })
}

if (argv[0] == 'uncompleted'){
  db.Todo.findById(input).then(function(todo){
    todo.update({
      completed: false,
      updatedAt: new Date()
    })
  })
  
}
