// SCRIPTS
// Part 1 - Find value of accumulator before infinite loop detected
function checkCommands(sequence) {
  let indices = []; // Keep track of repeated indices that indicate a loop
  let index = 0; // Index of the array we have jumped to
  let acc = 0; // Accumulated value
  // Go through instructions
  while (index < sequence.length) {
    // If loop detected break out of while loop
    if (indices.includes(index)) {
      break;
    } else {
      indices.push(index);
    }

    // Process instructions
    let instruction = sequence[index].split(' ');
    // Accumulate value
    if (instruction[0] === "acc") {
      acc += parseInt(instruction[1]);
      index++;
    }
    // Jump to index
    else if (instruction[0] === "jmp") {
      index += parseInt(instruction[1]);
    }
    // nop or No Operation to perform, simply move forward
    else {
      index++;
    }
  }
  // Return accumulated value when loop was detected
  return acc;
}

// Part 2 - Find what the commands would output if there are no infinite loops
function checkCommands2(sequence) {
  // Go through array and swap nop and jmp until loop is gone
  for (let i = 0; i < sequence.length; i++) {
    let instruction = sequence[i].split(' ');
    // Make a copy of the array
    let testSequence = sequence.slice();

    // Swap jmp to nop and see if that prevents loop
    if (instruction[0] === "jmp") {
      testSequence[i] = "nop " + instruction[1];
      // Loop prevented, return accumulated value
      if (testCommands(testSequence)) {
        return checkCommands(testSequence);
      }
    }
    // Swap nop to jmp and see if that prevents loop
    else if (instruction[0] === "nop") {
      testSequence[i] = "jmp " + instruction[1];
      // Loop prevented, return accumulated value
      if (testCommands(testSequence)) {
        return checkCommands(testSequence);
      }
    }
  }
}


// Helper Functions

/// Test if the sequence has an infinite loop
function testCommands(sequence) {
  let indices = [];
  let index = 0;
  while (index < sequence.length) {
    // Loop detected, return false
    if (indices.includes(index)) {
      return false;
    } else {
      indices.push(index);
    }

    // Get command to perform
    let instruction = sequence[index].split(' ');
    // Jump to index
    if (instruction[0] === "jmp") {
      let currIndex = index;
      index += parseInt(instruction[1]);
    }
    // Add one to index
    else {
      index++;
    }
  }
  // No loop, return true
  return true;
}


// TEMPLATE
// Get output areas
const part1Test = document.getElementById("part1Test");
const part2Test = document.getElementById("part2Test");
const part1Challenge = document.getElementById("part1Challenge");
const part2Challenge = document.getElementById("part2Challenge");

//Test to confirm output
part1Test.textContent = checkCommands(testArray);
part2Test.textContent = checkCommands2(testArray);

// // Run challenge data and get output
part1Challenge.textContent = checkCommands(challengeArray);
part2Challenge.textContent = checkCommands2(challengeArray);
