const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(obj) {
  const results = {}
  for (let item of obj) {
    if (item !== " ") { 
      if (results[item]) {
      results[item] += 1;
      } else {
      results[item] = 1;
      }
    }
  }
console.log(results);
}

countLetters("lighthouse in the house");