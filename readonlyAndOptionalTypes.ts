// read only and optional object type example
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
bookDeatils._id = "321123"
// read only and optional object type example