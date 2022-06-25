
let carService = require('./carService');

let expect = require('chai').expect;

describe("Tests carService", function () {
    describe("isItExpensive()", function () {

        it("issue = Engine", function () {
            expect(carService.isItExpensive('Engine')).to.equal(`The issue with the car is more severe and it will cost more money`);
        });
        it("issue = Transmission", function () {
            expect(carService.isItExpensive('Transmission')).to.equal(`The issue with the car is more severe and it will cost more money`);
        });
        it("issue = something else", function () {
            expect(carService.isItExpensive('Nothing')).to.equal(`The overall price will be a bit cheaper`);
        });
    });
    describe("discount", function () {

        it("numberOfParts > 2 numberOfParts <= 7", function () {
            expect(carService.discount(3, 100)).to.equal(`Discount applied! You saved 15$`)
        });
        it("numberOfParts > 2 numberOfParts <= 7", function () {
            expect(carService.discount(5, 100)).to.equal(`Discount applied! You saved 15$`)
        });
        it("numberOfParts > 2 numberOfParts <= 7", function () {
            expect(carService.discount(7, 100)).to.equal(`Discount applied! You saved 15$`)
        });
        it("numberOfParts > 7", function () {
            expect(carService.discount(8, 100)).to.equal(`Discount applied! You saved 30$`)
        });
        it("numberOfParts <= 2", function () {
            expect(carService.discount(2, 100)).to.equal("You cannot apply a discount")
        });
        it("numberOfParts <= 2", function () {
            expect(carService.discount(1, 100)).to.equal("You cannot apply a discount")
        });
        it("invalid numberOfParts", function () {
            expect(() => carService.discount('a', 2)).to.throw("Invalid input");
        });
        it("invalid totalPrice", function () {
            expect(() => carService.discount(2, 'a')).to.throw("Invalid input");
        });
        
    });
    describe("partsToBuy", function () {
        it("invalid partsCatalog", function () {
            expect(() => carService.partsToBuy('a', [])).to.throw("Invalid input");
        });
        it("invalid neededParts", function () {
            expect(() => carService.partsToBuy([], 'a')).to.throw("Invalid input");
        });
        it("returns 0", function () {
            expect(carService.partsToBuy([], ['Engine'])).to.equal(0);
        });
        it("returns 0", function () {
            expect(carService.partsToBuy([{'Windows': 10}], ['Engine'])).to.equal(0);
        });
        it("returns valid sum", function () {
            expect(carService.partsToBuy(
                [{part: 'Engine', price: 10}, {part: 'Intake', price: 1}], ['Intake','Engine']))
                .to.equal(11);
        });
    });
});