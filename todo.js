'use strict';

const models = require('./models')
//write your code here
const argv = process.argv


const listHelp = () => {
  console.log(`==================================`);
  console.log(`Help Menu`);
  console.log(`==================================`);
  console.log(`$ node todo.js help`);
  console.log(`$ node todo.js list`);
  console.log(`$ node todo.js add <task_content>`);
  console.log(`$ node todo.js delete <task_id>`);
  console.log(`$ node todo.js task <task_id>`);
  console.log(`$ node todo.js complete <task_id>`);
  console.log(`$ node todo.js uncomplete <task_id>`);
  console.log(`===================================`);
}

// ID dalam database available : 6-10
switch (argv[2]) {
  case 'list':
    models.Todo.findAll({// findAll mereturn object
      attributes : ['id','name','status', 'status_updated']
    }).then(function(param){
      param.forEach(function(data){
        console.log(`[ID:${data.id}]${data.status?'[x]':'[ ]'} ${data.name} \nstatus update: ${new Date(`${data.status_updated}`).toLocaleString()}`);
      })
    })
    break;

  case 'delete':

    models.Todo.destroy({
      where: {
        id : argv[3]
      }
    }).then(function(){
      console.log("Data is sucsessfully remove!");
    })

    break;

  case 'task':

    models.Todo.findById(argv[3]).then(function(data){
      console.log(`[ID:${data.id}]${data.status?'[x]':'[ ]'} ${data.name} \nstatus update: ${new Date(`${data.status_updated}`).toLocaleString()}`);
    })

    break;

  case 'complete':

    models.Todo.update(
      {status : true, status_updated : new Date()},
      {where:{id: argv[3]}}
    ).then(function(){
      console.log("Data is sucsessfully updated!");
    })
    break;

  case 'uncomplete':

    models.Todo.update(
      {status : false, status_updated : new Date()},
      {where:{id: argv[3]}}
    ).then(function(){
      console.log("Data is sucsessfully updated!");
    })
    break;

  case 'help':
    listHelp()
    break;

  default:
    console.log(`command is not found, see help!`);
    listHelp()
}
