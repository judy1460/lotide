
const assertArraysEqual = function(array1, array2) {
  if(eqArrays(array1, array2)) {
    console.log(`assertion passed👍🏽🙂 :  ${array1} === ${array2}`);
  } else
    console.log(`assertion failed😏😏 :  ${array1}  !==  ${array2}`);
};

const eqArrays = function(arr1, arr2) {
  let equal = true;
   if(arr1.length !== arr2.length) {
     return !equal;
   } else
   for(let i = 0; i < arr1.length; i++){
      if(arr1[i] === arr2[i]) {
        equal = true;
   } else {
      equal = false;
      break;
   }
  }
   return equal;

     };
     
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
assertArraysEqual((results1), [ 'g', 'c', 't', 'm', 't' ]);