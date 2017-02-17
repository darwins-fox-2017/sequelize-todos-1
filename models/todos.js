'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todos = sequelize.define('Todos', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(callback) {
            var result = []
            Todos.findAll().then(function(hasil) {
                hasil.forEach(function(output) {
                    let hasil = {};
                    hasil['title'] = output.title
                    hasil['description'] = output.description
                    hasil['status'] = output.status
                    result.push(hasil);
                    //console.log(output);
                })
                callback(result);
            })
        }
    }
  });
  return Todos;
};
