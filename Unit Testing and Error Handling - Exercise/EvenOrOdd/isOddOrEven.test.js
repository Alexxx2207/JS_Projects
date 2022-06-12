const expect = require('chai').expect;

const isOddOrEven = require('./isOddOrEven');

describe('Is Odd or Even function', () => {
    it('should return undefined when number is given', () => {
        expect(isOddOrEven(5)).to.equal(undefined);
    });
    
    it('should return undefined when boolean is given', () => {
        expect(isOddOrEven(true)).to.equal(undefined);
    });
    
    it('should return undefined when undefined/null is given', () => {
        expect(isOddOrEven(undefined)).to.equal(undefined);
        expect(isOddOrEven(null)).to.equal(undefined);
    });
    
    it('should return undefined when array is given', () => {
        expect(isOddOrEven([2,3,4])).to.equal(undefined);
    });

    it('should return even', () => {
        expect(isOddOrEven('sa')).to.equal("even");
    });
    
    it('should return odd', () => {
        expect(isOddOrEven('s')).to.equal("odd");
    });
    
    
    it('should work with multiple different strings', () => {
        expect(isOddOrEven('s')).to.equal("odd");
        expect(isOddOrEven('ss')).to.equal("even");
        expect(isOddOrEven('ss', 's')).to.equal("even");
        expect(isOddOrEven('s', 'ss')).to.equal("odd");
    });
});