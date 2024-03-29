const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
