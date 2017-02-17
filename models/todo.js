'use strict';


module.exports = function(sequelize, DataTypes) {
  var todo = sequelize.define('todo', {
    task: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return todo;
};