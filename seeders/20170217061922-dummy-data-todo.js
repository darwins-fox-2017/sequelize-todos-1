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
    return queryInterface.bulkInsert('Todos', [
      {
        name: 'Belanja',
        status: false,
        status_updated: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cuci baju',
        status: false,
        status_updated: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Makan malam',
        status: false,
        status_updated: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Berenang',
        status: false,
        status_updated: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tugas pair project',
        status: false,
        status_updated: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ]);
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Todos', null, {});
  }
};
