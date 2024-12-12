const assert = require("assert");
const {
  age,
  name,
  job,
  blockVar,
  hoistedVar,
  person,
} = require("../tasks/01_variables.js");

describe("Advanced Variable Declaration and Manipulation", function () {
  it("should correctly declare and assign age", function () {
    assert.strictEqual(age, 26);
  });

  it("should correctly declare name as a constant", function () {
    assert.ok(name);
    assert.throws(() => {
      name = "New Name";
    }, TypeError);
  });

  it("should correctly declare job using var", function () {
    assert.strictEqual(job, "developer");
  });

  it("should demonstrate correct variable scoping", function () {
    assert.strictEqual(blockVar, "I am function-scoped");
  });

  it("should demonstrate hoisting", function () {
    assert.strictEqual(hoistedVar, "I am hoisted");
  });

  it("should correctly create and modify a const object", function () {
    assert.ok(person);
    assert.ok(person.name);
    assert.ok(person.age);
    assert.throws(() => {
      person = { name: "New Person", age: 30 };
    }, TypeError);

    const initialName = person.name;
    person.name = "Modified Name";
    assert.notStrictEqual(person.name, initialName);
  });
});
