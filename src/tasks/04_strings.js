// Task 1: String Manipulation
// 1. Write a function 'reverseString' that takes a string as an argument and returns the reverse of that string
// 2. Write a function 'countVowels' that takes a string as an argument and returns the number of vowels in that string
//    (consider 'a', 'e', 'i', 'o', 'u' as vowels, in both lowercase and uppercase)

// Task 2: String Formatting
// 3. Write a function 'formatName' that takes two arguments: firstName and lastName
//    It should return a string in the format "lastName, firstName"
// 4. Write a function 'truncate' that takes a string and a number n as arguments
//    It should return the string truncated to n characters, with "..." added at the end if the string was truncated
//    If the string length is less than or equal to n, return the original string

// Task 3: String Searching
// 5. Write a function 'findSubstring' that takes two arguments: a string and a substring
//    It should return the index of the first occurrence of the substring in the string
//    If the substring is not found, return -1
// 6. Write a function 'countOccurrences' that takes two arguments: a string and a character
//    It should return the number of times the character appears in the string

// Task 4: Template Literals
// 7. Write a function 'createTemplate' that takes an object with properties: name, age, and city
//    It should return a string using template literals in the format:
//    "My name is [name]. I'm [age] years old and I live in [city]."

// Write your code here:

// Don't modify the export statement
module.exports = {
  reverseString,
  countVowels,
  formatName,
  truncate,
  findSubstring,
  countOccurrences,
  createTemplate,
};
