const assert = require("assert");
const {
  calculateArea,
  processArray,
  delay,
  fetchData,
  processDataSequentially,
  processDataSequentiallyAsync,
  fetchWithRetry,
} = require("../tasks/08_callbacks_promises.js");

describe("Callbacks and Promises", function () {
  this.timeout(10000); // Increase timeout for async tests

  describe("calculateArea", function () {
    it("should calculate area correctly using callback", function (done) {
      calculateArea(5, 3, (area) => {
        assert.strictEqual(area, 15);
        done();
      });
    });
  });

  describe("processArray", function () {
    it("should process array elements correctly", function () {
      const result = processArray([1, 2, 3], (x) => x * 2);
      assert.deepStrictEqual(result, [2, 4, 6]);
    });
  });

  describe("delay", function () {
    it("should resolve after specified delay", async function () {
      const start = Date.now();
      const result = await delay(1000, "test");
      const end = Date.now();
      assert.strictEqual(result, "test");
      assert.ok(end - start >= 1000);
    });
  });

  describe("fetchData", function () {
    it("should resolve with data after a delay", async function () {
      const result = await fetchData();
      assert.deepStrictEqual(result, { data: "Some data from API" });
    });
  });

  describe("processDataSequentially", function () {
    it("should process endpoints sequentially", async function () {
      const endpoints = ["endpoint1", "endpoint2", "endpoint3"];
      const result = await processDataSequentially(endpoints);
      assert.strictEqual(result.length, 3);
      result.forEach((item) =>
        assert.deepStrictEqual(item, { data: "Some data from API" })
      );
    });
  });

  describe("processDataSequentiallyAsync", function () {
    it("should process endpoints sequentially using async/await", async function () {
      const endpoints = ["endpoint1", "endpoint2", "endpoint3"];
      const result = await processDataSequentiallyAsync(endpoints);
      assert.strictEqual(result.length, 3);
      result.forEach((item) =>
        assert.deepStrictEqual(item, { data: "Some data from API" })
      );
    });
  });

  describe("fetchWithRetry", function () {
    it("should retry fetching data up to 3 times", async function () {
      const result = await fetchWithRetry();
      assert.deepStrictEqual(result, { data: "Some data from API" });
    });
  });
});
