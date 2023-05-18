const assert = require('assert');
const calculateNumber = require('./0-calcul');


describe('0-calcul.js', function(){
    it('should round properly', function(){
        assert.ok(calculateNumber(1, 1) === 2);
        assert.ok(calculateNumber(1, -1) === 0);
        assert.ok(calculateNumber(1.0, 1.0) === 2);
        assert.ok(calculateNumber(1.2, 1.2) === 2);
        assert.ok(calculateNumber(1.4, 1.4) === 2);
        assert.ok(calculateNumber(1.5, 1.4999) === 3);
        assert.ok(calculateNumber(-1.4, -1.4999) === -2);
    });
});
