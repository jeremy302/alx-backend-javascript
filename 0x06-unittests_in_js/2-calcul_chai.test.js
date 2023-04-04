const {expect} = require('chai');
const calculateNumber = require('./2-calcul_chai');


describe('2-calcul_chai.js', function(){
    it('should round properly', function(){
        expect(calculateNumber('SUM', 1, 1)).to.be.equal(2);
        expect(calculateNumber('SUM', 1, -1)).to.be.equal(0);
        expect(calculateNumber('SUM', 1.0, 1.0)).to.be.equal(2);
        expect(calculateNumber('SUM', 1.2, 1.2)).to.be.equal(2);
        expect(calculateNumber('SUM', 1.4, 1.4)).to.be.equal(2);
        expect(calculateNumber('SUM', 1.5, 1.4999)).to.be.equal(3);
        expect(calculateNumber('SUM', -1.4, -1.4999)).to.be.equal(-2);
    });

    it('adds two positive numbers', function() {
        const result = calculateNumber('SUM', 2.6, 3.7);
        expect(result).to.be.equal(3 + 4);
    });

    it('subtracts two positive numbers', function() {
        const result = calculateNumber('SUBTRACT', 10.8, 3.2);
        expect(result).to.be.equal(11 - 3);
    });

    it('divides two positive numbers', function() {
        const result = calculateNumber('DIVIDE', 10.8, 3.2);
        expect(result).to.be.equal(11/3);
    });

    it('returns "Error" when dividing by zero', function() {
        const result = calculateNumber('DIVIDE', 10.8, 0);
        expect(result).to.be.equal('Error');
    });

    it('subtracts two negative numbers', function() {
        const result = calculateNumber('SUBTRACT', -10.8, -3.2);
        expect(result).to.be.equal(-11 + 3);
    });

    it('adds two negative numbers', function() {
        const result = calculateNumber('SUM', -2.6, -3.7);
        expect(result).to.be.equal(-3 - 4);
    });

    it('divides two negative numbers', function() {
        const result = calculateNumber('DIVIDE', -10.8, -3.2);
        expect(result).to.be.equal(-11/-3);
    });

    it('rounds up', function() {
        const result = calculateNumber('SUM', 1.5, 2.5);
        expect(result).to.be.equal(2+3);
    });

    it('rounds down', function() {
        const result = calculateNumber('SUBTRACT', 3.7, 1.5);
        expect(result).to.be.equal(4-2);
    });

    it('rounds correctly', function() {
        const result = calculateNumber('DIVIDE', 10, 3);
        expect(result).to.be.equal(10/3);
    });

    it('returns "Error" for an invalid type', function() {
        const result = calculateNumber('MULTIPLY', 10.8, 3.2);
        expect(result).to.be.equal(0);
    });

    it('handles large numbers', function() {
        const result = calculateNumber('SUM', 999999999999999999999, 1);
        expect(result).to.be.equal(1000000000000000000000);
    });

    it('handles small numbers', function() {
        const result = calculateNumber('SUM', 0.0000000000000001, 0.0000000000000002);
        expect(result).to.be.equal(0);
    });
});
