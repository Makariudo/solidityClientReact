const MindPin = artifacts.require('MindPin');
const {BN, expectEvent, expectRevert} = require('@openzeppelin/test-helpers')
const { web3 } = require('@openzeppelin/test-helpers/src/setup');
const { expect } = require('chai');

describe('Deploy MindPin contract and test', () => {
  let accounts;
  let admin;
  let toto;
  let david; 
  let addressTest; 
  let mindPinInstance;

  before(async () => {
    accounts = await web3.eth.getAccounts();
    [admin, toto, david, addressTest] = accounts;
    mindPinInstance = await MindPin.new({ from: admin });
  })
    it("should deploy", async () => {
      expect(mindPinInstance.address).to.exist;
    });
    ///AAA pattern Arrange/Act/Assert
    describe('Test writing function', () => {
      let result;
      let _content = "Aujourd'hui, je me sens bien, l'air est frais et je vais pouvoir en profiter!";

      it("should create a state id 1", async () => {
        result = await mindPinInstance.writeState(_content, {from: toto});
        const mapping = await mindPinInstance.NumStates.call(1)
        expect(mapping.id).to.bignumber.equal(new BN(1));
        //expect(receipt.status).to.be.true;
      })
      it("should emit an event", async () => {
        //args dans l'objet en troisième param
        expectEvent(result, "MindSet", { owner: toto, content: _content});
      })
    })
})