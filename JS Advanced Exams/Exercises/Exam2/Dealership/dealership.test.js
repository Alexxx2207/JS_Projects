let dealership = require('./dealership');

let expect = require('chai').expect;

describe("Tests dealership", function () {
    describe("newCarCost", function () {

        it("deduct price", function () {
            expect(dealership.newCarCost('Audi A4 B8', 15000)).to.equal(0);
        });

        it("do not deduct price", function () {
            expect(dealership.newCarCost('Lada', 15000)).to.equal(15000);
        });
    });
    describe("carEquipment", function () {
        it('should select extras propertly', function () {
            let extras = ['heated seats', 'sliding roof', 'sport rims', 'navigation', 'Better ABS'];
            let indexes = [0, 3, 4];
            expect(dealership.carEquipment(extras, indexes)).to.have.ordered.members(['heated seats', 'navigation', 'Better ABS']);

        });

        it('should select extras propertly', function () {
            let extras = ['heated seats', 'sliding roof', 'sport rims', 'navigation', 'Better ABS'];
            let indexes = [];
            expect(dealership.carEquipment(extras, indexes)).to.have.ordered.members([]);

        })
    });

    describe("euroCategory", function () {
        it('should check propertly category >= 4', function() {
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`);
        });

        it('should check propertly category >= 4', function() {
            expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: 14250.`);
        });
        
        it('should check propertly category >= 4', function() {
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });
        it('should check propertly category >= 4', function() {
            expect(dealership.euroCategory(0)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });
        it('should check propertly category >= 4', function() {
            expect(dealership.euroCategory(1)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });
    });
});
