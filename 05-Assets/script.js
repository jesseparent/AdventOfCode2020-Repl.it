// SCRIPTS
// Part 1 - Check that each boarding pass
function checkBoardingPass(passArray) {
  let highestSeat = 0;
  for (let i = 0; i < passArray.length; i++) {
    let seatValue = findSeat(passArray[i]);

    if (seatValue > highestSeat) {
      highestSeat = seatValue;
    }
  }
  return highestSeat;
}

// Part 2 - Find missing boarding pass where front and back of plane are missing seats
function checkBoardingPass2(passArray) {
  let totalSeats = 1024;
  let missingFrontSeatsUntil = 68; // Missing seats in the front until this seat
  let missingBackSeatsFrom = 965; // Missing seats in the back from this seat on
  let seatArray = [];

  // Fill seat array with empty seats, except in front and back
  for (let i = 0; i < totalSeats; i++) {
    if (i < missingFrontSeatsUntil || i > missingBackSeatsFrom) {
      seatArray[i] = 'x'; // Seat is accounted for
    } else {
      seatArray[i] = '-'; // Seat is empty
    }
  }

  // Check each boarding pass in list and mark it as full
  for (let i = 0; i < passArray.length; i++) {
    // Find seat number
    let seatValue = findSeat(passArray[i]);

    // Mark seat as full
    seatArray[seatValue] = 'x';
  }

  // Return the empty seat
  return seatArray.indexOf('-');
}


// Helper Functions

// Find the seat based on the row and column
function findSeat(pass) {
  let row = findCoord(pass.slice(0, 7), 0, 'F', 127, 'B')
  let col = findCoord(pass.slice(7), 0, 'L', 7, 'R')
  let seatValue = (row * 8) + col;

  return seatValue;
}

// Check that a coordinate is within a low to high range
function findCoord(str, lower, lowerLetter, upper, upperLetter) {
  let result = 0;

  // Check range before final value
  for (let i = 0; i < str.length - 1; i++) {
    let midway = Math.floor((upper - lower) / 2);
    if (str[i] === lowerLetter) {
      upper = midway + lower;
    } else {
      lower = upper - midway;
    }
  }

  // Check final value
  if (str[str.length - 1] === lowerLetter) {
    result = lower;
  } else {
    result = upper;
  }

  return result;
}

// TEMPLATE
// Get output areas
const part1Test = document.getElementById("part1Test");
const part2Test = document.getElementById("part2Test");
const part1Challenge = document.getElementById("part1Challenge");
const part2Challenge = document.getElementById("part2Challenge");

// Test to confirm output
part1Test.textContent = checkBoardingPass(testArray);
// part2Test.textContent = checkBoardingPass2(testArray); // No Test result given for part 2
part2Test.textContent = 'N/A';

// Run challenge data and get output
part1Challenge.textContent = checkBoardingPass(challengeArray);
part2Challenge.textContent = checkBoardingPass2(challengeArray);
