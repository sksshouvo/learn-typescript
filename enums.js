// example of Numeric Enums - Default
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
;
var currentDirection = CardinalDirections.North;
// North is the first value so it logs '0'
console.log("currentDirection", currentDirection);
// Numeric Enums - Initialized
// You can set the value of the first numeric enum and have it auto increment from that:
var CardinalDirectionsInitialized;
(function (CardinalDirectionsInitialized) {
    CardinalDirectionsInitialized[CardinalDirectionsInitialized["North"] = 1] = "North";
    CardinalDirectionsInitialized[CardinalDirectionsInitialized["East"] = 2] = "East";
    CardinalDirectionsInitialized[CardinalDirectionsInitialized["South"] = 3] = "South";
    CardinalDirectionsInitialized[CardinalDirectionsInitialized["West"] = 4] = "West";
})(CardinalDirectionsInitialized || (CardinalDirectionsInitialized = {}));
var currentDirectionInit = CardinalDirectionsInitialized.West;
console.log(currentDirectionInit);
// example of number enum values
var employeeTypes;
(function (employeeTypes) {
    employeeTypes[employeeTypes["INTERNS"] = 10] = "INTERNS";
    employeeTypes[employeeTypes["PARMANENT"] = 20] = "PARMANENT";
    employeeTypes[employeeTypes["OTHERS"] = 30] = "OTHERS";
})(employeeTypes || (employeeTypes = {}));
var officeEmployeeCount = employeeTypes.INTERNS;
console.log(officeEmployeeCount);
// example of string enum values
var colors;
(function (colors) {
    colors["WHITE"] = "WHITE";
    colors["RED"] = "RED";
    colors["BLUE"] = "BLUE";
})(colors || (colors = {}));
var defineColors = colors.RED;
console.log(defineColors);
// export {}
