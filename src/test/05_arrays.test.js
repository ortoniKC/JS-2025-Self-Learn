const assert = require("assert");
const {
  reverseArray,
  removeElement,
  doubleNumbers,
  filterStrings,
  sumArray,
  findLongestString,
  flattenArray,
  rotateMatrix,
} = require("../tasks/05_arrays.js");

describe("Array Operations", function () {
  describe("reverseArray", function () {
    it("should reverse the input array", function () {
      assert.deepStrictEqual(reverseArray([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
      assert.deepStrictEqual(reverseArray(["a", "b", "c"]), ["c", "b", "a"]);
    });
  });

  describe("removeElement", function () {
    it("should remove all occurrences of the element", function () {
      assert.deepStrictEqual(
        removeElement([1, 2, 3, 2, 4, 2, 5], 2),
        [1, 3, 4, 5]
      );
      assert.deepStrictEqual(removeElement(["a", "b", "c", "b", "d"], "b"), [
        "a",
        "c",
        "d",
      ]);
    });
  });

  describe("doubleNumbers", function () {
    it("should double all numbers in the array", function () {
      assert.deepStrictEqual(doubleNumbers([1, 2, 3, 4, 5]), [2, 4, 6, 8, 10]);
      assert.deepStrictEqual(doubleNumbers([-1, 0, 1]), [-2, 0, 2]);
    });
  });

  describe("filterStrings", function () {
    it("should filter strings based on minimum length", function () {
      assert.deepStrictEqual(filterStrings(["a", "ab", "abc", "abcd"], 2), [
        "abc",
        "abcd",
      ]);
      assert.deepStrictEqual(
        filterStrings(["hello", "world", "js", "array"], 5),
        ["hello", "world", "array"]
      );
    });
  });

  describe("sumArray", function () {
    it("should return the sum of all numbers in the array", function () {
      assert.strictEqual(sumArray([1, 2, 3, 4, 5]), 15);
      assert.strictEqual(sumArray([-1, 0, 1]), 0);
    });
  });

  describe("findLongestString", function () {
    it("should return the longest string in the array", function () {
      assert.strictEqual(findLongestString(["a", "ab", "abc"]), "abc");
      assert.strictEqual(
        findLongestString(["hello", "world", "javascript"]),
        "javascript"
      );
    });
  });

  describe("flattenArray", function () {
    it("should flatten a 2D array into a 1D array", function () {
      assert.deepStrictEqual(
        flattenArray([
          [1, 2],
          [3, 4],
          [5, 6],
        ]),
        [1, 2, 3, 4, 5, 6]
      );
      assert.deepStrictEqual(
        flattenArray([
          ["a", "b"],
          ["c", "d"],
        ]),
        ["a", "b", "c", "d"]
      );
    });
  });

  describe("rotateMatrix", function () {
    it("should rotate a square matrix 90 degrees clockwise", function () {
      assert.deepStrictEqual(
        rotateMatrix([
          [1, 2],
          [3, 4],
        ]),
        [
          [3, 1],
          [4, 2],
        ]
      );
      assert.deepStrictEqual(
        rotateMatrix([
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ]),
        [
          [7, 4, 1],
          [8, 5, 2],
          [9, 6, 3],
        ]
      );
    });
  });
});
