// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');

const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');

module.exports = {
  head,
  tail,
  middle,
  eqArrays,
  eqObjects,
  assertEqual,
  assertArraysEqual,
  assertObjectsEqual,
};