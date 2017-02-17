'use strict';

let Model = require ('./models')

class jsTODO {
  constructor() {
    this.data = JSON.parse(obj)
    this.content = ""
  }

  execute(command, content) {
    this.content = content

    switch(command) {
      case "help" :
        this.help()
        break

      case "list" :
        this.list()
        break

      case "add" :
        this.add(this.content.slice(1).join(' '))
        break

      case "delete" :
        this.delete(this.content.slice(1).join(' '))
        break

      case "complete" :
        this.complete(this.content.slice(1).join(' '))
        break

      case "uncomplete" :
        this.uncomplete(this.content.slice(1).join(' '))
        break

      case "list:completed" :
        this.listCompleted(this.content.slice(1).join(' '))
        break

      default:
        this.help()
        break
    }
  }

  writeToFile() {
    fs.writeFileSync('data.json', JSON.stringify(this.data,null,3))
  }

  help() {
    console.log("============================================================")
    console.log("Help - /")
    console.log("node todo.js - Help content")
    console.log("node todo.js help - Help content")
    console.log("node todo.js list - Show todo list")
    console.log("node todo.js add <task_content> - Add element to do")
    console.log("node todo.js delete <task_id> - Delete todo list by id");
    console.log("node todo.js complete <task_id> - Complete todo list by id")
    console.log("node todo.js uncomplete <task_id> - uncomplete todo list by id")
    console.log("============================================================")
  }

  header() {
    console.log(`=================================================================================================`);
    console.log(`===================================== TODO List App v1.0 ========================================`);
    console.log(`=================================================================================================`);
  }

  list() {
    this.header()
    Model.todo.getAllData(function(listActivity) {
      let count = 1;
      listActivity.forEach(function(activity) {
        let status = (activity.status === 1) ? 'X' : ' '
        console.log(`${count}. [${status}] ${activity.activity} (id: ${activity.id})`);
        count++;
      })
    })
  }

  delete(content) {
    Model.todo.destroy({ where: { id: [`${content}`] }}).then(function(rowDeleted){
    // rowDeleted will return number of rows deleted
      if(rowDeleted === 1){
         console.log('Deleted list successfully');
       }
    }, function(err){
        console.log(err);
    });
  }

  complete(content) {
    Model.todo.update({'status': 1}, {'where': {id: `${content}`}}).then(function() {
      console.log('Your task has been completed')
    })
  }

  uncomplete(content) {
    Model.todo.update({'status': 0}, {'where': {id: `${content}`}}).then(function() {
      console.log('Your task has been uncompleted')
    })
  }
}

// Parsing data from json file
let fs = require('fs')
var obj = fs.readFileSync("data.json", "utf-8")

// create new Object
let todo = new jsTODO()
let args = process.argv
let contentTask = args.slice(2)
todo.execute(args[2], contentTask)
