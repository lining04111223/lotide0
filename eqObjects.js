const eqArrays = require('./eqArrays');

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


////exports
module.exports = eqObjects;