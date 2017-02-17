"use strict"

import View from "./view"
let db = require("./models")

export default class Todos {
  constructor() {}

  help(){
    View.Menu()
  }

  listTask(){
    db.Todo.findAll().then(function(data){
      data.forEach(function(data){
        data.status == true ? View.taskComplete(data.id, data.taskName):View.taskUncomplete(data.id, data.taskName)
      })
    })
  }

  task(){
    if (argv[3] == undefined) {
      View.undefinedMsg()
    }else {
      db.Todo.findById(argv[3]).then(function(data){
        View.taskView(data.id, data.taskName, data.status)
      }).catch(function(err){
        View.errorMsg(err.message)
      })
    }
  }

  addTask(){
    if (argv[3] === undefined) {
      View.undefinedMsg()
    }else {
      db.Todo.create({
        taskName:(argv.splice(3, argv.length).join(" ")),
        status:false,
        createdAt:new Date(),
        updatedAt:new Date()
      }).then(function(data){
        View.createMsg()
      }).catch(function(err){
        View.errorMsg(err.message)
      })
    }
  }

  completeTask(){
    if (argv[3] === undefined) {
      View.undefinedMsg()
    }else {
      db.Todo.update({
        status:true,
        updatedAt:new Date()
      },{
        where:{
          id:argv[3]
        }
      }).then(function(res){
        View.completeMsg()
      }).catch(function(err){
        View.errorMsg(err.message)
      })
    }
  }

  uncompleteTask(){
    if (argv[3] === undefined) {
      View.undefinedMsg()
    }else {
      db.Todo.update({
        status:false,
        updatedAt:new Date()
      },{
        where:{
          id:argv[3]
        }
      }).then(function(res){
        View.uncompleteMsg()
      }).catch(function(err){
        View.errorMsg(err.message)
      })
    }
  }

  deleteTask(){
    if (argv[3] === undefined) {
      View.undefinedMsg()
    }else {
      db.Todo.destroy({
        where:{
          id:argv[3]
        }
      }).then(function(res){
        View.deleteMsg(res)
      }).catch(function(err){
        View.errorMsg(err.message)
      })
    }
  }
}

let argv = process.argv
