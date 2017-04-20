pragma solidity ^0.4.2;

// This is just a simple example of a coin-like contract.
// It is not standards compatible and cannot be expected to talk to other
// coin/token contracts. If you want to create a standards-compliant
// token, see: https://github.com/ConsenSys/Tokens. Cheers!

contract Bitcoin {
	uint32 public block_num;
	uint256 public difficulty;
	uint32 public total_now;

	//mapping (address => uint) balances;
	//event Transfer(address indexed _from, address indexed _to, uint256 _value);

	function Bitcoin() {
		total_now = 21000000;
	}

	function writeInfo(uint32 b_num, uint256 diff) returns(bool ok){
		block_num = b_num;
		difficulty = diff;
		//total_now = tt_now;
		return true;
		//check hash
	}

	function getTotal() returns(uint32) {
		return total_now;
	}

	function getNumDiff() returns(uint32, uint256) {
		return (block_num, difficulty);
	}

}
