// Try playing around with modifying properties and adding ones to see what happens
const car: { type: string, model: string, year: number, engine: string } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009,
  engine: "V8"
};

console.log(car);

// example of type inference
const language = {
    name: "Bengali"
}

language.name = 2

console.log(language)
// example of type inference

// example of optional property

const furniture: { type: string, dimension?: string } = {
  type: "Sofa"
};

furniture.dimension = "200x300";

console.log(furniture);
// example of optional property

// example of object types and functions
function createNewUser ({name: string, isPaid: boolean}) {}

let newUser = {name: "Salman kabir", isPaid: false}

createNewUser(newUser)

function createCourse(): {name: string, price: number}{
    return {name: "Python course", price: 100}
}

console.log(createCourse())
// example of object types and functions

// export {}