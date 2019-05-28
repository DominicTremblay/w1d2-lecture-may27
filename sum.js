// Write a node program that takes in an unlimited number of command
// line arguments, goes through each and prints out the sum of them.
// If any argument is not a whole number, skip it.
// Do support negative numbers though.If any argument is not a number,
// output an error message.We need at least 2 arguments.

// Extract the command line arguments
function getArguments() {
  return process.argv.slice(2);
}

// Convert arguments to numbers
function convertToNb(args) {
  var numbersArr = [];

  for (var i = 0; i < args.length; i++) {
    numbersArr.push(Number(args[i]));
  }

  return numbersArr;
}

// Print out an error message and stop the execution of the program
function errorMessage(message) {
  console.log(message);
  process.exit();
}

// validate the arguments
// checks if we did not provide at least 2 arguments or
// if one of the arguments is NaN

function validateArgs(args) {
  if (args.length < 2) {
    errorMessage('Please provide at least two numbers');
  }

  for (var i = 0; i < args.length; i++) {
    // check if any argument is NaN
    if (isNaN(args[i])) {
      errorMessage('Please provide only numbers');
    }
  }
  return args;
}

// Filter out any decimal number
function getAllInt(numbersArr) {
  var allIntNb = [];

  for (var i = 0; i < numbersArr.length; i++) {
    // test if it does not have any decimal part
    if (numbersArr[i] - numbersArr[i].toFixed(0) === 0) {
      // Another condition that might do the trick
      // if (numbersArr[i] % 1 === 0) {
      allIntNb.push(numbersArr[i]);
    }
  }

  return allIntNb;
}

// loop throught the arguments
// add them up
function sum(numbers) {
  var total = 0;

  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total;
}

// Print the sum at the console
function displaySum(sum) {
  console.log('The sum is ' + sum);
}

// calling the functions
displaySum(sum(getAllInt(validateArgs(convertToNb(getArguments())))));
