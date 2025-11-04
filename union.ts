// union example for variables
let scores: string | number
scores = 20
scores = "Twenty"
console.log(scores)
// union example for objects

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let Salman: User | Admin = {
    name: "Salman kabir",
    id: 123321
}

Salman = {username: "sksshouvo", id: 321123}


console.log(Salman)

// union example for functions
function getStudentsIds(id: string | number): void {
    if (typeof id === "string") {
        id.toUpperCase()
    } else {
        id * 1
    }

    console.log(id)
}

getStudentsIds(123321)
getStudentsIds("321123")
// union example for arrays
const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number)[] = ["1", "2", 3]

// strict type allocation

let seatAllocation: "aisle" | "middle" | "window"

seatAllocation = "aisle"

console.log(seatAllocation)
// seatAllocation = "crew" (Not working example)

// export {}