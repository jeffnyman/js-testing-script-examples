var chai = require("chai");

var expect = chai.expect;
var assert = chai.assert;

var example_object = {
  name: "test",
  sub: {
    name: "test sub"
  },
  numbers: [1, 2, 3, 4],
  hasNumbers: true
}

describe("An Example Test Suite", () => {
  context("using expectations", () => {
    it("can be run against a JavaScript object", () => {
      expect(example_object).to.be.an("object").and.to.be.ok

      expect(example_object).to.have.property("sub").that.is.an("object").and.is.ok
      expect(example_object.sub).to.have.property("name").that.is.a("string").and.to.equal("test sub")

      expect(example_object).to.have.property("numbers").that.deep.equals([1, 2, 3, 4])
      expect(example_object).to.have.property("hasNumbers", true)
    });
  });

  context("using assertions", () => {
    it("can be run against a JavaScript object", () => {
      assert.isOk(example_object)
      assert.isObject(example_object)

      assert.property(example_object, "sub")
      assert.propertyVal(example_object, "name", "test")
      assert.propertyVal(example_object.sub, "name", "test sub")

      assert.deepEqual(example_object.numbers, [1, 2, 3, 4])
      assert.typeOf(example_object.hasNumbers, "boolean")
      assert.isTrue(example_object.hasNumbers)
    });
  });
});
