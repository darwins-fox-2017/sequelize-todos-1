"use strict"

export default class View {
  constructor() {}

  static Menu(){
    let listMenu = ["----------------------","  --will call help--","----------------------",
                    "babel-node todo.js help","babel-node todo.js list",
                    "babel-node todo.js add <task_content>","babel-node todo.js task <task_id>",
                    "babel-node todo.js delete <task_id>", "babel-node todo.js complete <task_id>",
                    "babel-node todo.js uncomplete <task_id>"];

    for (let i = 0; i < listMenu.length; i++) {
      console.log(listMenu[i]);
    }
  }
  static taskView(id, taskName, status){
    console.log(`\nID : ${id}\nTask : ${taskName}\nStatus Complete : ${status}`);
  }
  static taskComplete(id, taskName){
    console.log(`[X] ${id}. ${taskName}`);
  }
  static taskUncomplete(id, taskName){
    console.log(`[ ] ${id}. ${taskName}`);
  }
  static createMsg(){
    console.log(`Create has ben succsess!`);
  }
  static deleteMsg(res){
    console.log(`Task has ben deleted ${res}`);
  }
  static completeMsg(){
    console.log(`Task is complete!`);
  }
  static uncompleteMsg(){
    console.log(`Task is uncomplete!`);
  }
  static undefinedMsg(){
    console.log(`Write to something!`);
  }
  static errorMsg(err){
    console.log(err);
  }
}
