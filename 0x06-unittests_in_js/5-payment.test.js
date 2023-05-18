const {expect} = require('chai');
const sinon = require('sinon');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');


describe('sendPaymentRequestToApi', function(){
    // const sandbox = sinon.createSandbox();
    // let stub = null;
    let spy = null;
    beforeEach(function(){
        // sandbox.spy(console);
        spy = spy || sinon.spy(console);
        // stub = sandbox.stub(Utils, "calculateNumber");
    });
    afterEach(function(){
        spy.log.resetHistory();
    });
    it('sendPaymentRequestToAPI(100, 20)', function(){
        expect(spy.log.callCount).to.be.equal(0);
        sendPaymentRequestToApi(100, 20);
        expect(spy.log.callCount).to.be.equal(1);
        expect(spy.log.calledWith('The total is: 120')).to.equal(true);
    });
    it('sendPaymentRequestToAPI(10, 10)', function(){
        expect(spy.log.callCount).to.be.equal(0);
        sendPaymentRequestToApi(10, 10);
        expect(spy.log.callCount).to.be.equal(1);
        expect(spy.log.calledWith('The total is: 20')).to.equal(true);
    });
});
