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
    describe('Test writing function', async () => {
      let result;
      let _content = "Aujourd'hui, je me sens bien, l'air est frais et je vais pouvoir en profiter!";
      let _content2 = "deuxieme contenu à tester"

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

      it("should increment AddressEntries", async () => {
        const res = await mindPinInstance.AddressEntries.call(toto)
        expect(res).to.bignumber.equal(new BN(1));
      })

      it("should return a state", async () => {
        const res = await mindPinInstance.getState(1);
        expect(res.content).to.be.equal(_content);
      })

      it("should create a second state", async () => {
        await mindPinInstance.writeState(_content2, {from: toto});
        const res = await mindPinInstance.getState(2);
        expect(res.content).to.be.equal(_content2);
      })

      it("should block the delete of this second state", async () => {
        await expectRevert(mindPinInstance.deleteState(2, {from: david}), "Caller is not the owner");
      })

      it("should delete this second state", async () => {
        await mindPinInstance.deleteState(2, {from: toto});
        const res = await mindPinInstance.getState(2);
        expect(res.content).to.be.empty;
      })

      it("should update this first state", async () => {
        const updater = await mindPinInstance.updateState(1, _content2, {from: toto});
        const res = await mindPinInstance.getState(1);
        expect(res.content).to.be.equal(_content2);
        expectEvent(updater, "UpdateMindSet", { owner: toto, newContent: _content2, oldContent: _content, message: "State updated!"});
      })

      it("should block this update", async () => {
        const res =  await mindPinInstance.NumStates.call(2);
        await expectRevert(mindPinInstance.updateState(2, _content2, {from: toto}), "No state to update here !");
      })
    })
})