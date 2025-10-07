function getVal(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
console.log(getVal(10));
var getHello = function (name) {
    return name;
};
console.log(getHello("Hello Salman Kabir"));
var heroName;
var heros = ["SuperMan", "BatMan", "Flash"];
heroName = heros.map(function (hero) {
    if (hero === "Flash") {
        return "The fastest man alive is ".concat(hero);
    }
    return "This is the ultimate hero ".concat(hero);
});
console.log(heroName);
// export {}
