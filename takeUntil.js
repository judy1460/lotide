
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
     
     const takeUntil = function(array, callback) {
      const result = [];
      for(item of array){
        if(!callback(item)){
          result.push(item)
        } else return result;
      }
      return result;
    }

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);
