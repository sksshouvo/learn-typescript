function getVal(myVal: number): boolean|string {
    if (myVal > 5) {
        return true
    }

    return "200 OK"
}

console.log(getVal(10))

const getHello = (name: string): string => {
    return name
}

console.log(getHello("Hello Salman Kabir"))

let heroName: string[];

const heros = ["SuperMan", "BatMan", "Flash"];

heroName = heros.map((hero: string): string => {
    if (hero === "Flash") {
        return `The fastest man alive is ${hero}`
    }

    return `This is the ultimate hero ${hero}`
})

console.log(heroName)

function consoleError(errorMsg: string): void {
    console.log(errorMsg)
}

consoleError("Something Went Wrong, Please Contact Service provider!")

function handleError(msg: string): never {
  throw new Error(msg);
}

handleError("Your syntax is wrong!")

// export {}