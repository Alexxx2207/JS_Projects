const expect = require('chai').expect;

const createCalculator = require('./addSubtract');

describe('Add/Subtract function', () => {
    it('should return an object', () => {
        expect(createCalculator()).to.be.an('object');
        expect(createCalculator()).to.be.a('object');
    });
    it('should return an object with add()', () => {
        expect(createCalculator()).to.have.property('add');
    });
    it('should return an object with subtract()', () => {
        expect(createCalculator()).to.have.property('subtract');
    });
    it('should return an object with get()', () => {
        expect(createCalculator()).to.have.property('get');
    });
    it('cannot modify a closure sum', () => {
        expect(createCalculator().value).to.equal(undefined);
    });
    it('add() should accept number', () => {
        let calc = createCalculator();

        calc.add(6);
        
        expect(calc.get()).to.equal(6);
    });
    it('add() should accept string number', () => {
        let calc = createCalculator();

        calc.add('6');
        
        expect(calc.get()).to.equal(6);
    });
    it('subtract() should accept number', () => {
        let calc = createCalculator();

        calc.subtract(6);
        
        expect(calc.get()).to.equal(-6);
    });
    it('subtract() should accept string number', () => {
        let calc = createCalculator();

        calc.subtract('6');
        
        expect(calc.get()).to.equal(-6);
    });
    it('get() should retuen current value', () => {
        let calc = createCalculator();
        expect(calc.get()).to.equal(0);
    });
});