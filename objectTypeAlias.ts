type User = {
    name: string,
    email: string,
    isActive: boolean
}

function createUser (user: User): User {
    if (user.email == "sksshouvo2@gmail.com") {
        return {name: "Salman kabir", email: user.email, isActive: true}

    }

    return {name: "", email: "", isActive: false}
}

console.log(createUser({name: "Salman Kabir", email: "sksshouvo2@gmail.com", isActive: true})) 