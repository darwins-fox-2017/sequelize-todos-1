'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Todos', [{
      task: 'Sarapan pagi',
      status: '0',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      task: 'Makan siang',
      status: '0',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      task: 'Makan malam',
      status: '0',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      task: 'Coding',
      status: '0',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
