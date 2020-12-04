// SCRIPTS
// Move vertically down a slope in a specific pattern and count the number of trees (#) you hit
const toboggan = (arr, rightMove, downMove) => {
  // Start at upper left (arr[0][0])
  let stepRight = 0;

  // Keep track of the number of trees you land on
  let treeCount = 0;

  // Each row of the repeated pattern has the same width
  const width = arr[0].length;

  // Go down the slope, starting at 0,0
  for (let stepDown = 0; stepDown < arr.length; stepDown += downMove) {

    // Pattern repeats left to right, so go back to beginning of string
    let stepRightAdjusted = stepRight % width;

    // Tree encounter
    if (arr[stepDown][stepRightAdjusted] === '#') {
      treeCount++;
    }

    // Slope direction of toboggan
    stepRight += rightMove;
  }

  return treeCount;
}

// Part 1 - Go right 3 spaces and down 1 - Count the trees you encounter
function slide1(terrain) {
  return toboggan(terrain, 3, 1);
}

// Part 2 - Go down the slope in multiple patterns and multiply the trees you find in each run by each other
function slide2(terrain) {
  const product = toboggan(terrain, 1, 1) *
    toboggan(terrain, 3, 1) *
    toboggan(terrain, 5, 1) *
    toboggan(terrain, 7, 1) *
    toboggan(terrain, 1, 2);

  return product;
}

// TEMPLATE
// Get output areas
const part1Test = document.getElementById("part1Test");
const part2Test = document.getElementById("part2Test");
const part1Challenge = document.getElementById("part1Challenge");
const part2Challenge = document.getElementById("part2Challenge");

// Test to confirm output
part1Test.textContent = slide1(testArray);
part2Test.textContent = slide2(testArray);

// Run challenge data and get output
part1Challenge.textContent = slide1(challengeArray);
part2Challenge.textContent = slide2(challengeArray);