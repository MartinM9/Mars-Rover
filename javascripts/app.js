// Our testing grid 10x10
var grid = [
  ["x0, y0", "x1, y0", "x2, y0", "x3, y0", "x4, y0", "x5, y0", "x6, y0", "x7, y0", "x8, y0", "x9, y0"],
  ["x0, y1", "x1, y1", "x2, y1", "x3, y1", "x4, y1", "x5, y1", "x6, y1", "x7, y1", "x8, y1", "x9, y1"],
  ["x0, y2", "x1, y2", "x2, y2", "x3, y2", "x4, y2", "x5, y2", "x6, y2", "x7, y2", "x8, y2", "x9, y2"],
  ["x0, y3", "x1, y3", "x2, y3", "x3, y3", "x4, y3", "x5, y3", "x6, y3", "x7, y3", "x8, y3", "x9, y3"],
  ["x0, y4", "x1, y4", "x2, y4", "x3, y4", "x4, y4", "x5, y4", "x6, y4", "x7, y4", "x8, y4", "x9, y4"],
  ["x0, y5", "x1, y5", "x2, y5", "x3, y5", "x4, y5", "x5, y5", "x6, y5", "x7, y5", "x8, y5", "x9, y5"],
  ["x0, y6", "x1, y6", "x2, y6", "x3, y6", "x4, y6", "x5, y6", "x6, y6", "x7, y6", "x8, y6", "x9, y6"],
  ["x0, y7", "x1, y7", "x2, y7", "x3, y7", "x4, y7", "x5, y7", "x6, y7", "x7, y7", "x8, y7", "x9, y7"],
  ["x0, y8", "x1, y8", "x2, y8", "x3, y8", "x4, y8", "x5, y8", "x6, y8", "x7, y8", "x8, y8", "x9, y8"],
  ["x0, y9", "x1, y9", "x2, y9", "x3, y9", "x4, y9", "x5, y9", "x6, y9", "x7, y9", "x8, y9", "x9, y9"],
];

// Our rover object
var rover = {
  direction: ["N", "S", "E", "W"],
  x: 0,
  y: 0
}

// Variable that declares current direction of the rover
var roverActualDirection = "N";

// Function which turns the rover to the left side
function turnLeft() {
  if (roverActualDirection === "N") {
    roverActualDirection = rover.direction[3];
  } else if (roverActualDirection === "W") {
    roverActualDirection = rover.direction[1];
  } else if (roverActualDirection === "S") {
    roverActualDirection = rover.direction[2];
  } else {
    roverActualDirection = rover.direction[0];
  }

  console.log("turnLeft was called!");
}

// Function which turns the rover to the right side
function turnRight() {
  if (roverActualDirection === "N") {
    roverActualDirection = rover.direction[2];
  } else if (roverActualDirection === "E") {
    roverActualDirection = rover.direction[1];
  } else if (roverActualDirection === "S") {
    roverActualDirection = rover.direction[3];
  } else {
    roverActualDirection = rover.direction[0];
  }

  console.log("turnRight was called!");
}

// Function which moves the rover forward
function moveForward() {
  if (roverActualDirection === "N") {
    rover.y = rover.y - 1;
  } else if (roverActualDirection === "W") {
    rover.x = rover.x - 1;
  } else if (roverActualDirection === "S") {
    rover.y = rover.y + 1;
  } else if (roverActualDirection === "E") {
    rover.x = rover.x + 1;
  }

  console.log("moveForward was called");
}

// Function which moves the rover backwards
function moveBackwards() {
  if (roverActualDirection === "N") {
    rover.y = rover.y + 1;
  } else if (roverActualDirection === "W") {
    rover.x = rover.x + 1;
  } else if (roverActualDirection === "S") {
    rover.y = rover.y - 1;
  } else if (roverActualDirection === "E") {
    rover.x = rover.x - 1;
  }

  console.log("moveBackwards was called");
}

// Our travel log which is currently an empty array. Later on there will be stored values of rover's path.
var travelLog = [];

// Declaring alert message, if the rover wants to go off the grid
var alertMessage = "You went almost off the grid! Turn your rover oder way!";

// Commands function. If we write "f" as an argument, the moveForward() function will be called, etc..
function commands(string) {
  var stringArr = string.split("");
  for (var i = 0; i < stringArr.length; i++) {
    
    if (stringArr[i].toUpperCase() === "F") {
      moveForward();
    } else if (stringArr[i].toUpperCase() === "R") {
      turnRight();
    } else if (stringArr[i].toUpperCase() === "L") {
      turnLeft();
    } else if (stringArr[i].toUpperCase() === "B")  {
      moveBackwards();
    } else {
      console.log('"' + stringArr[i] + '"' + ' is false input. Please write only valid inputs "f", "b", "r" or "l".')
    }
    
    // In case our rover would went out of the grid, this condition will stop the rover!
    if (rover.y < 0) {
      rover.y = rover.y + 1;
      console.log(alertMessage);
    } else if (rover.x < 0) {
      rover.x = rover.x + 1;
      console.log(alertMessage);
    } else if (rover.y > 9) {
      rover.y = rover.y - 1;
      console.log(alertMessage);
    } else if (rover.x > 9) {
      rover.x = rover.x - 1;
      console.log(alertMessage);
    }
    
    travelLog.push(grid[rover.y][rover.x]);    
  }
}



// Please type your directions and moves as commands function arguments: eg. commands("rfrflr")
// "f" stands for moveForward
// "b" stands for backwards
// "r" stands for turnRight
// "l" stands for turnLeft

commands("rfflfrrflffffvffffrfa");

console.log(travelLog);
