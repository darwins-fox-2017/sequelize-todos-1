'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('todos','doneAt',Sequelize.DATE)
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('todos','doneAt')
  }
};
