// read only object type example
type book = {
    readonly _id: string,
    name: string,
    author: string,
    publishingYear?: number
}

let bookDeatils: book = {
    _id: "123321",
    name: "Himur Moddho dupur",
    author: "Humayun Ahmed"
}

bookDeatils.name = "Holud Himu kalo Rab"
// bookDeatils._id = "321123" (This is to demonstrate that how works readonly)
// read only object type example

// optional object type example
type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv : number
}
// optional object type example