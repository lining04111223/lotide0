const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅   Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;
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

module.exports = eqArrays;

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
assertEqual(eqObjects(ab, ba),true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), true); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true