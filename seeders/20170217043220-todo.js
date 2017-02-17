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
    return queryInterface.bulkInsert('todos', [{
      task: 'beli macbook',
      status: 'complete',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      task: 'beli iphone',
      status: 'uncomplete',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      task: 'beli motor',
      status: 'ucomplete',
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
