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

////exports
module.exports = middle;