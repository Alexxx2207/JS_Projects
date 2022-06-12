const expect = require('chai').expect;

const lookupChar = require('./charLookUp');

describe('Lookup char function', () => {
    it('should return undefined when not a string is passed', () => {
        expect(lookupChar(5, 6)).to.equal(undefined);
    });
    
    it('should return undefined when not a number for index is passed', () => {
        expect(lookupChar('sa', true)).to.equal(undefined);
    });
    
    it('should return undefined when not a integer but float for index is passed', () => {
        expect(lookupChar('sa', 3.15)).to.equal(undefined);
    });
    
    it('should return incorrent index cuz index is negative', () => {
        expect(lookupChar('sa', -1)).to.equal("Incorrect index");
    });
    
    it('should return incorrent index cuz index is too big', () => {
        expect(lookupChar('sa', 3)).to.equal("Incorrect index");
    });
    
    it('should return correct char', () => {
        expect(lookupChar('sa', 1)).to.equal('a');
    });
});