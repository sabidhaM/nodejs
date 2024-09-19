// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract dataupdate {
    event messageChaged(string oldmsg, string newmsg);
    string public message;

    constructor(string memory firstmessage) {
        message = firstmessage;
    }
    function update(string memory newmessage) public {
        string memory oldmsg = message;
        message = newmessage;

        emit messageChaged(oldmsg, newmessage);
    }
}
