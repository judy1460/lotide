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
  
   assertArraysEqual([1, 2, 3], [1, 2, 3]);
    assertArraysEqual([2, 3, 4], [1, 2, "3"]);
     assertArraysEqual([1, 2, 3], [1, 2, 4]);
 