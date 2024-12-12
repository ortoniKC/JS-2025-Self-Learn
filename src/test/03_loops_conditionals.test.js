const assert = require("assert");
const {
  fizzBuzz,
  isPrime,
  multiplicationTable,
  getDayName,
} = require("../tasks/03_loops_conditionals.js");

describe("Loops and Conditional Statements", function () {
  describe("FizzBuzz", function () {
    it("should return correct array for n = 15", function () {
      const expected = [
        "1",
        "2",
        "Fizz",
        "4",
        "Buzz",
        "Fizz",
        "7",
        "8",
        "Fizz",
        "Buzz",
        "11",
        "Fizz",
        "13",
        "14",
        "FizzBuzz",
      ];
      assert.deepStrictEqual(fizzBuzz(15), expected);
    });
  });

  describe("Prime Number Checker", function () {
    it("should correctly identify prime numbers", function () {
      assert.strictEqual(isPrime(2), true);
      assert.strictEqual(isPrime(17), true);
      assert.strictEqual(isPrime(41), true);
    });

    it("should correctly identify non-prime numbers", function () {
      assert.strictEqual(isPrime(1), false);
      assert.strictEqual(isPrime(4), false);
      assert.strictEqual(isPrime(100), false);
    });
  });

  describe("Multiplication Table", function () {
    it("should generate correct 3x3 multiplication table", function () {
      const expected = [
        [1, 2, 3],
        [2, 4, 6],
        [3, 6, 9],
      ];
      assert.deepStrictEqual(multiplicationTable(3), expected);
    });
  });

  describe("Day of Week", function () {
    it("should return correct day names", function () {
      assert.strictEqual(getDayName(1), "Sunday");
      assert.strictEqual(getDayName(4), "Wednesday");
      assert.strictEqual(getDayName(7), "Saturday");
    });

    it("should handle invalid input", function () {
      assert.strictEqual(getDayName(0), "Invalid day");
      assert.strictEqual(getDayName(8), "Invalid day");
    });
  });
});
