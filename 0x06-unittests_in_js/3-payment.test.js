const {expect} = require('chai');
const sinon = require('sinon');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');


describe('sendPaymentRequestToApi', function(){
    it('sendPaymentRequestToApi() calls Utils.calculateNumber()', function(){
        const spy = sinon.spy(Utils);
        expect(spy.calculateNumber.called).to.equal(false);
        sendPaymentRequestToApi(100, 20);
        expect(spy.calculateNumber.called).to.equal(true);
        expect(spy.calculateNumber.calledWith('SUM', 100, 20)).to.equal(true);
        spy.calculateNumber.restore();
    });
});
