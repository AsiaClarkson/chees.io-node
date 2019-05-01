const sequelize = require('./../database/sequelize');
const Sequelize = require('sequelize');

module.exports = sequelize.define('cheese',{
    id: {
        field: 'id',
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name:{
        field: 'name',
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
    flavor:{
        field: 'flavor',
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
              args: true,
              msg: 'Flavor is required'
            }
        }
    },
    type_id:{
        field: 'type_id',
        type: Sequelize.INTEGER
    },
    texture_id:{
        field: 'texture_id',
        type: Sequelize.INTEGER
    },
    color_id:{
        field: 'color_id',
        type: Sequelize.INTEGER
    },
    country_id:{
        field: 'country_id',
        type: Sequelize.INTEGER
    },
    image:{
        field: 'image',
        type: Sequelize.STRING
    }
    }, {
        timestamps: false
    });  