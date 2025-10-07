// example of number type functions
let myNumber: number

function addNumber(num: number) {
    return num + 2
}

myNumber = addNumber(10)

console.log(myNumber)

// example of number type functions

// example of string type functions

let username: string;

function writeMyusername (val: string) {
    val.toLocaleUpperCase()
    return val
}

username = writeMyusername("sksshouvo")

console.log(username)
// example of string type functions

// example of boolean type and arrow functions
let userLoggedIn: boolean = false;

function login (userPrompt: boolean) {
    if(userLoggedIn == false && userPrompt == true) {
        userLoggedIn = userPrompt
    }
}

login(true)

console.log(userLoggedIn)


// example of several types and arrow functions
let userDetails: {name: string, email: string, user_type: string};

function signUpUser (name: string, email: string, isPaid: boolean) {
    if (name && email && isPaid) {
        userDetails = {name: name, email: email, user_type: "paid"}
    }
}

signUpUser("Salman kabir", "sksshouvo2@gmail.com", true)

console.log(userDetails)

// example of several types and arrow functions

// example of arrow functions

let loggedInUser = (name: string, email: string, isPaid: boolean = false) => {}

loggedInUser("Sallman kabir", "sksshouvo2@gmail.com", true)

// export {}