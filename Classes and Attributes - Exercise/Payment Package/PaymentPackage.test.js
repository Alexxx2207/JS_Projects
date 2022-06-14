import { expect } from 'chai';

import PaymentPackage from './PaymentPackage.js';

describe("Payment Package Class", function () {

    describe('Tests for the constructor', function () {
        it("constructor should intantiate object with name and value", function () {
            let actual = new PaymentPackage("Name", 5);

            expect(actual.name).to.equal("Name");
            expect(actual.value).to.equal(5);
            expect(actual.VAT).to.equal(20);
            expect(actual.active).to.equal(true);
        });

        it("constructor should throw error due to insufficient amount of parameters", function () {
            expect(() => new PaymentPackage("Name")).to.throw('Value must be a non-negative number');
        });

        it("constructor should throw error due to incorrect name parameter", function () {
            expect(() => new PaymentPackage(false, 5)).to.throw('Name must be a non-empty string');
        });

        it("constructor should throw error due to incorrect value parameter", function () {
            expect(() => new PaymentPackage('Name', false)).to.throw('Value must be a non-negative number');
        });
    });

    describe('Tests for the name', function () {

        it("set name should throw error 'Name must be a non-empty string'", function () {
            let payment = new PaymentPackage("Name", 5);

            expect(() => payment.name = false).to.throw('Name must be a non-empty string');
        });
        
        it("set name should throw error 'Name must be a non-empty string'", function () {
            let payment = new PaymentPackage("Name", 5);

            expect(() => payment.name = 5).to.throw('Name must be a non-empty string');
        });

        it("set name should throw error 'Name must be a non-empty stringr'", function () {
            let payment = new PaymentPackage("Name", 5);

            expect(() => payment.name = '').to.throw('Name must be a non-empty string');
        });

        it("set name should work with valid data", function () {
            let payment = new PaymentPackage("Name", 5);

            let expected = 'Nathan';

            payment.name = expected;

            expect(payment.name).to.equal(expected);
        });

        it('get name should return the name of the payment', function () {
            let payment = new PaymentPackage("Name", 5);

            expect(payment.name).to.equal("Name");
        });
    });

    describe('Tests for the value', function () {
        it("set value to false should throw error 'Value must be a non-negative number'", function () {
            let payment = new PaymentPackage("Name", 5);

            expect(() => payment.value = false).to.throw('Value must be a non-negative number');
        });
        
        it("set value to false should throw error 'Value must be a non-negative number'", function () {
            let payment = new PaymentPackage("Name", 5);

            expect(() => payment.value = 'name').to.throw('Value must be a non-negative number');
        });

        it("set value to negative number should throw error 'Value must be a non-negative number'", function () {
            let payment = new PaymentPackage("Name", 5);

            expect(() => payment.value = -1).to.throw('Value must be a non-negative number');
        });

        it("set value should work with valid data", function () {
            let payment = new PaymentPackage("Name", 5);

            let expected = 1000;

            payment.value = expected;

            expect(payment.value).to.equal(expected);
        });
        
        it("set value should not throw error on value = 0", function () {
            let payment = new PaymentPackage("Name", 5);

            let expected = 0;

            payment.value = expected;

            expect(payment.value).to.equal(expected);
            expect(() => {payment.value = 0}).not.to.throw('Value must be a non-negative number');
        });

        it('get value should return the value of the payment', function () {
            let payment = new PaymentPackage("Name", 5);

            expect(payment.value).to.equal(5);
        });

    });

    describe('Tests for the Active', () => {
        it("set active to false should throw error 'Active status must be a boolean'", function () {
            let payment = new PaymentPackage("Name", 5);

            expect(() => payment.active = 'invalid').to.throw('Active status must be a boolean');
        });
        
        it("set active to false should throw error 'Active status must be a boolean'", function () {
            let payment = new PaymentPackage("Name", 5);

            expect(() => payment.active = 5).to.throw('Active status must be a boolean');
        });

        it("set status should work with valid data", function () {
            let payment = new PaymentPackage("Name", 5);

            let expected = false;

            payment.active = expected;

            expect(payment.active).to.equal(expected);
        });

        it('get active should return the status of the payment', function () {
            let payment = new PaymentPackage("Name", 5);

            expect(payment.active).to.equal(true);
        });

    });

    describe('Tests for the toString()', () => {
        it("toString() should work properly", function () {
            let payment = new PaymentPackage("Name", 5);

            expect(payment.toString())
                .to.equal(`Package: Name\n` +
                    `- Value (excl. VAT): 5\n` +
                    `- Value (VAT 20%): ${5 * (1 + 20 / 100)}`);
        });


        it("toString() should work properly after changes", function () {
            let payment = new PaymentPackage("Name", 5);

            payment.VAT = 30;

            expect(payment.toString())
                .to.equal(`Package: Name\n` +
                    `- Value (excl. VAT): 5\n` +
                    `- Value (VAT 30%): ${5 * (1 + 30 / 100)}`);
        });

        it("toString() should work properly after changes", function () {
            let payment = new PaymentPackage("Name", 5);

            payment.active = false;

            expect(payment.toString())
                .to.equal(`Package: Name (inactive)\n` +
                    `- Value (excl. VAT): 5\n` +
                    `- Value (VAT 20%): ${5 * (1 + 20 / 100)}`);
        });

        it("toString() should work properly after changes", function () {
            let payment = new PaymentPackage("Name", 5);

            payment.VAT = 30;
            payment.active = false;

            expect(payment.toString())
                .to.equal(`Package: Name (inactive)\n` +
                    `- Value (excl. VAT): 5\n` +
                    `- Value (VAT 30%): ${5 * (1 + 30 / 100)}`);
        });
    });

    describe('Tests for the VAT', () => {
        it('set VAT should throw error because of invalid parameter type', function () {
            let payment = new PaymentPackage("Name", 5);

            expect(() => payment.VAT = 'name').to.throw('VAT must be a non-negative number');
        });
        
        it('set VAT should throw error because of invalid parameter type', function () {
            let payment = new PaymentPackage("Name", 5);

            expect(() => payment.VAT = true).to.throw('VAT must be a non-negative number');
        });

        it('set VAT should throw error because of negative parameter', function () {
            let payment = new PaymentPackage("Name", 5);

            expect(() => payment.VAT = -20).to.throw('VAT must be a non-negative number');

        });

        it('get VAT should return the VAT of the payment', function () {
            let payment = new PaymentPackage("Name", 5);

            expect(payment.VAT).to.equal(20);
        });
    });

});
