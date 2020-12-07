// SCRIPTS
// Part 1 - 
function checkLuggage(bagArray) {
  let runningSum = 0;
  for (let i = 0; i < bagArray.length; i++) {
    runningSum += examineContents(bagArray[i], "shiny_gold");
  }

  return runningSum;
}

// Part 2 - 
function checkLuggage2(questionArray) {

}


// Helper Functions
function examineContents(bag, target) {
  // console.log(bag.contains)
  // console.log(" , " + target)
  retVal = 0;
  if (bag.contains.length == 0) {
    return 0;
  }
  else {
    for (let i = 0; i < bag.contains.length; i++) {
      if (bag.contains[i].bag === target) {
        // console.log(i + " " + bag.contains[i].bag + " === " + target);
        return 1;
      }
      else {
        eval("retVal = examineContents(" + bag.contains[i].bag + ", target);");
      }
    }
  }
  return retVal;
}

// TEMPLATE
// Get output areas
const part1Test = document.getElementById("part1Test");
const part2Test = document.getElementById("part2Test");
const part1Challenge = document.getElementById("part1Challenge");
const part2Challenge = document.getElementById("part2Challenge");

// Test to confirm output
part1Test.textContent = checkLuggage(testArray);
// part2Test.textContent = checkQuestionairre2(testArray);

// // Run challenge data and get output
part1Challenge.textContent = checkLuggage(challengeArray);
// part2Challenge.textContent = checkQuestionairre2(challengeArray);
