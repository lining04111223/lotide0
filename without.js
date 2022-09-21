const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected)){
    console.log(`✅✅✅   Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

const without=function(source, itemsToRemove){
  let result = [];
  for(let i = 0; i< source.length; i++){
    let samevalue = true;
  
  for(let j = 0; j< itemsToRemove.length; j++){
  if(source[i] === itemsToRemove[j]){
    samevalue = false;
  }
}

if(samevalue){
  result.push(source[i]);
}
}
console.log(result);
return result;
};

////test//////
console.log(""); 
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]