'use strict';
module.exports = function(sequelize, DataTypes) {
  var todo = sequelize.define('todo', {
    mark:{
      type:DataTypes.INTEGER,
      validate:{
        isIn:[[0,1]]
      }
    },
    detail: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return todo;
};
