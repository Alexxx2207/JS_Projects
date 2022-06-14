import { expect } from 'chai';

import StringBuilder from './string-builder.js';

describe('StringBuilder class' , function() {

    describe('constructor', function() {
        it('invalid param' , function() {
            expect(() => new StringBuilder(5)).to.throw('Argument must be a string');
        });
        it('invalid param' , function() {
            expect(() => new StringBuilder(true)).to.throw('Argument must be a string');
        });
        it('invalid param' , function() {
            expect(() => new StringBuilder(['abc'])).to.throw('Argument must be a string');
        });
        it('invalid param' , function() {
            expect(() => new StringBuilder({})).to.throw('Argument must be a string');
        });
        it('invalid param' , function() {
            expect(() => new StringBuilder(function(e) {return e})).to.throw('Argument must be a string');
        });
        it('invalid param' , function() {
            expect(() => new StringBuilder(null)).to.throw('Argument must be a string');
        });
        it('invalid param' , function() {
            expect(new StringBuilder(undefined)._stringArray.length).to.equal(0);
        });

        it('with param', function() {
            expect(new StringBuilder('sample').toString()).to.equal('sample');
        })
        
        it('without param', function() {
            expect(new StringBuilder().toString()).to.equal('');
        })
    });

    describe('append',  function() {
        it('invalid param' , function() {
            expect(() => new StringBuilder('sample').append(5)).to.throw('Argument must be a string');
        });
        it('invalid param' , function() {
            expect(() => new StringBuilder('sample').append(true)).to.throw('Argument must be a string');
        });
        it('invalid param' , function() {
            expect(() => new StringBuilder('sample').append(['abc'])).to.throw('Argument must be a string');
        });
        it('invalid param' , function() {
            expect(() => new StringBuilder('sample').append({})).to.throw('Argument must be a string');
        });
        it('invalid param' , function() {
            expect(() => new StringBuilder('sample').append(function(a) {return a})).to.throw('Argument must be a string');
        });
        it('invalid param' , function() {
            expect(() => new StringBuilder('sample').append(null)).to.throw('Argument must be a string');
        });
        it('invalid param' , function() {
            expect(() => new StringBuilder('sample').append(undefined)).to.throw('Argument must be a string');
        });
        it('valid param' , function() {
            expect(() => new StringBuilder('sample').append('sample2')).not.to.throw('Argument must be a string');

            let strbuilder = new StringBuilder('sample');
            
            strbuilder.append('sample2');

            expect(strbuilder.toString()).to.equal('samplesample2');
        });
        it('valid param' , function() {
            expect(() => new StringBuilder('sample').append('sample2')).not.to.throw('Argument must be a string');

            let strbuilder = new StringBuilder('sample');
            
            strbuilder.append('');
 
            expect(strbuilder.toString()).to.equal('sample');
        });
    });

    describe('prepend',  function() {
        it('invalid param' , function() {
            expect(() => new StringBuilder('sample').prepend(5)).to.throw('Argument must be a string');
        });
        it('invalid param' , function() {
            expect(() => new StringBuilder('sample').prepend(true)).to.throw('Argument must be a string');
        });
        it('invalid param' , function() {
            expect(() => new StringBuilder('sample').prepend(['abc'])).to.throw('Argument must be a string');
        });
        it('invalid param' , function() {
            expect(() => new StringBuilder('sample').prepend({})).to.throw('Argument must be a string');
        });
        it('invalid param' , function() {
            expect(() => new StringBuilder('sample').prepend(function(a) {return a})).to.throw('Argument must be a string');
        });
        it('invalid param' , function() {
            expect(() => new StringBuilder('sample').prepend(null)).to.throw('Argument must be a string');
        });
        it('invalid param' , function() {
            expect(() => new StringBuilder('sample').prepend(undefined)).to.throw('Argument must be a string');
        });
        it('valid param' , function() {
            expect(() => new StringBuilder('sample').prepend('sample2')).not.to.throw('Argument must be a string');

            let strbuilder = new StringBuilder('sample');
            
            strbuilder.prepend('sample2');

            expect(strbuilder.toString()).to.equal('sample2sample');
        });
        it('valid param' , function() {
            expect(() => new StringBuilder('sample').prepend('sample2')).not.to.throw('Argument must be a string');

            let strbuilder = new StringBuilder('sample');
            
            strbuilder.prepend('');
 
            expect(strbuilder.toString()).to.equal('sample');
        });
    });

    describe('insertAt',  function() {
        it('invalid string', function() {
            expect(() => new StringBuilder('sample').insertAt(5, 1)).to.throw('Argument must be a string');
        });
        it('invalid string', function() {
            expect(() => new StringBuilder('sample').insertAt(true, 1)).to.throw('Argument must be a string');
        });
        it('invalid string', function() {
            expect(() => new StringBuilder('sample').insertAt(['abc'], 1)).to.throw('Argument must be a string');
        });
        it('invalid param' , function() {
            expect(() => new StringBuilder('sample').insertAt({})).to.throw('Argument must be a string');
        });
        it('invalid string', function() {
            expect(() => new StringBuilder('sample').insertAt(function(a) {return a}, 1)).to.throw('Argument must be a string');
        });
        it('invalid string', function() {
            expect(() => new StringBuilder('sample').insertAt(null, 1)).to.throw('Argument must be a string');
        });
        it('invalid string', function() {
            expect(() => new StringBuilder('sample').insertAt(undefined, 1)).to.throw('Argument must be a string');
        });
        it('valid params', function() {
            let strBuilder = new StringBuilder('sample');

            expect(() => strBuilder.insertAt('sample2', 1)).not.to.throw('Argument must be a string');
        });
        it('valid params', function() {
            let strBuilder = new StringBuilder('sample');

            strBuilder.insertAt('sample2', 1);
            
            expect(strBuilder.toString()).to.equal('ssample2ample');
        });
        
        it('valid params', function() {
            let strBuilder = new StringBuilder('sample');

            strBuilder.insertAt('sample2', 0);
            
            expect(strBuilder.toString()).to.equal('sample2sample');
        });
        
        it('valid params', function() {
            let strBuilder = new StringBuilder('sample');

            strBuilder.insertAt('sample2', 9);
            
            expect(strBuilder.toString()).to.equal('samplesample2');
        });
    });

    describe('remove',  function() {
        it('valid params', function() {
            let strBuilder = new StringBuilder('sample');
            
            strBuilder.remove(1, 1);
            
            expect(strBuilder.toString()).to.equal('smple');
        });
    });
    describe('remove',  function() {
        it('valid params', function() {
            let strBuilder = new StringBuilder('sample');
            
            strBuilder.remove(1, 8);
            
            expect(strBuilder.toString()).to.equal('s');
        });
    });

    describe('toString',  function() {
        it('without strings' , function() {
            let strBuilder = new StringBuilder();

            expect(strBuilder.toString()).to.equal('');
        });
        
        it('with strings' , function() {
            let strBuilder = new StringBuilder('sample');

            strBuilder.append('sample1');

            expect(strBuilder.toString()).to.equal('samplesample1');
        });
        it('with strings' , function() {
            let strBuilder = new StringBuilder('sample');

            strBuilder.remove(1, 5);

            expect(strBuilder.toString()).to.equal('s');
        });
       
        it('with strings' , function() {
            let strBuilder = new StringBuilder('sample');

            strBuilder.append('sample1');
            strBuilder.remove(1, 5);

            expect(strBuilder.toString()).to.equal('ssample1');
        });
        
        it('with strings' , function() {
            let strBuilder = new StringBuilder('sample');

            strBuilder.append('sample1');
            strBuilder.insertAt('sample2', 4);

            expect(strBuilder.toString()).to.equal('sampsample2lesample1');
        });
        
        it('with strings' , function() {
            let strBuilder = new StringBuilder('sample');

            strBuilder.prepend('sample3');
            strBuilder.append('sample1');

            expect(strBuilder.toString()).to.equal('sample3samplesample1');
        });
    });

    it('whole class at once', function() {
        let strBuilder = new StringBuilder('sample');

        strBuilder.append('a');
        strBuilder.prepend('a');
        strBuilder.insertAt('sample2', 5);
        strBuilder.remove(2, 5);

        expect(strBuilder.toString()).to.equal('asmple2lea');
    })
});
