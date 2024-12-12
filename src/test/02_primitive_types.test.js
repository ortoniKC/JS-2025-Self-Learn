const assert = require("assert");
const {
  x,
  y,
  z,
  product,
  result,
  getType,
  precise,
  rounded,
  notANumber,
  infinity,
} = require("../tasks/02_primitive_types.js");

describe("Primitive Types and Type Coercion", function () {
  it("should demonstrate type coercion in arithmetic operations", function () {
    assert.strictEqual(x, "5");
    assert.strictEqual(y, 2);
    assert.strictEqual(z, true);
    assert.strictEqual(product, 10);
    assert.strictEqual(result, "5true");
  });

  it("should correctly identify types", function () {
    assert.strictEqual(getType("hello"), "string");
    assert.strictEqual(getType(42), "number");
    assert.strictEqual(getType(true), "boolean");
    assert.strictEqual(getType(undefined), "undefined");
    assert.strictEqual(getType(null), "null");
    assert.strictEqual(getType([]), "object");
    assert.strictEqual(getType({}), "object");
  });

  it("should handle number precision correctly", function () {
    assert.ok(Math.abs(precise - 0.3) < Number.EPSILON);
    assert.strictEqual(rounded, 0.3);
  });

  it("should work with special number values", function () {
    assert.ok(isNaN(notANumber));
    assert.strictEqual(infinity, Infinity);
    assert.strictEqual(infinity > Number.MAX_SAFE_INTEGER, true);
  });
});
