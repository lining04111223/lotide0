const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅   Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//module.exports = assertObjectsEqual;
////////////////////////////////
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

//////////////////////////////
const eqObjects = function(obj1, obj2) {
  
  //length of keys
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  //obj1[key] = value of object
  for (const key in obj1) {
    //if the value of object is an array 
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (eqArrays(obj1[key], obj2[key])) {
        //goes to next iteration of for loop
        continue
      } else {
        return false;
      }
    }

    //if value of the object are equal 
    if (obj1[key] !== obj2[key]) {
      return false;
    }

  } return true;
};

//TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab,ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);// => false