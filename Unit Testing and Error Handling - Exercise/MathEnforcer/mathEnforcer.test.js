const expect = require('chai').expect;

const mathEnforcer = require('./mathEnforcer');

describe('Math enforcer function', () => {
    describe('addFive', () => {
        it('should return undefined when not a number is passed', () => {
            expect(mathEnforcer.addFive('sa')).to.equal(undefined);
            expect(mathEnforcer.addFive(true)).to.equal(undefined);
            expect(mathEnforcer.addFive([4,2,1])).to.equal(undefined);
        });
        
        it('should return the passed numver + 5', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });

        it('should work with negative numbers', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });
        
        it('should work with float numbers', () => {
            expect(mathEnforcer.addFive(-5.5)).to.be.closeTo(-0.5, 0.01);
        });
    });
    
    describe('subtractTen', () => {
        it('should return undefined when not a number is passed', () => {
            expect(mathEnforcer.subtractTen('sa')).to.equal(undefined);
            expect(mathEnforcer.subtractTen(true)).to.equal(undefined);
            expect(mathEnforcer.subtractTen([4,2,1])).to.equal(undefined);
        });

        it('should return number passed - 10', () => {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
        });

        it('should work with negative numbers', () => {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        });

        it('should work with float numbers', () => {
            expect(mathEnforcer.subtractTen(-5.5)).to.be.closeTo(-15.5, 0.01);
        });
    });

    describe('sum', () => {
        it('should return undefined when not a number is passed', () => {
            expect(mathEnforcer.sum('sa', 'sa')).to.equal(undefined);
            expect(mathEnforcer.sum('sa', 1)).to.equal(undefined);
            expect(mathEnforcer.sum(1, 'sa')).to.equal(undefined);
        });

        it('should return sum of the two given numbers', () => {
            expect(mathEnforcer.sum(5, 6)).to.equal(11);
        });
        it('should work with negative numbers', () => {
            expect(mathEnforcer.sum(-10, -10)).to.equal(-20);
        });
        it('should work with float numbers', () => {
            expect(mathEnforcer.sum(-5.5, 5.5)).to.be.closeTo(0, 0.01);
        });
    });
});