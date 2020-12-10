// SCRIPTS
// Part 1 -  
function joltageTest(sequence) {
  sequence.sort((a, b) => a - b);
  let joltObj = {
    "1": 0,
    "2": 0,
    "3": 1
  };
  let lastAdapterJoltage = 0
  for (let i = 0; i < sequence.length; i++) {
    const diff = '' + sequence[i] - lastAdapterJoltage;
    joltObj[diff]++;
    lastAdapterJoltage = sequence[i]
  }
  return joltObj["1"] * joltObj["3"]

}

// Part 2 - 
function joltageCombos(sequence) {
  sequence.sort((a, b) => a - b);
  let droppableJoltages = [];
  // sequence.push(sequence[sequence.length - 1] + 3);
  sequence.unshift(0);
  for (let i = 1; i < sequence.length - 1; i++) {
    let stepAround = (sequence[i] - sequence[i - 1]) + (sequence[i + 1] - sequence[i]);
    if (stepAround <= 3) {
      droppableJoltages.push(sequence[i]);
    }
  }

  //console.log(droppableJoltages);
  // var result = [[]];
  // for (let i = 0; i < droppableJoltages.length; i++) {
  //   let subArray = [droppableJoltages[i]];
  //   result.push(droppableJoltages[i]);
  //   for (let j = i + 1; j < droppableJoltages.length; j++) {
  //     let loopArray = subArray.slice();
  //     loopArray.push(droppableJoltages[j]);

  //     subArray.push(droppableJoltages[j]);
  //     result.push(loopArray);
  //   }
  //   console.log(result.slice())
  // }
  //console.log(result)
  return (powersOf2(droppableJoltages.length - 1));
}


// Helper Functions
function powersOf2(exp) {
  let value = 0;
  for (let i = exp - 1; i >= 0; i--) {
    value += 2 ** i;
  }
  return value;
}

function calculate(setval) {

  var len = setval.length;

  var initval = 1;
  var len = setval.length;
  var tot = Math.pow(2, len);
  // var subset = new Array();
  // do {
  //   subset[initval] = dyno(setval, initval);
  //   initval++
  // } while (initval <= len);
  // console.log(subset)
  return tot;
}

function dyno(sst, size) {
  var result = [];
  if (sst.length < size) { return result; }
  var done = false;
  var current_dyno, distance_back, new_last_index;
  var indexes = [];
  var indexes_last = size - 1;
  var sst_last = sst.length - 1;
  for (var i = 0; i < size; ++i) {
    indexes[i] = i;
  }
  while (!done) {
    current_dyno = [];
    for (i = 0; i < size; ++i) {
      current_dyno.push(sst[indexes[i]]);
    }
    result.push("{" + current_dyno + "}");
    if (indexes[indexes_last] == sst_last) {
      done = true;
      for (i = indexes_last - 1; i > -1; --i) {
        distance_back = indexes_last - i;
        new_last_index = indexes[indexes_last - distance_back] + distance_back + 1;
        if (new_last_index <= sst_last) {
          indexes[indexes_last] = new_last_index;
          done = false;
          break;
        }
      }
      if (!done) {
        ++indexes[indexes_last - distance_back];
        --distance_back;
        for (; distance_back; --distance_back) {
          indexes[indexes_last - distance_back] = indexes[indexes_last - distance_back - 1] + 1;
        }
      }
    }
    else {
      ++indexes[indexes_last];
    }
  }
  return result;
}

// TEMPLATE
// Get output areas
const part1Test = document.getElementById("part1Test");
const part2Test = document.getElementById("part2Test");
const part1Challenge = document.getElementById("part1Challenge");
const part2Challenge = document.getElementById("part2Challenge");

//Test to confirm output
part1Test.textContent = joltageTest(testArray);
part2Test.textContent = joltageCombos(testArray);

// // Run challenge data and get output
part1Challenge.textContent = joltageTest(challengeArray);
part2Challenge.textContent = joltageCombos(challengeArray);