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
    return queryInterface.bulkInsert('Tasks', [
      {task: 'Mandi', done: 'Done', createdAt: new Date(), updatedAt: new Date()},
      {task: 'Tidur', done: 'Done', createdAt: new Date(), updatedAt: new Date()},
      {task: 'Makan Siang', done: 'Done', createdAt: new Date(), updatedAt: new Date()},
      {task: 'Gaming', done: 'On Going', createdAt: new Date(), updatedAt: new Date()},
      {task: 'Coding', done: 'No', createdAt: new Date(), updatedAt: new Date()}
    ])
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
