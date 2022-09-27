const assert = require('chai').assert;
const tail = require('../tail');

const words = ['Hello', 'Lighthouse', 'Labs'];
const result = tail(words);


describe("#tail", () => {
  it("returns 3 for words.length", () => {
    assert.strictEqual(words.length, 3);
  });
  it("returns 2 for result.length", () => {
    assert.strictEqual(result.length, 2); 
  });
  it("returns 'Lighthouse' for result[0]", () => {
    assert.strictEqual(result[0], 'Lighthouse'); 
  });
  it("returns 'Labs' for result[1]",() => {
    assert.strictEqual(result[1], 'Labs'); 
  });

});