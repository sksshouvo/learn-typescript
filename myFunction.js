// example of number type functions
var myNumber;
function addNumber(num) {
    return num + 2;
}
myNumber = addNumber(10);
console.log(myNumber);
// example of number type functions
// example of string type functions
var username;
function writeMyusername(val) {
    val.toLocaleUpperCase();
    return val;
}
username = writeMyusername("sksshouvo");
console.log(username);
// example of string type functions
// example of boolean type and arrow functions
var userLoggedIn = false;
function login(userPrompt) {
    if (userLoggedIn == false && userPrompt == true) {
        userLoggedIn = userPrompt;
    }
}
login(true);
console.log(userLoggedIn);
// example of several types and arrow functions
var userDetails;
function signUpUser(name, email, isPaid) {
    if (name && email && isPaid) {
        userDetails = { name: name, email: email, user_type: "paid" };
    }
}
signUpUser("Salman kabir", "sksshouvo2@gmail.com", true);
console.log(userDetails);
// example of several types and arrow functions
// example of arrow functions
var loggedInUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loggedInUser("Sallman kabir", "sksshouvo2@gmail.com", true);
// export {}
