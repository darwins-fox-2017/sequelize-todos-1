'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('todos','created_at',Sequelize.DATE)
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('todos','created_at')
  }
};
