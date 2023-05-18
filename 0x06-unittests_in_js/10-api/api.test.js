const {expect} = require('chai');
const sinon = require('sinon');
const request = require('request');


describe('express server', function(){
    const url = 'http://localhost:7865';

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

    it('GET /card/<non-number>', function(done){
        request.get(`${url}/cart/47ab`,(err, res, body)=>{
            expect(res.statusCode >= 400 && res.statusCode < 500).to.equal(true);
            done();
        });
    });


    it('POST /login', function (done) {
        request.post(`${url}/login`, {json: {userName: 'abc'}}, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.equal('Welcome abc');
            done();
        });
    });

    it('GET /available_payments', function (done) {
        request.get(
            `${url}/available_payments`,
            {json: {userName: 'Pinkbrook'}},
            (err, res, body) => {
                const obj = JSON.parse(body);
                expect(res.statusCode).to.equal(200);
                expect(obj)
                    .to.deep.equal(
                        {
                            payment_methods:
                            {
                                credit_cards: true,
                                paypal: false
                            }});
                done();
        });
    });
});
