'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
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
            title: 'Code the Web',
            description: 'make the great again!',
            status: 0,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            title: 'Gowes to campus',
            description: 'life healty',
            status: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            title: 'Pray more!',
            description: 'Surrender',
            status: 0,
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    down: function(queryInterface, Sequelize) {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */
        return queryInterface.bulkDelete('Todos', null, {});
    }
};
