const assertEqual = function(actual, expected) {
  console.log(actual);
  console.log(expected);
  if (Array.isArray(actual) && Array.isArray(expected) && actual.length === expected.length && actual.every((val, index) => val === expected[index])){
    console.log("assertion passed👍🏽🙂");
  } else
    console.log("assertion failed😏😏");

};

const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;
};
assertEqual(tail([5,6,7]),[6,7]);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
