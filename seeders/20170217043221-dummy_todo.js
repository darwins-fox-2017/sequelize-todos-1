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
      task        : 'Programming',
      completed   : false,
      tags        : 'coding',
      completedAt : new Date(),
      createdAt   : new Date(),
      updatedAt   : new Date()
    }, {
      task        : 'Makan',
      completed   : false,
      tags        : 'masak',
      completedAt : new Date(),
      createdAt   : new Date(),
      updatedAt   : new Date()
    }, {
      task        : 'Sarapan',
      completed   : false,
      tags        : 'masak',
      completedAt : new Date(),
      createdAt   : new Date(),
      updatedAt   : new Date()
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
