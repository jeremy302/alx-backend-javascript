const {expect} = require('chai');
const sinon = require('sinon');
const request = require('request');

describe('express server', function(){
    it('status and body', function(done){
        const url = 'https://localhost:7865/';
        
        request.get(url,(err, res, body)=>{
            expect(res.statusCode).to.equal(200);
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});
