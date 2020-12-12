// SCRIPTS
// Part 1 - Navigate according to directions
function navigate(directions) {
  // Position of ship
  let x = 0;
  let y = 0;

  let currentDirection = 'E';

  // New direction when turning left
  let leftTurn = {
    "E": "N",
    "N": "W",
    "W": "S",
    "S": "E"
  }

  // New direction when turning right
  let rightTurn = {
    "E": "S",
    "N": "E",
    "W": "N",
    "S": "W"
  }

  // Positive or negative direction if moving in a certain direction
  let forwardDirection = {
    "E": 1,
    "N": 1,
    "W": -1,
    "S": -1
  }

  // Go through navigational instructions
  for (let i = 0; i < directions.length; i++) {
    // Break apart the current instruction
    let direction = directions[i].slice(0, 1);
    let value = parseInt(directions[i].slice(1));

    switch (direction) {
      // move ship
      case "E":
        x += value;
        break;
      case "W":
        x -= value;
        break;
      case "N":
        y += value;
        break;
      case "S":
        y -= value;
        break;
      case "L":
        // turn in 90 degree increments
        while (value > 0) {
          currentDirection = leftTurn[currentDirection];
          value -= 90;
        }
        break;
      case "R":
        // turn in 90 degree increments
        while (value > 0) {
          currentDirection = rightTurn[currentDirection];
          value -= 90;
        }
        break;
      case "F":
        // Move in current direction
        if (["E", "W"].includes(currentDirection)) {
          x += forwardDirection[currentDirection] * value;
        } else {
          y += forwardDirection[currentDirection] * value;
        }
        break;
      default:
        // invalid direction
        break;

    }
  }
  // Return Manhattan distance (sum of absolute values of position)
  return Math.abs(x) + Math.abs(y);
}


// Part 2 - Find a Waypoint and get there based on directions
function navigate2(directions) {
  // Position of ship
  let x = 0;
  let y = 0;
  // Position of Waypoint
  let wayX = 10;
  let wayY = 1;

  let currentDirection = 'E';
  // New direction when turning left
  let leftTurn = {
    "E": "N",
    "N": "W",
    "W": "S",
    "S": "E"
  }
  // New direction when turning right
  let rightTurn = {
    "E": "S",
    "N": "E",
    "W": "N",
    "S": "W"
  }

  for (let i = 0; i < directions.length; i++) {
    // Break apart the current instruction
    let direction = directions[i].slice(0, 1);
    let value = parseInt(directions[i].slice(1));

    switch (direction) {
      // Move waypoint
      case "E":
        wayX += value;
        break;
      case "W":
        wayX -= value;
        break;
      case "N":
        wayY += value;
        break;
      case "S":
        wayY -= value;
        break;
      case "L":
        // turn in 90 degree increments
        while (value > 0) {
          let tmp = wayX;
          wayX = wayY * -1; // X direction is opposite of Y direction
          wayY = tmp;
          currentDirection = leftTurn[currentDirection];
          value -= 90;
        }
        break;
      case "R":
        // turn in 90 degree increments
        while (value > 0) {
          let tmp = wayX;
          wayX = wayY;
          wayY = tmp * -1; // Y direction is opposite of X direction
          currentDirection = rightTurn[currentDirection];
          value -= 90;
        }
        break;
      case "F":
        // Move ship to waypoint a set of times
        x += wayX * value;
        y += wayY * value
        break;
      default:
        // invalid direction
        break;
    }
  }
  // Return Manhattan distance (sum of absolute values of position)
  return Math.abs(x) + Math.abs(y);
}


// Helper Functions


// TEMPLATE
// Get output areas
const part1Test = document.getElementById("part1Test");
const part2Test = document.getElementById("part2Test");
const part1Challenge = document.getElementById("part1Challenge");
const part2Challenge = document.getElementById("part2Challenge");

// Test to confirm output
part1Test.textContent = navigate(testArray);
part2Test.textContent = navigate2(testArray);

// Run challenge data and get output

part1Challenge.textContent = navigate(challengeArray);
part2Challenge.textContent = navigate2(challengeArray);