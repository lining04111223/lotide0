const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }else{

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
}
  return true;
};

/////////////////////////
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected)){
    console.log(`✅✅✅   Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

/////////////
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// TEST CODE

assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]); 
assertArraysEqual(map(words, word => word.length), [ 6, 7, 2, 5, 3 ]); 
assertArraysEqual(map(words, word => `I Love ${word}`), [
  'I Love ground',
  'I Love control',
  'I Love to',
  'I Love major',
  'I Love tom'
]); 


