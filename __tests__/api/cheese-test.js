const frisby = require('frisby');

const {Joi} = frisby;

it('should return a status of 200 when cheese is found', () => {
    return frisby.get('http://localhost:1000/api/cheeses/19').expect('status', 200);
});

it('should return a status of 404 when cheese is not found', () => {
    return frisby.get('http://localhost:1000/api/cheeses/-1').expect('status', 404);
});

it('should return a 200 status code if cheese updated successfully', () => {
    return frisby
    .patch('http://localhost:1000/api/cheeses/1', {
        name: 'Havarti',
        flavor: 'buttery, creamy',
        type_id: '4',
        texture_id: '2',
        color_id: '12',
        country_id: '73',
        image: 'https://images.eatthismuch.com/site_media/img/440033_ChrisSexton_f31def51-17d9-4c82-828c-c7223080f887.png'

    })
    .expect('status', 200)
    .expect('json', 'name', 'Havarti')
    .expect('json', 'flavor', 'buttery, creamy')
});
