// SCRIPTS
// Part 1 - Check if immediate area to see if seat is occupied and what should be done
function seatingCheck(seating) {
  let resultArr = [];
  // Multidimensional array clone
  resultArr = seating.map(function (arr) {
    return arr.slice();
  });
  let moves = 0;

  // Go through grid (Y is first array coord, X is second)
  for (let y = 0; y < seating.length; y++) {
    for (let x = 0; x < seating[y].length; x++) {
      // Check how many occupied seats are around this seat, unless this is the floor (.)
      let checkOccupied = (seating[y][x] === '.' ? 0 : checkCoord(seating, x, y, '#'));
      // If this is an empty seat and there are not occupied seats around, fill it
      if (seating[y][x] === 'L') {
        if (checkOccupied === 0) {
          resultArr[y][x] = '#';
          moves++; // Movement occurred
        }
      }
      // If this is an occupied seat with 4 or more occupied seats around it, empty it 
      else if (seating[y][x] === '#') {
        if (checkOccupied >= 4) {
          resultArr[y][x] = 'L';
          moves++; // Movement occurred
        }
      }
    }
  }

  // Package result object
  let resultObj = {
    moves: moves,
    grid: resultArr
  }
  return resultObj;
}

// Part 2 - Check each vector for occupied of empty seats to see what should be done
function seatingCheck2(seating) {
  let resultArr = [];
  // Multidimensional array clone
  resultArr = seating.map(function (arr) {
    return arr.slice();
  });
  let moves = 0;

  // Go through grid (Y is first array coord, X is second)
  for (let y = 0; y < seating.length; y++) {
    for (let x = 0; x < seating[y].length; x++) {
      // Check how many occupied seats are in any direction around this seat, unless this is the floor (.)
      let checkOccupied = (seating[y][x] === '.' ? 0 : checkCoord2(seating, x, y, '#'));
      // If this is an empty seat and there are not occupied seats in sight in any direction, fill it
      if (seating[y][x] === 'L') {
        if (checkOccupied === 0) {
          resultArr[y][x] = '#';
          moves++; // Movement occurred
        }
      }
      // If this is an occupied seat with 5 or more occupied seats in sight in any direction, empty it 
      else if (seating[y][x] === '#') {
        if (checkOccupied >= 5) {
          resultArr[y][x] = 'L';
          moves++; // Movement occurred
        }
      }
    }
  }

  /// Package result object
  let resultObj = {
    moves: moves,
    grid: resultArr
  }
  return resultObj;
}


// Helper Functions
// Check all adjacent seats in any direction, unless this seat is at an edge
function checkCoord(arr, x, y, charCheck) {
  let adjacentCount = 0;
  let leftCheck = (x - 1) >= 0;
  let rightCheck = (x + 1) < arr[y].length;
  let upCheck = (y - 1) >= 0;
  let downCheck = (y + 1) < arr.length;

  // Left
  if (leftCheck && arr[y][x - 1] === charCheck) {
    adjacentCount++;
  }
  // Upper Left
  if (leftCheck && upCheck && arr[y - 1][x - 1] === charCheck) {
    adjacentCount++;
  }
  // Up
  if (upCheck && arr[y - 1][x] === charCheck) {
    adjacentCount++;
  }
  // Upper Right
  if (rightCheck && upCheck && arr[y - 1][x + 1] === charCheck) {
    adjacentCount++;
  }
  // Right
  if (rightCheck && arr[y][x + 1] === charCheck) {
    adjacentCount++;
  }
  // Lower Right
  if (rightCheck && downCheck && arr[y + 1][x + 1] === charCheck) {
    adjacentCount++;
  }
  // Down
  if (downCheck && arr[y + 1][x] === charCheck) {
    adjacentCount++;
  }
  // Lower Left
  if (leftCheck && downCheck && arr[y + 1][x - 1] === charCheck) {
    adjacentCount++;
  }

  return adjacentCount;
}

