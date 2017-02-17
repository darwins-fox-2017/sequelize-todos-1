'use strict';
let model = require('./models');
//write your code here
class Todo {

    static addlist(detail) {
        model.todo.create({
            mark:0,
            detail: detail
        }).then(function() {
            console.log('data inserted success');
        }).catch(function(err) {
            console.log(err.message);
        })
    }

    static markcomplete(id) {
        model.todo.update({
            mark: 1,
            doneAt: new Date()
        }, {
            where: {
                id: id
            }
        }).then(function() {
            console.log('mark uncomplete success');
        }).catch(function(err) {
            console.log(err.massage);
        })
    }

    static markuncomplete(id) {
        model.todo.update({
            mark: 0,
            doneAt: null
        }, {
            where: {
                id: id
            }
        }).then(function() {
            console.log('mark uncomplete success');
        }).catch(function(err) {
            console.log(err.massage);
        })
    }

    static deletetask(id) {
        model.todo.destroy({
            where: {
                id: id
            }
        }).then(function() {
            console.log('delete task success');
        }).catch(function(err) {
            console.log(err.massage);
        });
    }

    static listtask() {
        model.todo.findAll().then(function(datas) {
            datas.forEach(function(data) {
                let mark = '[ ]';
                if (data.mark == 1) {
                    mark = '[x]';
                }
                console.log(`${data.id} ${mark} ${data.detail}`);
            })
        }).catch(function(err) {
            console.log(err.massage);
        });
    }

    static help() {
        console.log('------menu-------');
        console.log('node todo.js = menapilkan menu yang ada (help)');
        console.log('node todo.js help = menapilkan menu yang ada (help)');
        console.log('node todo.js list = menapilkan list task');
        console.log('node todo.js add task baru= menambahkan "task baru" kedalam list task');
        console.log('node todo.js delete i = menghapus task ke i didalam list');
        console.log('node todo.js markcomplete i = memberi tanda done pada task ke i ');
        console.log('node todo.js markuncomplete i = menghapus tanda done pada task ke i ');
        console.log('');
    }
    static getStringFromArgv(argument){
      let string=[]
      for (var i = 3; i < argument.length; i++) {
        string.push(argument[i]);
      }
      return string.join(' ');
    }


}

let argv = process.argv;

if (argv.length < 3) {
    Todo.help();
} else {
    switch (argv[2].toLowerCase()) {
        case 'help':
          Todo.help();

            break;

        case 'list':
           Todo.listtask();
            break;

        case 'add':
           let detail = Todo.getStringFromArgv(argv);
           console.log(detail);
           Todo.addlist(detail);
            break;

        case 'delete':
           Todo.deletetask(argv[3])
            break;

        case 'markcomplete':
           Todo.markcomplete(argv[3])
            break;

        case 'markuncomplete':
            Todo.markuncomplete(argv[3])
            break;

        default:

    }




}
