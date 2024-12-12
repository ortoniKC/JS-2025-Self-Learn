// Task 10: Error Handling

// 1. Write a function 'divide' that takes two numbers as arguments and returns their division.
//    If the second number is zero, it should throw an Error with the message "Division by zero is not allowed".

// 2. Write a function 'fetchData' that simulates an API call. It should have a 20% chance of throwing an error.
//    If successful, it returns a promise that resolves with some data. If it fails, it should throw an Error
//    with the message "API request failed".

// 3. Write a function 'retryOperation' that takes a function and a number of retries as arguments.
//    It should execute the function and return its result. If the function throws an error, it should
//    retry up to the specified number of times. If all retries fail, it should throw the last error.

// 4. Write a function 'validateObject' that takes an object and a schema as arguments. The schema is an object
//    where keys are property names and values are types (e.g., { name: 'string', age: 'number' }).
//    It should throw a TypeError with a descriptive message if any property in the object doesn't match the schema.

// 5. Write an async function 'fetchWithTimeout' that takes a URL and a timeout in milliseconds as arguments.
//    It should fetch data from the URL, but throw a TimeoutError if the request takes longer than the specified timeout.

// Write your code here:

// Don't modify the export statement
module.exports = {
  divide,
  fetchData,
  retryOperation,
  validateObject,
  fetchWithTimeout,
};
