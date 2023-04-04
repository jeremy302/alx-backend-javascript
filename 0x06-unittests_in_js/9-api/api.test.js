const {expect} = require('chai');
const sinon = require('sinon');
const request = require('request');


describe('express server', function(){
    const url = 'https://localhost:7865';

    it('GET /', function(done){
        
        request.get(url,(err, res, body)=>{
            expect(res.statusCode).to.equal(200);
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });

    it('GET /card/<number>', function(done){
        
        request.get(`${url}/cart/47`,(err, res, body)=>{
            expect(res.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 47');
            done();
        });
    });

    it('GET /card/<letter>', function(done){
        request.get(`${url}/cart/47ab`,(err, res, body)=>{
            expect(res.statusCode >= 400 && res.statusCode < 400).to.equal(true);
            done();
        });
    });
});
