const expect = require('chai').expect;

const isSymmetric = require('./checkForSymmetry');

describe('IsSymmetric function', () => {

    it('should accept array', () => {
        expect(isSymmetric([1,1])).to.equal(true);
    });

    it('should not accept number', () => {
        expect(isSymmetric(5)).to.equal(false);
    });

    it('should not accept string', () => {
        expect(isSymmetric('')).to.equal(false);
    });
    
    it('should not accept boolean', () => {
        expect(isSymmetric(true)).to.equal(false);
    });
    
    it('should not accept undefined/null', () => {
        expect(isSymmetric(undefined)).to.equal(false);
        expect(isSymmetric(null)).to.equal(false);
    });

    it('should not accept function', () => {
        expect(isSymmetric(() => { })).to.equal(false);
    });

    it('should not accept object', () => {
        expect(isSymmetric({})).to.equal(false);
    });

    it('should return true if the array is symmetric', () => {
        expect(isSymmetric([1, 1, 1])).to.equal(true);
    });

    it('should return false if the array is not symmetric', () => {
        expect(isSymmetric([0, 1])).to.equal(false);
    });
    
    it('should return false if the array contains a string', () => {
        expect(isSymmetric([1, '1'])).to.equal(false);
    });
});