const sequelize = require('./../database/sequelize');
const Sequelize = require('sequelize');

module.exports = sequelize.define('dish',{
    id: {
        field: 'id',
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    dish_name:{
        field: 'dish_name',
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
              args: true,
              msg: 'Name is required'
            },
            isAlpha: {
              args: true,
              msg: 'Name must only contain letters'
            },
            len: {
              args: [2, 20],
              msg: 'Name must be between 2 and 20 characters'
            }
          }
    },
    description:{
        field: 'description',
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
              args: true,
              msg: 'Description is required'
            }
        }
    },
    dish_image:{
        field: 'dish_image',
        type: Sequelize.STRING
    }
    }, {
        timestamps: false
    });  