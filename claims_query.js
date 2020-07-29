const claims = require("./db/claims");

const findClaimById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const claim = claims.find(claim => claim.claimId == id)

      if (!claim) {
        return reject(new Error(`Claim with id ${id} was not found.`))
      }

      return resolve({
        message: "Claim found.",
        claim: claim
      });
    }, 10);
  });
}

const findClaimByState = (state) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const claim = claims.find(claim => claim.claimState == state)

      if (!claim) {
        return reject(new Error(`Claims with state ${state} not found.`))
      }

      return resolve({
        message: "Claim found.",
        claim: claim
      });
    }, 10);
  });
}

module.exports = {
  findClaimById,
  findClaimByState
}
