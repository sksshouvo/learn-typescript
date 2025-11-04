// string array example
const superHeros: string[] = []
superHeros.push("Spider-Man")
superHeros.push("Hulk")
console.log(superHeros)
// string array example

// number array example
const countPower: number[] = []
countPower.push(1)
countPower.push(10)
console.log(countPower)
// number array example

// object array example
type Users = {
    name: string,
    age: number
}

const allUsers: Users[] = []

allUsers.push({name: "Salman Kabir", age: 33})
allUsers.push({name: "Tasnim rejuana Tanha", age: 26})
console.log(allUsers)
// object array example

// different way to casting types for array
const countryArray: Array <string>= []
countryArray.push("Bangladesh")

console.log(countryArray)
// different way to casting types for array
// export {}