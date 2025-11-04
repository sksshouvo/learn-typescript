// Typed Arrays
// A tuple is a typed array with a pre-defined length and types for each index.

// Tuples are great because they allow each element in the array to be a known type of value.

// To define a tuple, specify the type of each element in the array:

// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

// ourTuple = [false, 5, 'Coding God was here'];

console.log(ourTuple);

// example of object type for tuples

type animals = [string]

let typeOfAnimalArray: animals = ["Mamals"]

console.log(typeOfAnimalArray)
export {}