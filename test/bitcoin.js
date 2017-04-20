var Bitcoin = artifacts.require("./Bitcoin.sol");

contract('Bitcoin', function(accounts) {
  it("should put 2100000 btc in total_now", function() {
    return Bitcoin.deployed().then(function(instance) {
      return instance.getTotal.call();
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 21000000, "2100000 doesn't match");
    });
  });

  it("should wirte parameters correctly", function() {
    var num = 1234;
    var diff = 19287492833;
    var num_get;
    var diff_get;
    var meta;

    return Bitcoin.deployed().then(function(instance) {
      meta = instance;
      return meta.writeInfo(num, diff);
    }).then(function() {
      return meta.getNumDiff.call();
    }).then(function(num, diff) {
      num_get = num;
      diff_get = diff;
      assert.equal(num_get, num, "number does not set ok");
      assert.equal(diff_get, diff, "difficulty does not set ok");
    });
  });
});
