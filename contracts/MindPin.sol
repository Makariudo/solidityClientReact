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
    bool exists;
  }

  //2 mappings un pour avoir l'ensemble des states peu importe le owner et l'autre cf owner
  mapping(address => mapping(uint => State)) public bookStates;
  mapping(uint => State) public NumStates;
  
  //nombre d'entrées par owner
  mapping(address => uint16) public AddressEntries;

//events
event MindSet(
  address owner,
  uint id,
  string content
);

event DeleteMindSet(
  address owner,
  uint id,
  string content
);

event UpdateMindSet(
  address owner,
  uint id,
  string newContent,
  string oldContent,
  string message
);

// modifier
modifier isOwner(State memory entry) {
  require(msg.sender == entry.owner, "Caller is not the owner");
  _;
}

modifier isOkToUpdate(uint _id) {
  require(NumStates[_id].exists   , "No state to update here !");
  _;
}

//fonctions

    /** 
     * @dev Create a new Mindset 
     * @param _content - MindesetContent
     * @return id - Returns mindset Id
     */
    function writeState(string memory _content) external returns (uint id) {
        counter++;
        State memory entry = State(counter, msg.sender, _content, true);
        NumStates[counter] = entry;
        bookStates[msg.sender][counter] = entry;
        AddressEntries[msg.sender] = AddressEntries[msg.sender]+1;
        emit MindSet(msg.sender, counter, _content);
        return (counter);
    }

    /** 
     * @dev getOneState
     * @param _id - State's id
     * @return result - Returns state
     */
    function getState(uint _id) public view returns (State memory result) {
      return NumStates[_id];
    }

     /** 
     * @dev deleteOneState
     * @param _id - State's id
     * @return message - Returns confirm message
     */
    function deleteState(uint _id) public isOwner(getState(_id)) returns (string memory message) {
      NumStates[_id].content = "";
      bookStates[msg.sender][_id].content = "";
      NumStates[_id].exists = false;
      bookStates[msg.sender][_id].exists = false;
      string memory _message = "State erased";
      emit DeleteMindSet(msg.sender, _id, _message);
      return _message;
    }

    /** 
     * @dev updateState
     * @param _id - State's id
     * @param _content - State's content to update
     * @return message - Returns confirm message
     */
    function updateState(uint _id, string memory _content) public isOwner(getState(_id)) isOkToUpdate(_id) returns (string memory message) {
      string memory oldStateContent = NumStates[_id].content;
      NumStates[_id].content =  _content;
      bookStates[msg.sender][_id].content = _content;
      string memory _message = "State updated!";
      emit UpdateMindSet(msg.sender, _id, _content, oldStateContent, _message);
      return _message;
    }
}