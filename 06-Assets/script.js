// SCRIPTS
// Part 1 - Find all questions with a yes answer in the group
function checkQuestionairre(questionArray) {
  let runningSum = 0;

  // Loop through each set of groups
  for (let i = 0; i < questionArray.length; i++) {
    let obj = {};
    //Find out which questions the group answered yes to and store them in an object/hash
    for (let j = 0; j < questionArray[i].length; j++) {
      if (questionArray[i][j] !== '-') { // - will be used later to indicate each person's response
        if (obj[questionArray[i][j]]) {
          // If property exists, increase value by one
          obj[questionArray[i][j]]++;
        } else {
          // Add the property with a value of one if it does not exist
          obj[questionArray[i][j]] = 1;
        }
      }
    }
    // Add up all the object's unique properties to get the questions anyone in the group answered yes to
    runningSum += Object.keys(obj).length;
  }
  return runningSum;
}

// Part 2 - 
function checkQuestionairre2(questionArray) {
  let runningSum = 0;
  //Find out which questions the group answered yes to and store them in an object/hash
  for (let i = 0; i < questionArray.length; i++) {
    let obj = {};
    let peopleCount = 0;
    for (let j = 0; j < questionArray[i].length; j++) {
      if (questionArray[i][j] === '-') { // - indicates a unique person in the group
        peopleCount++;
      } else {
        if (obj[questionArray[i][j]]) {
          // If property exists, increase value by one
          obj[questionArray[i][j]]++;
        } else {
          // Add the property with a value of one if it does not exist
          obj[questionArray[i][j]] = 1;
        }
      }
    }
    // Loop through all the properties in the object/hash
    for (var prop in obj) {
      // If the number of yes answers for a question equals the number of people in that group, increase count by one
      if (obj[prop] === peopleCount) {
        runningSum++;
      }
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

// Test to confirm output
part1Test.textContent = checkQuestionairre(testArray);
part2Test.textContent = checkQuestionairre2(testArray);

// // Run challenge data and get output
part1Challenge.textContent = checkQuestionairre(challengeArray);
part2Challenge.textContent = checkQuestionairre2(challengeArray);
