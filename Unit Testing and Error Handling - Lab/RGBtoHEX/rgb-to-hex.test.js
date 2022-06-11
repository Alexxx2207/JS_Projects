const expect = require('chai').expect;

const rgbToHexColor = require('./rgb-to-hex');

describe('RGB to HEX fucntion', () => {
    it('should return red undefined by string', () => {
        expect(rgbToHexColor('a', 0, 0)).to.equal(undefined);
    });
    
    it('should return red undefined by negative input', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.equal(undefined);
    });
    
    it('should return red undefined by too big number', () => {
        expect(rgbToHexColor(256, 0, 0)).to.equal(undefined);
    });

    it('should return green undefined by string', () => {
        expect(rgbToHexColor(0, 'a', 0)).to.equal(undefined);
    });

    it('should return green undefined by nagative number', () => {
        expect(rgbToHexColor(0, -1, 0)).to.equal(undefined);
    });

    it('should return green undefined by too big number', () => {
        expect(rgbToHexColor(0, 256, 0)).to.equal(undefined);
    });
    
    it('should return blue undefined by string', () => {
        expect(rgbToHexColor(0, 0, 'a')).to.equal(undefined);
    });

    it('should return blue undefined by negative number', () => {
        expect(rgbToHexColor(0, 0, -1)).to.equal(undefined);
    });

    it('should return blue undefined by too big number', () => {
        expect(rgbToHexColor(0, 0, 256)).to.equal(undefined);
    });

    it('should accept integers', () => {
        expect(rgbToHexColor(255, 158, 170)).to.equal('#FF9EAA');
    });

    it('should accept more than 3 arguments', () => {
        expect(rgbToHexColor(0, 0, 0, 0)).to.equal('#000000');
    });
});