const assertArraysEqual = function(array1, array2) {
  if(eqArrays(array1, array2)) {
    console.log(`assertion passed👍🏽🙂 :  ${array1} === ${array2}`);
  } else
    console.log(`assertion failed😏😏 :  ${array1}  !==  ${array2}`);
};

     const assertEqual = function(actual, expected) {
      if (actual === expected) {
        console.log(`assertion passed👍🏽🙂 :  ${actual} === ${expected}`);
      } else
        console.log(`assertion failed😏😏 :  ${actual}  !==  ${expected}`);
    };
    
    const eqArrays = function ( arr1, arr2 ){
      let equal = true;
       if (arr1.length !== arr2.length ){
         return !equal;
       }else {
       for( let i = 0; i < arr1.length; i++){
          if (arr1[i] === arr2[i]) {
            equal = true;
       } else {
          equal = false;
          break;
       }
       }
      }
       return equal;
         };
    
     const without = function(source, itemsToRemove){
       let result = [];
       let equalValue = false;
       const equalArrays = eqArrays(source, itemsToRemove);
       if(equalArrays === true){
         return result;
       }else {
         for (let i = 0; i < source.length; i++){
           for(let j = 0; j < itemsToRemove.length; j++){
             if(source[i] === itemsToRemove[j]){
             equalValue = true; 
             break;
           } else {
              equalValue = false;
           }  
         }
         if(equalValue === false){
         result.push(source[i]);
        }
      }
    }
   return result;
};  
 assertArraysEqual(without([1, 2, 3], [1]),[3]);
 assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),[1, 2]); 
 assertArraysEqual(without([1, 2, 3], [1, 2]),[3]);