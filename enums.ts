// example of Numeric Enums - Default
enum CardinalDirections {
  North,
  East,
  South,
  West
};
            
let currentDirection = CardinalDirections.North;

// North is the first value so it logs '0'
console.log("currentDirection", currentDirection);

// Numeric Enums - Initialized
// You can set the value of the first numeric enum and have it auto increment from that:

enum CardinalDirectionsInitialized {
    North = 1,
    East,
    South,
    West
}

let currentDirectionInit = CardinalDirectionsInitialized.West

console.log(currentDirectionInit)

// example of number enum values
enum employeeTypes {
    INTERNS = 10,
    PARMANENT = 20,
    OTHERS = 30
}

const officeEmployeeCount = employeeTypes.INTERNS

console.log(officeEmployeeCount)

// example of string enum values

enum colors {
    WHITE = "WHITE",
    RED = "RED",
    BLUE = "BLUE"
}

const defineColors = colors.RED

console.log(defineColors)

// export {}