const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`assertion passed👍🏽🙂 :  ${actual} === ${expected}`);
  } else
    console.log(`assertion failed😏😏 :  ${actual}  !==  ${expected}`);
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

    module.exports = eqObjects;
/*const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false*/