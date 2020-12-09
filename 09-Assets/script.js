// SCRIPTS
// Part 1 - Find the value that does not have two numbers in the preamble that sum up to it 
function xmasCipher(sequence, preambleLength) {
  let oddOneOut = 0;

  // Start after the preamble and determine if two numbers before this one do not sum up to it
  for (let i = preambleLength; i < sequence.length - 1; i++) {
    // Get the sum of the numbers in the preamble
    let preamble = getSums(sequence, preambleLength + i, i - preambleLength);

    // Determine if the number does not exist in the sums of the preamble
    if (!preamble.includes(sequence[i])) {
      oddOneOut = sequence[i];
      break;
    }
  }

  return oddOneOut;
}

// Part 2 - Find the sum of the lowest and highest number that sequentially add up to the number from the previous step
function xmasCipher2(sequence, sum) {
  let checkNumbers = [];

  // Go through sequence of numbers
  for (let i = 0; i < sequence.length; i++) {
    let sumIndex = i;
    // Find a series of contiguous numbers that add up to the number from the previous step
    while (sumIndex < sequence.length) {
      checkNumbers.push(sequence[sumIndex]);
      // Sum the numbers
      const sumCheck = checkNumbers.reduce((accumulator, currentValue) => accumulator + currentValue);

      // Found the contiguous set
      if (sumCheck === sum) {
        // Sort the set
        checkNumbers.sort((a, b) => a - b);
        // Return the sum of the lowest and highest numbers in the set
        return checkNumbers[0] + checkNumbers[checkNumbers.length - 1];
      }
      // Over the sum, so break out and move on
      else if (sumCheck > sum) {
        break;
      }
      sumIndex++;
    }
    checkNumbers = [];
  }
}


// Helper Functions
function getSums(sequence, preambleLength, startIndex) {
  let preamble = [];
  // Sum the numbers in the preamble, but don't add the same number to itself
  for (let i = startIndex; i < preambleLength - 1; i++) {
    for (let j = i + 1; j < preambleLength; j++) {
      let sum = sequence[i] + sequence[j]
      preamble.push(sum);
    }
  }
  return preamble;
}

// TEMPLATE
// Get output areas
const part1Test = document.getElementById("part1Test");
const part2Test = document.getElementById("part2Test");
const part1Challenge = document.getElementById("part1Challenge");
const part2Challenge = document.getElementById("part2Challenge");

//Test to confirm output
let testVal = xmasCipher(testArray, 5);
part1Test.textContent = testVal
part2Test.textContent = xmasCipher2(testArray, testVal);

// // Run challenge data and get output
let challengeVal = xmasCipher(challengeArray, 25);
part1Challenge.textContent = challengeVal
part2Challenge.textContent = xmasCipher2(challengeArray, challengeVal);
