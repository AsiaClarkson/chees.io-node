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

it('should return a 404 status code if cheese is not found', () => {
    return frisby
    .patch('http://localhost:1000/api/cheeses/-1', {
        name: 'Havarti',
        flavor: 'buttery, creamy',
        type_id: '4',
        texture_id: '2',
        color_id: '12',
        country_id: '73',
        image: 'https://images.eatthismuch.com/site_media/img/440033_ChrisSexton_f31def51-17d9-4c82-828c-c7223080f887.png'

    })
    .expect('status', 404)
});

it('should return a 422 status code if validation fails', () => {
    return frisby
    .patch('http://localhost:1000/api/cheeses/1', {
        name: 'H',
        flavor: '',
        type_id: '4',
        texture_id: '2',
        color_id: '12',
        country_id: '73',
        image: 'https://images.eatthismuch.com/site_media/img/440033_ChrisSexton_f31def51-17d9-4c82-828c-c7223080f887.png'

    })
    .expect('status', 422)
});

it('should create a cheese', () => {
    return frisby
        .post('http://localhost:1000/api/cheeses', {
            name: 'Big Phillip Cheddar',
            flavor: 'Just like Dad used to make.',
            type_id: '1',
            texture_id: '1',
            color_id: '1',
            country_id: '1',
            image: 'https://junglejims.com/wp-content/uploads/Gloucester-with-blue-stilton-966x296.jpg'
        })
        .expect('status', 200)
        .expect('json', 'name', 'Big Phillip Cheddar')
        .expect('jsonTypes', 'id', Joi.number().required())
});

it('should return 422 if validation failed', () => {
    return frisby
        .post('http://localhost:1000/api/cheeses', {
            name: '',
            flavor: '',
            type_id: '1',
            texture_id: '1',
            color_id: '1',
            country_id: '1',
            image: 'https://junglejims.com/wp-content/uploads/Gloucester-with-blue-stilton-966x296.jpg'
        })
        .expect('status', 422)
});

it('should return a 204 when deleting a cheese that does exist', () => {
    return frisby
    .del('http://localhost:1000/api/cheeses/7') 
    .expect('status', 204);
 });

it('should return a 404 when deleting a cheese that does not exist', () => {
    return frisby
    .del('http://localhost:1000/api/cheeses/-1') 
    .expect('status', 404);
 });
 



