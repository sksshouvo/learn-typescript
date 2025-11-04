"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// union example for variables
let scores;
scores = 20;
scores = "Twenty";
console.log(scores);
let Salman = {
    name: "Salman kabir",
    id: 123321
};
Salman = { username: "sksshouvo", id: 321123 };
console.log(Salman);
// union example for functions
function getStudentsIds(id) {
    if (typeof id === "string") {
        id.toUpperCase();
    }
    else {
        id * 1;
    }
    console.log(id);
}
getStudentsIds(123321);
getStudentsIds("321123");
// union example for arrays
const data = [1, 2, 3];
const data2 = ["1", "2", "3"];
const data3 = ["1", "2", 3];
// strict type allocation
let seatAllocation;
seatAllocation = "aisle";
console.log(seatAllocation);
// seatAllocation = "crew" (Not working example)
// export {}
//# sourceMappingURL=union.js.map