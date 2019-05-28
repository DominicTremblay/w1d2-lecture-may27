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

function errorMessage(message) {
  console.log(message);
  process.exit();
}

// * edge cases. if it's not a number
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

console.log('total:', validateArgs(convertToNb(getArguments())));

//
//

// print the sum
