const {
    expect
} = require('chai');

const Cheese = require('../../../models/cheese');

describe('cheese', () => {
    describe('name', () => {
        it('should not pass validation if name is less than 2 characters', async () => {

            try {
                let cheese = new Cheese({
                    name: 'a',
                    flavor: 'Just like Dad used to make.',
                    type_id: '1',
                    texture_id: '1',
                    color_id: '1',
                    country_id: '1',
                    image: 'https://junglejims.com/wp-content/uploads/Gloucester-with-blue-stilton-966x296.jpg'
                });
                await cheese.validate();
            } catch (error) {
                expect(error.errors[0].message).to.equal('Name must be between 2 and 20 characters');
            }
        });
    });

    describe('name', () => {
        it('should not pass validation if name is more than 20 characters', async () => {

            try {
                let cheese = new Cheese({
                    name: 'CreamedFetaGorgonzolaColbyJack',
                    flavor: 'Just like Dad used to make.',
                    type_id: '1',
                    texture_id: '1',
                    color_id: '1',
                    country_id: '1',
                    image: 'https://junglejims.com/wp-content/uploads/Gloucester-with-blue-stilton-966x296.jpg'
                });
                await cheese.validate();
            } catch (error) {
                expect(error.errors[0].message).to.equal('Name must be between 2 and 20 characters');
            }
        });
    });


    
    describe('name', () => {
        it('should pass validation if cheese is between 2 and 20 characters', async () => {

            try {
                let cheese = new Cheese({
                    name:'Velveeta',
                    flavor: 'Just like Dad used to make.',
                    type_id: '1',
                    texture_id: '1',
                    color_id: '1',
                    country_id: '1',
                    image: 'https://junglejims.com/wp-content/uploads/Gloucester-with-blue-stilton-966x296.jpg'
                });
                await cheese.validate();
            } catch (error) {
                expect(error.errors[0].message).to.equal('Name must be between 2 and 20 characters');
            }
        });
    });

    describe('flavor', () => {
        it('should not pass validation if flavor is blank', async () => {

            try {
                let cheese = new Cheese({
                    name: 'HammerTime',
                    flavor: '',
                    type_id: '1',
                    texture_id: '1',
                    color_id: '1',
                    country_id: '1',
                    image: 'https://junglejims.com/wp-content/uploads/Gloucester-with-blue-stilton-966x296.jpg'
                });
                await cheese.validate();
            } catch (error) {
                expect(error.errors[0].message).to.equal('Flavor is required');
            }
        });
    });

    describe('flavor', () => {
        it('should pass validation if flavor is definded', async () => {

            try {
                let cheese = new Cheese({
                    name: 'CheezWhiz',
                    flavor: 'like plastic, but cheese flavored',
                    type_id: '1',
                    texture_id: '1',
                    color_id: '1',
                    country_id: '1',
                    image: 'https://junglejims.com/wp-content/uploads/Gloucester-with-blue-stilton-966x296.jpg'
                });
                await cheese.validate();
            } catch (error) {
                expect(error.errors[0].message).to.equal('Flavor is required');
            }
        });
    });


});