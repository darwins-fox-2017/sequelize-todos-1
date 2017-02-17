'use strict';
module.exports = function(sequelize, DataTypes) {
  var todo = sequelize.define('todo', {
    activity: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(result) {
        let newArr = []
        todo.findAll().then(function(listActivity) {
          listActivity.forEach(function(activity) {
            let obj = {}
            obj['id'] = activity.id
            obj['activity'] = activity.activity
            obj['status'] = activity.status
            obj['createdAt'] = activity.createdAt
            obj['updatedAt'] = activity.upadatedAt
            newArr.push(obj)
          })
          result(newArr)
        })
      }
    }
  });
  return todo;
};
