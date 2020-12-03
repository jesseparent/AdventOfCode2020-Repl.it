// SCRIPTS
// Part 1 - Find valid passwords based on specific number of characters in password
function checkPW1(policyArr) {
  let goodPWCount = 0
  for (let i = 0; i < policyArr.length; i++) {
    // Split password policy into components (Range of allowed number of a specific character, the specific character, the password)
    let policy = policyArr[i].split(' ');
    // Split the range from minimum to maximum count of the character
    let range = policy[0].split('-');
    // Get the character to check
    let character = policy[1][0];
    // Get the password to evaluate
    let password = policy[2];

    // Construct regular expression to check that the password only contains a certain count of the specific character
    // e.g. for 1-3 instances of the character 'a' - /~[^a]*[a][^a]{1,3}$/
    let re = new RegExp('^([^' + character + ']*[' + character + '][^' + character + ']*){' + range[0] + ',' + range[1] + '}$');
    if (re.test(password)) {
      goodPWCount++
    }
  }
  return goodPWCount;
}

// Part 2 - Find valid passwords based on a character at only one of the specific indexes
function checkPW2(policyArr) {
  let goodPWCount = 0
  for (let i = 0; i < policyArr.length; i++) {
    // Split password policy into components (Indices where specific character should exist, the specific character, the password)
    let policy = policyArr[i].split(' ');
    // Get the indices and convert them to array indices (zero-based)
    let positions = policy[0].split('-');
    let position1 = parseInt(positions[0]) - 1;
    let position2 = parseInt(positions[1]) - 1;
    // Get the character to check
    let character = policy[1][0];
    // Get the password to evaluate
    let password = policy[2];

    // Make sure character character exists at only one of the indices 
    if (((password[position1] == character) && (password[position2] != character)) ||
      ((password[position1] != character) && (password[position2] == character))) {
      goodPWCount++
    }
  }
  return goodPWCount;
}

// TEMPLATE
// Get output areas
const part1Test = document.getElementById("part1Test");
const part2Test = document.getElementById("part2Test");
const part1Challenge = document.getElementById("part1Challenge");
const part2Challenge = document.getElementById("part2Challenge");

// Test to confirm output
part1Test.textContent = checkPW1(testArray);
part2Test.textContent = checkPW2(testArray);

// Run challenge data and get output
part1Challenge.textContent = checkPW1(challengeArray);
part2Challenge.textContent = checkPW2(challengeArray);