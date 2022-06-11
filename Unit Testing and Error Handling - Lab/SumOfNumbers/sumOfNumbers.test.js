const expect = require('chai').expect;

const sum = require('./sumOfNumbers');

describe('Sum function', () => {

    it("array as parameter should contain numbers", () => {
        expect(sum(['2', 2, '4'])).to.equal(8);
    });
   
    it("should return NaN when there is non-numerical array item", () => {
        expect(sum(['a', 2, '4'])).to.NaN;
    });

    it("should sum corrctly", () => {
        expect(15).to.equal(sum([3,1,4,5,2]));
    });
});