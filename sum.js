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

// * edge cases. if it's not a number

// loop throught the arguments
// add them up

function sum(numbers) {
  var total = 0;

  for (var i = 0; i < numbers.length; i++) {
    total += Number(numbers[i]);
  }

  return total;
}

console.log('total:', sum(getArguments()));

//
//

// print the sum
