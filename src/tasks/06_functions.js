// Task 1: Function Basics
// 1. Write a function 'multiply' that takes two numbers as arguments and returns their product
// 2. Write a function 'greet' that takes a name as an argument and returns a greeting string

// Task 2: Default Parameters and Rest Parameters
// 3. Write a function 'calculateTotal' that takes a base price and an optional tax rate (default to 0.1)
//    It should return the total price including tax
// 4. Write a function 'sum' that takes any number of arguments and returns their sum

// Task 3: Arrow Functions and Higher Order Functions
// 5. Convert the 'multiply' function to an arrow function
// 6. Write a higher-order function 'repeat' that takes a function and a number n as arguments
//    It should return a new function that calls the original function n times and returns an array of results

// Task 4: Closures
// 7. Write a function 'counter' that returns a function. Each time the returned function is called,
//    it should return the next number in sequence, starting from 1
// 8. Write a function 'secretMessage' that takes a secret string as an argument and returns a function
//    The returned function, when called with a password, should return the secret if the password is correct,
//    and "Access denied" if it's not

// Write your code here:

// Don't modify the export statement
module.exports = {
  multiply,
  greet,
  calculateTotal,
  sum,
  multiplyArrow,
  repeat,
  counter,
  secretMessage,
};
