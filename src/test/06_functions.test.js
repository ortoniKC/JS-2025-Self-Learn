const assert = require("assert");
const {
  multiply,
  greet,
  calculateTotal,
  sum,
  multiplyArrow,
  repeat,
  counter,
  secretMessage,
} = require("../tasks/06_functions.js");

describe("Function Operations", function () {
  describe("multiply", function () {
    it("should multiply two numbers correctly", function () {
      assert.strictEqual(multiply(2, 3), 6);
      assert.strictEqual(multiply(-4, 5), -20);
    });
  });

  describe("greet", function () {
    it("should return a correct greeting string", function () {
      assert.strictEqual(greet("Alice"), "Hello, Alice!");
      assert.strictEqual(greet("Bob"), "Hello, Bob!");
    });
  });

  describe("calculateTotal", function () {
    it("should calculate total with default tax rate", function () {
      assert.strictEqual(calculateTotal(100), 110);
    });
    it("should calculate total with custom tax rate", function () {
      assert.strictEqual(calculateTotal(100, 0.2), 120);
    });
  });

  describe("sum", function () {
    it("should sum any number of arguments", function () {
      assert.strictEqual(sum(1, 2, 3), 6);
      assert.strictEqual(sum(1, 2, 3, 4, 5), 15);
    });
  });

  describe("multiplyArrow", function () {
    it("should multiply two numbers correctly", function () {
      assert.strictEqual(multiplyArrow(2, 3), 6);
      assert.strictEqual(multiplyArrow(-4, 5), -20);
    });
  });

  describe("repeat", function () {
    it("should repeat the function n times", function () {
      const double = (x) => x * 2;
      const repeatDouble = repeat(double, 3);
      assert.deepStrictEqual(repeatDouble(2), [4, 4, 4]);
    });
  });

  describe("counter", function () {
    it("should return incrementing numbers", function () {
      const count = counter();
      assert.strictEqual(count(), 1);
      assert.strictEqual(count(), 2);
      assert.strictEqual(count(), 3);
    });
  });

  describe("secretMessage", function () {
    it("should return secret message with correct password", function () {
      const message = secretMessage("The secret is...");
      assert.strictEqual(message("wrongpassword"), "Access denied");
      assert.strictEqual(message("opensesame"), "The secret is...");
    });
  });
});
