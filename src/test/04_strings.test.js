const assert = require("assert");
const {
  reverseString,
  countVowels,
  formatName,
  truncate,
  findSubstring,
  countOccurrences,
  createTemplate,
} = require("../tasks/04_strings.js");

describe("String Operations", function () {
  describe("reverseString", function () {
    it("should reverse the input string", function () {
      assert.strictEqual(reverseString("hello"), "olleh");
      assert.strictEqual(reverseString("JavaScript"), "tpircSavaJ");
    });
  });

  describe("countVowels", function () {
    it("should count vowels correctly", function () {
      assert.strictEqual(countVowels("hello"), 2);
      assert.strictEqual(countVowels("AEIOU"), 5);
      assert.strictEqual(countVowels("JavaScript"), 3);
    });
  });

  describe("formatName", function () {
    it("should format names correctly", function () {
      assert.strictEqual(formatName("John", "Doe"), "Doe, John");
      assert.strictEqual(formatName("Jane", "Smith"), "Smith, Jane");
    });
  });

  describe("truncate", function () {
    it("should truncate strings correctly", function () {
      assert.strictEqual(truncate("hello world", 5), "hello...");
      assert.strictEqual(truncate("JavaScript", 10), "JavaScript");
      assert.strictEqual(truncate("OpenAI", 3), "Ope...");
    });
  });

  describe("findSubstring", function () {
    it("should find substrings correctly", function () {
      assert.strictEqual(findSubstring("hello world", "world"), 6);
      assert.strictEqual(findSubstring("JavaScript", "Script"), 4);
      assert.strictEqual(findSubstring("OpenAI", "GPT"), -1);
    });
  });

  describe("countOccurrences", function () {
    it("should count character occurrences correctly", function () {
      assert.strictEqual(countOccurrences("hello world", "l"), 3);
      assert.strictEqual(countOccurrences("JavaScript", "a"), 2);
      assert.strictEqual(countOccurrences("OpenAI", "X"), 0);
    });
  });

  describe("createTemplate", function () {
    it("should create correct template string", function () {
      const person = { name: "John", age: 30, city: "New York" };
      const expected =
        "My name is John. I'm 30 years old and I live in New York.";
      assert.strictEqual(createTemplate(person), expected);
    });
  });
});
