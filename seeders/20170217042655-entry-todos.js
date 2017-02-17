'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Todos', [{
      task_content: 'Belajar sequelize todos-1',
      status: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task_content: 'Belajar sequelize todos-2',
      status: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task_content: 'Belajar sequelize todos-3',
      status: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task_content: 'Belajar sequelize todos-4',
      status: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
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
