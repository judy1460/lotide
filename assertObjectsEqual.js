
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

         const eqObjects = function(object1, object2) {
          if(Object.keys(object1).length !== Object.keys(object2).length){
            return false;
          }
            for(let element in object1){
                if ( Array.isArray(object1[element]) && Array.isArray(object2[element])){
                  if(!eqArrays(object1[element], object2[element])){
                    return false;
                  }else {
                    if(object1[element] !== object2[element]){
                      return false;
                    }
                  }
                }
              }
              return true;
            }
    

    const assertObjectsEqual = function(actual, expected) {
      const inspect = require('util').inspect; 
      let failEmoji = String.fromCodePoint(0x1F534);
  let passEmoji = String.fromCodePoint(0x2705);
  if(eqObjects(actual, expected)){
    console.log(`${passEmoji}${passEmoji}${passEmoji} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`${failEmoji}${failEmoji}${failEmoji} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`) 
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
 assertObjectsEqual(ab, ba); // => true

 const abc = { a: "1", b: "2", c: "3" };
 assertObjectsEqual(ab, abc); // => false
