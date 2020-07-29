const assert = require("assert");

const { findClaimById, findClaimByState } = require("../claims_query");

describe("Finding Claims by ID", () => {
  it("finds a claim (via Done callback)", (done) => {
    findClaimById("TC8706078013201920200210").then((response) => {
      assert.equal(response.message, "Claim found.");

      expect(response.message).toBe("Claim found.");

      done();
    });
  });

  it("finds a claim (via a Promise method)", () => {
    return findClaimById("TC8706078013201920200210").then((response) => {
      assert.equal(response.message, "Claim found.");

      expect(response.message).toBe("Claim found.");
    });
  });

  it("finds a claim (via a async/await)", async () => {
    const response = await findClaimById("TC8706078013201920200210");

    assert.equal(response.message, "Claim found.");

    expect(response.message).toBe("Claim found.");
  });

  it("rejects (Mocha-style) with error if claim is not found", async () => {
    return findClaimById("TC1234567890").then(() => {
      assert.fail("Expected findClaimById to reject.");
    }, (error) => {
      assert.equal(error.message, "Claim with id TC1234567890 was not found.");
      expect(error.message).toBe("Claim with id TC1234567890 was not found.");
    });
  });

  it("rejects (Jest-style) with error if claim is not found", async () => {
    const actual = findClaimById("TC1234567890");

    expect(actual).rejects.toBe("Claim with id TC1234567890 was not found.");
  });
});

describe("Finding Claims by State", () => {
});
