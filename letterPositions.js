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


const letterPositions = function(sentence) {
  const results = {};
      for(let i = 0; i < sentence.length; i++){
        let char = sentence[i]; 
        if (char !== " "){
          if (results[char]) {
            results[char].push(i);
          } else {
            results[char]= [i];
          }
        }
      }  
  return results;
};

console.log(letterPositions("hello"));

/////test

assertArraysEqual(letterPositions("hello").e, [1]);