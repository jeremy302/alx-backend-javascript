const {expect} = require('chai');
const sinon = require('sinon');

const Utils = require('./utils');
const getPaymentTokenFromAPI = require('./6-payment_token');


describe('getPaymentTokenFromAPI', function(){
    const sandbox = sinon.createSandbox();
    it('getPaymentTokenFromAPI(true)', function(done){
        getPaymentTokenFromAPI(true).then((res)=>{            
            expect(res).to.deep.equal({data: 'Successful response from the API' });
            done();
        }).catch(()=>done(true));
    });
});
