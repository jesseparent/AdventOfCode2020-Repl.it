// SCRIPTS
// Part 1 - Check what bags will eventually contain the target bag
let bagsChecked = []; // Make sure no bags get added twice
function checkLuggage(bagArray, target) {
  let runningSum = 0;
  let moreToCheck = []; // Bags that will have to be checked to see if they are inside of other bags
  // Go through array of bags
  for (let i = 0; i < bagArray.length; i++) {
    // Go through every bag that is contained in the bag being checked
    for (let j = 0; j < bagArray[i].contains.length; j++) {
      // If the bag being checked contains the target and hasn't already been checked
      if ((bagArray[i].contains[j].bag === target) && (!bagsChecked.includes(bagArray[i].name))) {
        bagsChecked.push(bagArray[i].name); // Flag this bag as checked
        moreToCheck.push(bagArray[i]); // Make this a potential target to search other bags for
        runningSum++;
      }
    }
  }

  // Check to see if other bags containing target are inside other bags
  for (let i = 0; i < moreToCheck.length; i++) {
    runningSum += checkLuggage(bagArray, moreToCheck[i].name)
  }
  return runningSum;
}

// Part 2 - Count how many bags the target has inside of it
function countLuggage(bagArray, target) {
  let runningSum = 0;
  // Go through array of bags
  for (let i = 0; i < bagArray.length; i++) {
    // If we found the target bag
    if (bagArray[i].name === target) {
      // Check for how many bags the target contains
      for (let j = 0; j < bagArray[i].contains.length; j++) {
        // Add the number of bags plus however many bags those bags also contain
        runningSum += bagArray[i].contains[j].q + (bagArray[i].contains[j].q * countLuggage(bagArray, bagArray[i].contains[j].bag));
      }
      break; // Break out of for loop
    }
  }
  return runningSum;
}


// Helper Functions

// TEMPLATE
// Get output areas
const part1Test = document.getElementById("part1Test");
const part2Test = document.getElementById("part2Test");
const part1Challenge = document.getElementById("part1Challenge");
const part2Challenge = document.getElementById("part2Challenge");

//Test to confirm output
part1Test.textContent = checkLuggage(testArray, "shiny_gold");
bagsChecked = [];
part2Test.textContent = countLuggage(testArray, "shiny_gold");

// // Run challenge data and get output
part1Challenge.textContent = checkLuggage(challengeArray, "shiny_gold");
part2Challenge.textContent = countLuggage(challengeArray, "shiny_gold");
