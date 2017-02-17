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
      task: 'makan',
      status: '',
      tag: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task: 'minum',
      status: '',
      tag: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task: 'duduk',
      status: '',
      tag: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task: 'lari',
      status: '',
      tag: '',
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
