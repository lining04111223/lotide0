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

////////////////////////

const middle = function(arr){
  if(arr.length <= 2){
  return [];
  } else if (arr.length % 2 === 1) {
  return [arr[(arr.length - 1) / 2]];
  } else {
  return [arr[((arr.length / 2) - 1)], arr[(arr.length / 2)]];
  }
}

// TEST CODE
console.log(middle([1])) // => []
console.log(middle([1, 2]))// => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
console.log("-----------------------------------");
assertArraysEqual(middle([1]), []); 
assertArraysEqual(middle([1, 2]), []); 
assertArraysEqual(middle([1, 2, 3]), [2]); 
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); 
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); 
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); 