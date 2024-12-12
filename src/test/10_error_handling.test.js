const assert = require("assert");
const {
  divide,
  fetchData,
  retryOperation,
  validateObject,
  fetchWithTimeout,
} = require("../tasks/10_error_handling.js");

describe("Error Handling", function () {
  this.timeout(5000); // Increase timeout for async tests

  describe("divide", function () {
    it("should divide numbers correctly", function () {
      assert.strictEqual(divide(10, 2), 5);
    });

    it("should throw an error when dividing by zero", function () {
      assert.throws(() => divide(10, 0), /Division by zero is not allowed/);
    });
  });

  describe("fetchData", function () {
    it("should sometimes succeed and sometimes fail", async function () {
      let successes = 0;
      let failures = 0;
      for (let i = 0; i < 100; i++) {
        try {
          await fetchData();
          successes++;
        } catch (error) {
          failures++;
        }
      }
      assert.ok(successes > 0 && failures > 0);
    });
  });

  describe("retryOperation", function () {
    it("should retry failed operations", async function () {
      let attempts = 0;
      const operation = () => {
        attempts++;
        if (attempts < 3) throw new Error("Failed");
        return "Success";
      };
      const result = await retryOperation(operation, 3);
      assert.strictEqual(result, "Success");
      assert.strictEqual(attempts, 3);
    });

    it("should throw if all retries fail", async function () {
      const operation = () => {
        throw new Error("Always fails");
      };
      await assert.rejects(retryOperation(operation, 3), /Always fails/);
    });
  });

  describe("validateObject", function () {
    it("should validate objects correctly", function () {
      const schema = { name: "string", age: "number" };
      const validObj = { name: "John", age: 30 };
      assert.doesNotThrow(() => validateObject(validObj, schema));
    });

    it("should throw for invalid objects", function () {
      const schema = { name: "string", age: "number" };
      const invalidObj = { name: "John", age: "30" };
      assert.throws(() => validateObject(invalidObj, schema), TypeError);
    });
  });

  describe("fetchWithTimeout", function () {
    it("should timeout for long requests", async function () {
      const slowUrl = "http://httpbin.org/delay/3";
      await assert.rejects(
        fetchWithTimeout(slowUrl, 1000),
        /Request timed out/
      );
    });

    it("should succeed for quick requests", async function () {
      const quickUrl = "http://httpbin.org/get";
      const result = await fetchWithTimeout(quickUrl, 3000);
      assert.ok(result.url === quickUrl);
    });
  });
});
