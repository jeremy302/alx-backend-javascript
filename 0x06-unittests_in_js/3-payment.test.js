const {expect} = require('chai');
const sinon = require('sinon');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');


describe('sendPaymentRequestToApi', function(){
    it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const bigBrother = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(bigBrother.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(bigBrother.calculateNumber.callCount).to.be.equal(1);
    bigBrother.calculateNumber.restore();
  });
    // const sandbox = sinon.createSandbox();
    
    // it('sendPaymentRequestToApi() calls Utils.calculateNumber()', function(){
    //     sandbox.spy(Utils);
    //     expect(Utils.calculateNumber.called).to.equal(false);
    //     sendPaymentRequestToApi(100, 20);
    //     expect(Utils.calculateNumber.called).to.equal(true);
    //     expect(Utils.calculateNumber.calledWith('SUM', 100, 20)).to.equal(true);
    //     sandbox.restore();
    // });
});
