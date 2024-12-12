// Task 1: Callbacks
// 1. Write a function 'calculateArea' that takes the length and width of a rectangle,
//    and a callback function. It should calculate the area and pass it to the callback.
// 2. Write a function 'processArray' that takes an array and a callback function.
//    It should apply the callback to each element and return a new array with the results.

// Task 2: Promises
// 3. Write a function 'delay' that returns a promise. The promise should resolve after
//    a specified number of milliseconds with a given value.
// 4. Write a function 'fetchData' that simulates an API call. It should return a promise
//    that resolves with some data after a random delay between 1 and 3 seconds.

// Task 3: Promise Chaining
// 5. Write a function 'processDataSequentially' that takes an array of API endpoints.
//    It should fetch data from each endpoint in sequence (wait for each to complete before starting the next),
//    and return a promise that resolves with an array of all the fetched data.

// Task 4: Async/Await
// 6. Rewrite the 'processDataSequentially' function using async/await syntax.
// 7. Write an async function 'fetchWithRetry' that tries to fetch data (using the fetchData function)
//    up to 3 times if it fails. If all 3 attempts fail, it should throw an error.

// Write your code here:

// Don't modify the export statement
module.exports = {
  calculateArea,
  processArray,
  delay,
  fetchData,
  processDataSequentially,
  processDataSequentiallyAsync,
  fetchWithRetry,
};
