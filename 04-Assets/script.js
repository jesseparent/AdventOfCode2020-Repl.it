// SCRIPTS
// Part 1 - Check that each password has all the required fields
function checkPassport(passports) {
  // Require fields in passport
  let reqFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

  let validPassports = 0;

  // Passports are an array of objects
  for (let i = 0; i < passports.length; i++) {
    let isValid = true;

    // Loop through required fields
    for (let j = 0; j < reqFields.length; j++) {
      // If passport doesn't contain required field, it is invalid
      if (!passports[i].hasOwnProperty(reqFields[j])) {
        isValid = false;
        break
      }
    }

    // If passport passed validation, increase count
    if (isValid) validPassports++;
  }
  return validPassports;
}

// Part 2 - Check that each password has the require fields and the values are legal
function checkPassport2(passports) {
  // Require fields in passport
  let reqFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

  let validPassports = 0;

  // Passports are an array of objects
  for (let i = 0; i < passports.length; i++) {
    let isValid = true;
    for (let j = 0; j < reqFields.length; j++) {
      // If passport doesn't contain required field, it is invalid
      if (!passports[i].hasOwnProperty(reqFields[j])) {
        isValid = false;
        break
      } else {
        // Passport has a valid field, so validate that field based on criteria
        switch (reqFields[j]) {
          case "byr":
            // byr (Birth Year) - four digits; at least 1920 and at most 2002.
            isValid = check_range(passports[i].byr, 1920, 2002);
            break;
          case "iyr":
            // iyr (Issue Year) - four digits; at least 2010 and at most 2020.
            isValid = check_range(passports[i].iyr, 2010, 2020);
            break;
          case "eyr":
            // eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
            isValid = check_range(passports[i].eyr, 2020, 2030);
            break;
          case "hgt":
            // hgt (Height) - a number followed by either cm or in:
            //  If cm, the number must be at least 150 and at most 193.
            //  If in, the number must be at least 59 and at most 76.
            if (passports[i].hgt.indexOf("cm") > 0) {
              isValid = check_range(parseInt(passports[i].hgt), 150, 193);
            }
            else if (passports[i].hgt.indexOf("in") > 0) {
              isValid = check_range(parseInt(passports[i].hgt), 59, 76);
            }
            else {
              isValid = false;
            }
            break;
          case "hcl":
            // hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
            isValid = /^#([0-9a-f]{6})\b/.test(passports[i].hcl);
            break;
          case "ecl":
            // ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
            isValid = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(passports[i].ecl);
            break;
          case "pid":
            // pid (Passport ID) - a nine-digit number, including leading zeroes.
            isValid = /^([0-9]{9})\b/.test(passports[i].pid);
            break;
        }

        // If passport is invalid, break out of loop and check the next passport
        if (!isValid) {
          break;
        }
      }
    }

    // If passport passed validation, increase count
    if (isValid) validPassports++;
  }
  return validPassports;
}

// Check that a number is within a low to high range
function check_range(nbr, low, high) {
  nbr = parseInt(nbr);
  if (nbr >= low && nbr <= high) {
    return true;
  }
  else {
    return false;
  }
}

// TEMPLATE
// Get output areas
const part1Test = document.getElementById("part1Test");
const part2Test = document.getElementById("part2Test");
const part1Challenge = document.getElementById("part1Challenge");
const part2Challenge = document.getElementById("part2Challenge");

// Test to confirm output
part1Test.textContent = checkPassport(testArray);
part2Test.textContent = checkPassport2(testArray);

// Run challenge data and get output
part1Challenge.textContent = checkPassport(challengeArray);
part2Challenge.textContent = checkPassport2(challengeArray);