const {expect} = require('chai');
const sinon = require('sinon');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');


describe('sendPaymentRequestToApi', function(){
    const sandbox = sinon.createSandbox();
    
    it('sendPaymentRequestToApi() calls Utils.calculateNumber()', function(){
        sandbox.spy(console);
        stub = sandbox.stub(Utils, "calculateNumber");
        stub.returns(10);

        expect(stub.callCount).to.be.equal(0);
        sendPaymentRequestToApi(100, 20);
        expect(stub.callCount).to.be.equal(1);
        expect(stub.calledWith('SUM', 100, 20)).to.equal(true);
        expect(console.log.calledWith('The total is: 10')).to.equal(true);
        sandbox.restore();
    });
});
