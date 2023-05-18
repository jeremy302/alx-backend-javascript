const assert = require('assert');
const calculateNumber = require('./0-calcul');


describe('0-calcul.js', function(){
      it('floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('rounding down b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('rounding down a and b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('rounding down a\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('rounding up b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('rounding up a and b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('rounding up a\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
    // it('should round properly', function(){
    //     assert(calculateNumber(1, 1) === 2);
    //     assert(calculateNumber(1, -1) === 0);
    //     assert(calculateNumber(1.0, 1.0) === 2);
    //     assert(calculateNumber(1.2, 1.2) === 2);
    //     assert(calculateNumber(1.4, 1.4) === 2);
    //     assert(calculateNumber(1.5, 1.4999) === 3);
    //     assert(calculateNumber(-1.4, -1.4999) === -2);
    // });
});
