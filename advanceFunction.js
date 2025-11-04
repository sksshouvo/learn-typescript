"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getVal(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
console.log(getVal(10));
const getHello = (name) => {
    return name;
};
console.log(getHello("Hello Salman Kabir"));
let heroName;
const heros = ["SuperMan", "BatMan", "Flash"];
heroName = heros.map((hero) => {
    if (hero === "Flash") {
        return `The fastest man alive is ${hero}`;
    }
    return `This is the ultimate hero ${hero}`;
});
console.log(heroName);
function consoleError(errorMsg) {
    console.log(errorMsg);
}
consoleError("Something Went Wrong, Please Contact Service provider!");
function handleError(msg) {
    throw new Error(msg);
}
handleError("Your syntax is wrong!");
// export {}
//# sourceMappingURL=advanceFunction.js.map