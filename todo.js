'use strict';
let db = require('./models');
let argv = process.argv
let value = process.argv.splice(3, argv.length).join(" ")

let menu = `
$ {node todo.js} add <task content>
$ {node todo.js} list
$ {node todo.js} help
$ {node todo.js} delete <task_id>
$ {node todo.js} complete <task_id>
$ {node todo.js} uncomplete <task_id> 
$ {node todo.js} task <task_id>
`

switch (argv[2]) {

    case "list":
        db.todo.findAll().then(function(res) {
            res.forEach(function(todo) {
                console.log(`${todo.id}. ${(todo.status == 'complete')?"[x]":"[ ]"} ${todo.task}`)
            })
        })
        break;

    case "complete":
        db.todo.findById(value).then(function(res) {
            res.status = 'complete'
            // console.log(res.status)
        })
        break;

    case "complete":
        db.todo.findById(value).then(function(res) {
            res.status = 'uncomplete'
            console.log(res.status)
        })
        break;

    case "add":
        db.todo.create({
            task: value,
            status: 'uncomplete',
            createdAt: new Date(),
            updatedAt: new Date()
        })
        break;

    case "delete":
        db.todo.find({
            where: {
                id: value
            }
        }).then(function(result) {
            result.destroy()
        })
        break;

    case "task":
        db.todo.findById(value).then(function(res) {
            console.log(res.task)
        })
        break;

    case "help":
        console.log(menu);
        break;


    default:
        console.log(menu);
        break;
}