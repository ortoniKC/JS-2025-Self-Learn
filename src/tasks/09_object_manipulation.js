// Task 9: Object Manipulation

// 1. Write a function 'mergeObjects' that takes two objects as arguments and returns a new object
//    that combines both of them. If there are overlapping keys, the values from the second object should be used.

// 2. Write a function 'deepClone' that creates a deep copy of an object. The function should handle nested objects and arrays.

// 3. Write a function 'flattenObject' that takes a nested object and returns a flattened version with keys as paths.
//    For example, {a: {b: {c: 1}}} becomes {'a.b.c': 1}

// 4. Write a function 'observeObject' that takes an object and a callback. It should return a proxy that wraps the object
//    and calls the callback whenever a property is read or modified, with the property name and the action ('get' or 'set').

// 5. Write a function 'createImmutable' that takes an object and returns an immutable version of it.
//    Trying to modify the returned object should throw an error.

// Write your code here:

// Don't modify the export statement
module.exports = {
  mergeObjects,
  deepClone,
  flattenObject,
  observeObject,
  createImmutable,
};