// Check all seats in any direction, unless this seat is at an edge
function checkCoord2(arr, x, y, charCheck) {
  let adjacentCount = 0;
  let leftCheck = (x - 1) >= 0;
  let rightCheck = (x + 1) < arr[y].length;
  let upCheck = (y - 1) >= 0;
  let downCheck = (y + 1) < arr.length;

  // Left
  if (leftCheck) {
    adjacentCount += checkVector(arr, y, x, 0, -1, -1, -1);
  }
  // Upper Left
  if (leftCheck && upCheck) {
    adjacentCount += checkVector(arr, y, x, -1, -1, -1, -1);
  }
  // Up
  if (upCheck) {
    adjacentCount += checkVector(arr, y, x, -1, 0, -1, -1);
  }
  // Upper Right
  if (rightCheck && upCheck) {
    adjacentCount += checkVector(arr, y, x, -1, 1, -1, arr[y].length);
  }
  // Right
  if (rightCheck) {
    adjacentCount += checkVector(arr, y, x, 0, 1, -1, arr[y].length);
  }
  // Lower Right
  if (rightCheck && downCheck) {
    adjacentCount += checkVector(arr, y, x, 1, 1, arr.length, arr[y].length);
  }
  // Down
  if (downCheck) {
    adjacentCount += checkVector(arr, y, x, 1, 0, arr.length, arr[y].length);
  }
  // Lower Left
  if (leftCheck && downCheck) {
    adjacentCount += checkVector(arr, y, x, 1, -1, arr.length, -1);
  }

  return adjacentCount;
}

// Check a vector until an empty or filled seat is spotted
function checkVector(arr, y, x, yInc, xInc, yMax, xMax) {
  retVal = 0;
  x += xInc;
  y += yInc;
  while ((x !== xMax) && (y !== yMax)) {
    // Empty seat spotted, break
    if (arr[y][x] === 'L') {
      break;
    }
    // Filled seat spotted. Break and return 1
    else if (arr[y][x] === '#') {
      retVal = 1;
      break;
    }
    x += xInc;
    y += yInc;
  }
  return retVal;
}

// Count all occupied seats on the seating grid
function countOccupiedSeats(seating) {
  let occupiedSeats = 0;
  for (let y = 0; y < seating.length; y++) {
    for (let x = 0; x < seating[y].length; x++) {
      if (seating[y][x] === '#') {
        occupiedSeats++;
      }
    }
  }
  return occupiedSeats;
}

// TEMPLATE
// Get output areas
const part1Test = document.getElementById("part1Test");
const part2Test = document.getElementById("part2Test");
const part1Challenge = document.getElementById("part1Challenge");
const part2Challenge = document.getElementById("part2Challenge");

//Test to confirm output
// Loop until no movement detected
let testMovementObj = { moves: 0, grid: testArray };
do {
  testMovementObj = seatingCheck(testMovementObj.grid);
} while (testMovementObj.moves > 0);

part1Test.textContent = countOccupiedSeats(testMovementObj.grid);

// Loop until no movement detected
let testMovementObj2 = { moves: 0, grid: testArray };
do {
  testMovementObj2 = seatingCheck2(testMovementObj2.grid);
} while (testMovementObj2.moves > 0);

part2Test.textContent = countOccupiedSeats(testMovementObj2.grid);

// Run challenge data and get output
// Loop until no movement detected
let challengeMovementObj = { moves: 0, grid: challengeArray };
do {
  challengeMovementObj = seatingCheck(challengeMovementObj.grid);
} while (challengeMovementObj.moves > 0);
part1Challenge.textContent = countOccupiedSeats(challengeMovementObj.grid);

// Loop until no movement detected
let challengeMovementObj2 = { moves: 0, grid: challengeArray };
do {
  challengeMovementObj2 = seatingCheck2(challengeMovementObj2.grid);
} while (challengeMovementObj2.moves > 0);
part2Challenge.textContent = countOccupiedSeats(challengeMovementObj2.grid);