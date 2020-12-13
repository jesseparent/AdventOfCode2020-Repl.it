// SCRIPTS
// Part 1 - 
function busTimes(earliestDeparture, schedule) {
  let busArray = schedule.filter(bus => bus != 'x');
  let goodBus = [];
  let minutesToWait = 4;
  while (goodBus.length === 0) {
    minutesToWait++;
    goodBus = busArray.filter(bus => ((earliestDeparture + minutesToWait) % bus) === 0);
  }

  return (minutesToWait * goodBus[0])

}


// Part 2 - 
// Brute force is no good at this many iterations
// function busStagger(schedule) {
//   let time = schedule[0];
//   let checkMod = true;
//   let iterations = 1;
//   do {
//     time += schedule[0] * iterations;
//     for (let i = 0; i < schedule.length; i++) {

//       if (schedule[i] != 'x') {
//         checkMod = (time % schedule[i]) === 0;
//       }
//       time++
//       if (!checkMod) {
//         break;
//       }
//     }
//   } while (!checkMod);

//   return (time - schedule.length);
// }

function busStagger(schedule) {
  let nums = [schedule[0]];
  let rems = [0];

  for (let i = 1; i < schedule.length; i++) {
    if (schedule[i] != 'x') {
      nums.push(schedule[i]);
      rems.push(schedule[i] - (i % schedule[i]));
    }
  }
  console.log(nums);
  console.log(rems);

  return chineseRemainderTheorum(nums, rems);
}

// Helper Functions
function chineseRemainderTheorum(num, rem) {
  let x = 1; // Initialize result 

  // As per the Chinese remainder theorem, 
  // this loop will always break. 
  while (true) {
    // Check if remainder of x % num[j] is  
    // rem[j] or not 
    let j = 0;
    for (j = 0; j < num.length; j++)
      if (x % num[j] != rem[j])
        break;

    // If all remainders matched, we found x 
    if (j == num.length)
      return x;

    // Else try next number 
    x++;
  }

  return x;
}

// TEMPLATE
// Get output areas
const part1Test = document.getElementById("part1Test");
const part2Test = document.getElementById("part2Test");
const part1Challenge = document.getElementById("part1Challenge");
const part2Challenge = document.getElementById("part2Challenge");

// Test to confirm output
part1Test.textContent = busTimes(testDepart, testArray);
part2Test.textContent = busStagger(testArray);

// Run challenge data and get output

part1Challenge.textContent = busTimes(challengeDepart, challengeArray);
// part2Challenge.textContent = busStagger(challengeArray);