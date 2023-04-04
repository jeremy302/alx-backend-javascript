const assert = require('assert');
const calculateNumber = require('./1-calcul');


describe('1-calcul.js', function(){
    it('should round properly', function(){
        assert(calculateNumber('SUM', 1, 1) === 2);
        assert(calculateNumber('SUM', 1, -1) === 0);
        assert(calculateNumber('SUM', 1.0, 1.0) === 2);
        assert(calculateNumber('SUM', 1.2, 1.2) === 2);
        assert(calculateNumber('SUM', 1.4, 1.4) === 2);
        assert(calculateNumber('SUM', 1.5, 1.4999) === 3);
        assert(calculateNumber('SUM', -1.4, -1.4999) === -2);
    });

    it('adds two positive numbers', function() {
        const result = calculateNumber('SUM', 2.6, 3.7);
        assert.strictEqual(result, 3 + 4);
    });

    it('subtracts two positive numbers', function() {
        const result = calculateNumber('SUBTRACT', 10.8, 3.2);
        assert.strictEqual(result, 11 - 3);
    });

    it('divides two positive numbers', function() {
        const result = calculateNumber('DIVIDE', 10.8, 3.2);
        assert.strictEqual(result, 11/3);
    });

    it('returns "Error" when dividing by zero', function() {
        const result = calculateNumber('DIVIDE', 10.8, 0);
        assert.strictEqual(result, 'Error');
    });

    it('subtracts two negative numbers', function() {
        const result = calculateNumber('SUBTRACT', -10.8, -3.2);
        assert.strictEqual(result, -11 + 3);
    });

    it('adds two negative numbers', function() {
        const result = calculateNumber('SUM', -2.6, -3.7);
        assert.strictEqual(result, -3 - 4);
    });

    it('divides two negative numbers', function() {
        const result = calculateNumber('DIVIDE', -10.8, -3.2);
        assert.strictEqual(result, -11/-3);
    });

    it('rounds up', function() {
        const result = calculateNumber('SUM', 1.5, 2.5);
        assert.strictEqual(result, 2+3);
    });

    it('rounds down', function() {
        const result = calculateNumber('SUBTRACT', 3.7, 1.5);
        assert.strictEqual(result, 4-2);
    });

    it('rounds correctly', function() {
        const result = calculateNumber('DIVIDE', 10, 3);
        assert.strictEqual(result, 10/3);
    });

    it('returns "Error" for an invalid type', function() {
        const result = calculateNumber('MULTIPLY', 10.8, 3.2);
        assert.strictEqual(result, 0);
    });

    it('handles large numbers', function() {
        const result = calculateNumber('SUM', 999999999999999999999, 1);
        assert.strictEqual(result, 1000000000000000000000);
    });

    it('handles small numbers', function() {
        const result = calculateNumber('SUM', 0.0000000000000001, 0.0000000000000002);
        assert.strictEqual(result, 0);
    });
});
