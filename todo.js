'use strict';

//write your code here
let model = require('./models');

class Todo {
    constructor() {
    }

    addTodo(todoProperties) {
        model.Todos.create({
            title: todoProperties.title,
            description: todoProperties.description,
            status: todoProperties.status
        }).
        then(function() {
            console.log('data inserted');
        }).catch(function(err) {
            console.log('data not valid');
        });

        return {
            status: true,
            title: todoProperties.title
        }
    }

    deleteTodo(id){
      model.Todos.destroy({
        where: {
          id: id }
        })
        .then(function(){
          // console.log(arguments) // { '0': 0 } - why not same as in bulkUpdate?
          console.log(`Task behasil di hapus`);

          return true
        }).catch(function(err){
          console.log(`Gak ketemu tuh sih task dengan id : ${id}`);

        })
    }

    complete(id) {
        model.Todos.update({
            status: 1
        }, {
            where: {
                id: id
            }
        }).then(function(){
          console.log('Data berhasil ke check');
          return true
        }).catch(function(err){
          console.log(err.message);
          return false
        })
    }

    uncomplete(id) {
        model.Todos.update({
            status: 0
        }, {
            where: {
                id: id
            }
        }).then(function(){
          console.log('kenapa di uncheck lagi, sis!');
          return true
        }).catch(function(err){
          console.log(err.message);
          return false
        })
    }

    //
    showList(){
      model.Todos.findAll().then(function(data){
        data.forEach(function(res){
          console.log(`${res.id} [ ${res.status == true ? 'X' : ' '} ] ${res.title} `);
        })
      })
    }
}
//
class Command{
  constructor(){
    this.arguments = process.argv.splice(2, process.argv.length -1)
  }

  main(){
    let todo = new Todo()

    if (this.arguments.length == 0) {
      this.showHelp()
    } else {
      switch (this.arguments[0]) {
        case 'help':
          this.showHelp()
          break;
        case 'add':
          if (this.arguments[1] == undefined) {
            console.log('Nama tugasnya apa, Sis ?. Tambahin setelah add ya!');
          } else {
            let task = []
            for (var i = 1; i < this.arguments.length; i++) {
              task.push(this.arguments[i])
            }

            let todoProperties = {
              title: task.join(' '),
              description: 'Satu dua tiga',
              status: false,
            }

            let resultAdd = todo.addTodo(todoProperties)

            if (resultAdd.status == true) {
              console.log(`Task : ${resultAdd.title} berhasil di tambahkan, Sis! Jangan lupa di kerjain, ya!`);
            } else {
              console.log('Sorry, task kamu gagal dimasukin ke list ): ');
            }
          }
          break
        case 'delete':
          if (this.arguments[1] == undefined) {
            console.log('Task mana yang mau dihapus, Sis ?. Tambahin setelah delete ya!');
          } else {
            todo.deleteTodo(this.arguments[1])
          }
          break
        case 'list':
          console.log('-------- Berikut Todo List kamu ----------');
          todo.showList()
          break
        case 'complete':
          if (this.arguments[1] == undefined) {
            console.log('Task mana yang mau di complete-in, Sis ?. Tambahin setelah complete ya!');
          } else {
            if (todo.complete(this.arguments[1]) == true) {
              console.log(`Task behasil di rubah menjadi Complete, selamat Sista!`);
            } else {
              console.log(`Gak ketemu tuh sih task dengan id : ${this.arguments[1]}`);
            }
          }
          break
        case 'uncomplete':
          if (this.arguments[1] == undefined) {
            console.log('Task mana yang mau di un-complete-in, Sis ?. Tambahin setelah complete ya!');
          } else {
            if (todo.uncomplete(this.arguments[1]) == true) {
              console.log(`Task behasil di rubah menjadi Un-Complete, ada apa Sista?! `);
            } else {
              console.log(`Gak ketemu tuh sih task dengan id : ${this.arguments[1]}`);
            }
          }
          break
        default:

      }
    }
  }

  isNumber(parameterID){
    return /[1-9]/g.test(parameterID)
  }

  showHelp(){
    console.log('----- Ada yang bisa di bantu, Sis ? ----- ');
    console.log(`$ node todo.js help - Jika kamu butuh bantuan`);
    console.log('$ node todo.js list - tampilih semua todo list');
    console.log('$ node todo.js add <task_content> - tambahin todo list');
    console.log('$ node todo.js task <id-todo> - tampilin dengan index ke');
    console.log('$ node todo.js delete <id-todo> - delete todo dengan index ke');
    console.log('$ node todo.js complete <id-todo> - complete task index ke');
    console.log('$ node todo.js uncomplete <id-todo> - batal complete task dengan index ke');
  }
}

//
let command = new Command()
command.main()
// Argument
