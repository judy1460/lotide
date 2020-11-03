const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`assertion passed👍🏽🙂 :  ${actual} === ${expected}`);
  } else
    console.log(`assertion failed😏😏 :  ${actual}  !==  ${expected}`);
};
const findKeyByValue = function(object1, value){
for (const element in object1){
  if(object1[element] === value){
    return value;
  }
}
return undefined;
};


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
module.exports = findKeyByValue;
/*assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);*/