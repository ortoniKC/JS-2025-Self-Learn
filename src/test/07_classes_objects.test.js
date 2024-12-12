const assert = require("assert");
const {
  Person,
  Student,
  BankAccount,
} = require("../tasks/07_classes_objects.js");

describe("Classes and Objects", function () {
  describe("Person", function () {
    it("should create a Person instance correctly", function () {
      const person = new Person("John", 30);
      assert.strictEqual(person.name, "John");
      assert.strictEqual(person.age, 30);
    });

    it("should introduce correctly", function () {
      const person = new Person("John", 30);
      assert.strictEqual(
        person.introduce(),
        "Hi, I'm John and I'm 30 years old."
      );
    });

    it("should have correct static property", function () {
      assert.strictEqual(Person.species, "Homo sapiens");
    });

    it("should compare ages correctly", function () {
      const person1 = new Person("John", 30);
      const person2 = new Person("Jane", 25);
      assert.strictEqual(Person.compareAges(person1, person2), "John");
    });
  });

  describe("Student", function () {
    it("should create a Student instance correctly", function () {
      const student = new Student("Alice", 15, 9);
      assert.strictEqual(student.name, "Alice");
      assert.strictEqual(student.age, 15);
      assert.strictEqual(student.grade, 9);
    });

    it("should introduce correctly with grade", function () {
      const student = new Student("Alice", 15, 9);
      assert.strictEqual(
        student.introduce(),
        "Hi, I'm Alice and I'm 15 years old. I'm in grade 9."
      );
    });
  });

  describe("BankAccount", function () {
    it("should create a BankAccount instance correctly", function () {
      const account = new BankAccount(100);
      assert.strictEqual(account.balance, 100);
    });

    it("should update balance correctly", function () {
      const account = new BankAccount(100);
      account.balance = 200;
      assert.strictEqual(account.balance, 200);
    });

    it("should not allow negative balance", function () {
      const account = new BankAccount(100);
      account.balance = -50;
      assert.strictEqual(account.balance, 100);
    });
  });
});
