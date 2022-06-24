let rentCar = require('./rentCar');

let expect = require('chai').expect;

describe("Tests rentCar", function () {
    describe("searchCar()", function () {
        it("returns error", function () {
            expect(() => rentCar.searchCar('', 'model')).to.throw();
        });
        it("returns error", function () {
            expect(() => rentCar.searchCar([1, 2, 3], 5)).to.throw();
        });
        it("returns string", function () {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "BMW")).to.equal(`There is 1 car of model BMW in the catalog!`);
        });
        it("returns error", function () {
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "a")).to.throw('There are no such models in the catalog!');
        });
    });
    describe("calculatePriceOfCar()", function () {
        it("returns error", function () {
            expect(() => rentCar.calculatePriceOfCar(1, 5)).to.throw();
        });
        it("returns error", function () {
            expect(() => rentCar.calculatePriceOfCar('BMW', true)).to.throw();
        });
        it("returns error", function () {
            expect(() => rentCar.calculatePriceOfCar('f', 5)).to.throw();
        });
        it("returns string", function () {
            expect(rentCar.calculatePriceOfCar('BMW', 10)).to.equal(`You choose BMW and it will cost $450!`);
        });
    });

    describe("checkBudget()", function () {
        it("returns error", function () {
            expect(() => rentCar.checkBudget('f', 5, 5)).to.throw();
        });
        it("returns error", function () {
            expect(() => rentCar.checkBudget(5, 'f', 5)).to.throw();
        });
        it("returns error", function () {
            expect(() => rentCar.checkBudget(5, 5, 'f')).to.throw();
        });
        it("returns string", function () {
            expect(rentCar.checkBudget(5, 1, 5)).to.equal('You rent a car!');
        });
        it("returns string", function () {
            expect(rentCar.checkBudget(4, 1, 5)).to.equal('You rent a car!');
        });
        it("returns string", function () {
            expect(rentCar.checkBudget(6, 1, 5)).to.equal('You need a bigger budget!');
        });
    });
});
