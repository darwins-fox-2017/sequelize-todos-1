'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Todos",[
      {
        taskName:"Learning ExpressJS",
        status:0,
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        taskName:"Learning Sequelize",
        status:0,
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        taskName:"Learning Sqlite3",
        status:0,
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        taskName:"Learning Javascripts",
        status:0,
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Todos", null,{})
  }
};
