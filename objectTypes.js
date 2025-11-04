// Try playing around with modifying properties and adding ones to see what happens
var car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009,
    engine: "V8"
};
console.log(car);
// example of type inference
var language = {
    name: "Bengali"
};
language.name = 2;
console.log(language);
// example of type inference
// example of optional property
var furniture = {
    type: "Sofa"
};
furniture.dimension = "200x300";
console.log(furniture);
// example of optional property
// example of object types and functions
function createNewUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "Salman kabir", isPaid: false };
createNewUser(newUser);
function createCourse() {
    return { name: "Python course", price: 100 };
}
console.log(createCourse());
// example of object types and functions
// export {}
