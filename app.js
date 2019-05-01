const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const app = express();
const Cheese = require('./models/cheese');
const Dish = require('./models/dish');
const sequelize = new Sequelize('sqlite:database.sqlite');

app.use(bodyParser.json());

Cheese.belongsToMany(Dish, {
    through: 'cheese_dish',
    foreignKey: 'cheese_id',
    timestamps: false
  });
  
Dish.belongsToMany(Cheese, {
    through: 'cheese_dish',
    foreignKey: 'dish_id',
    timestamps: false
  });

app.get('/api/cheeses', function (request, response) {

    Cheese.findAll().then((cheeses) => {
        response.json(cheeses);
    });
});

app.get('/api/cheeses/:id', function (request, response) {
    let {
        id
    } = request.params;

    Cheese.findByPk(id).then((cheese) => {
        if (cheese) {
            response.json(cheese);
        } else {
            response.status(404).send();
        }
    });
});

app.post('/api/cheeses', function (request, response) {
    Cheese.create({
        name: request.body.name,
        flavor: request.body.flavor

    }).then((cheese) => {
        response.json(cheese);
    }, (validation) => {
        response.status(422).json({
            errors: validation.errors.map((error) => {
                return {
                    attribute: error.path,
                    message: error.message
                };
            })
        });
    });
});

app.patch('/api/cheeses/:id', function (request, response) {
    let {
        id
    } = request.params;
    Cheese.findByPk(id).then((cheese) => {
            if (cheese) {
                return cheese.update({
                    name: request.body.name,
                    flavor: request.body.flavor,
                    type_id: request.body.type_id,
                    texture_id: request.body.texture_id,
                    color_id: request.body.color_id,
                    country_id: request.body.country_id,
                    image: request.body.image
                });
            }
            if (!cheese) {
                response.status(404).send();
                return Promise.reject();

            }

        })
        .then((cheese) => {
            response.status(200).json(track);
        }, (validation) => {
            response.status(422).json({
                errors: validation.errors.map((error) => {
                    return {
                        attribute: error.path,
                        message: error.message
                    }
                })

            });
        });
});

app.delete('/api/cheeses/:id', function (request, response) {
    let {
        id
    } = request.params;

    Cheese
        .findByPk(id)
        .then((cheese) => {
            if (cheese) {

                return cheese.setDishes([]).then(() => {
                    return cheese.destroy();
                  });

            } else {
                return Promise.reject();
            }
        })
        .then(() => {
            response.status(204).send();
        }, () => {
            response.status(404).send();
        });
});

app.listen(1000);