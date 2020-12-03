// SCRIPTS
// Part 1 - Find the product of the two entries that add up to the sum
function multSum1(sum, arr) {
  // First number starts at 0 and goes to end of array minus 1 place
  for (let i = 0; i < arr.length - 1; i++) {
    // Second number starts at 1 and goes to end of array
    for (let j = i + 1; j < arr.length; j++) {
      if (sum == (arr[i] + arr[j])) {
        // Found it! Return the product
        return (arr[i] * arr[j]);
      }
    }
  }
  // Didn't find it - return null
  return null;
}

// Part 2 - Find the product of the three entries that add up to the sum
function multSum2(sum, arr) {
  // First number starts at 0 and goes to end of array minus 2 places
  for (let i = 0; i < arr.length - 2; i++) {
    // Second number starts at 1 and goes to end of array minus 1 place
    for (let j = i + 1; j < arr.length - 1; j++) {
      // Third number starts at 1 and goes to end of array
      for (let k = j + 1; k < arr.length; k++) {
        // Found it! Return the product
        if (sum === (arr[i] + arr[j] + arr[k])) {
          return (arr[i] * arr[j] * arr[k]);
        }
      }
    }
  }
  // Didn't find it - return null
  return null;
}

// TEMPLATE
// Get output areas
const part1Test = document.getElementById("part1Test");
const part2Test = document.getElementById("part2Test");
const part1Challenge = document.getElementById("part1Challenge");
const part2Challenge = document.getElementById("part2Challenge");

// Test to confirm output
part1Test.textContent = multSum1(2020, testArray);
part2Test.textContent = multSum2(2020, testArray);

// Run challenge data and get output
part1Challenge.textContent = multSum1(2020, challengeArray);
part2Challenge.textContent = multSum2(2020, challengeArray);