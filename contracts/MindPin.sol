// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

//imports
import '@openzeppelin/contracts/access/Ownable.sol';

/// @title MindingPin Contract

contract MindPin is Ownable {

//variables
  uint private counter; 
  
  struct State {
    uint id;
    address owner;
    string content;
  }

  mapping(address => mapping(uint => State)) public bookStates;
  mapping(uint => State) public NumStates;
    

//events
event MindSet(
  address owner,
  uint id,
  string content
);

// modifier
modifier isOwner(State memory entry) {
  require(msg.sender == entry.owner, "Caller is not the owner");
  _;
}

//fonctions

    /** 
     * @dev Create a new Mindset 
     * @param _content - MindesetContent
     * @return _id - Returns mindset Id
     */
    function writeState(string memory _content) external returns (uint _id) {
        counter++;
        State memory entry = State(counter, msg.sender, _content);
        NumStates[counter] = entry;
        bookStates[msg.sender][counter] = entry;
        emit MindSet(msg.sender, counter, _content);
        return (counter);
    }

    /** 
     * @dev getOneState
     * @param _id - id du State
     * @return _result - Returns state
     */
    function getState(uint _id) public view returns (State memory _result) {
      return NumStates[_id];
    }

    ///TODO get/Update/delete
}