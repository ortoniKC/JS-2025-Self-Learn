const assert = require("assert");
const {
  mergeObjects,
  deepClone,
  flattenObject,
  observeObject,
  createImmutable,
} = require("../tasks/09_object_manipulation.js");

describe("Object Manipulation", function () {
  describe("mergeObjects", function () {
    it("should merge two objects correctly", function () {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { b: 3, c: 4 };
      assert.deepStrictEqual(mergeObjects(obj1, obj2), { a: 1, b: 3, c: 4 });
    });
  });

  describe("deepClone", function () {
    it("should create a deep copy of an object", function () {
      const original = { a: 1, b: { c: 2 }, d: [3, 4] };
      const clone = deepClone(original);
      assert.deepStrictEqual(clone, original);
      assert.notStrictEqual(clone, original);
      assert.notStrictEqual(clone.b, original.b);
      assert.notStrictEqual(clone.d, original.d);
    });
  });

  describe("flattenObject", function () {
    it("should flatten a nested object", function () {
      const nested = { a: { b: { c: 1 } }, d: 2 };
      assert.deepStrictEqual(flattenObject(nested), { "a.b.c": 1, d: 2 });
    });
  });

  describe("observeObject", function () {
    it("should observe object property access and modification", function () {
      const obj = { a: 1 };
      const actions = [];
      const observed = observeObject(obj, (prop, action) =>
        actions.push({ prop, action })
      );
      observed.a;
      observed.a = 2;
      assert.deepStrictEqual(actions, [
        { prop: "a", action: "get" },
        { prop: "a", action: "set" },
      ]);
    });
  });

  describe("createImmutable", function () {
    it("should create an immutable version of an object", function () {
      const obj = { a: 1 };
      const immutable = createImmutable(obj);
      assert.throws(() => {
        immutable.a = 2;
      }, Error);
      assert.throws(() => {
        delete immutable.a;
      }, Error);
    });
  });
});
