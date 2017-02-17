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
    return queryInterface.bulkInsert('todos',
    [
      { activity: 'Baking cake', status: 0, createdAt:new Date(), updatedAt:new Date()},
      { activity: 'Robb the bank',status: 0, createdAt:new Date(), updatedAt:new Date()},
      { activity: 'Kill John Wick (LOL!!)', status: 0, createdAt:new Date(), updatedAt:new Date()},
      { activity: 'Sleep All day long', status: 0, createdAt:new Date(), updatedAt:new Date()}
  ]);
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
