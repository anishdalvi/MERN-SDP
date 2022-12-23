const request = require('supertest')
const chai = require('chai')
const app = require('../index')
const Users = require('../models/User-model')
const sinon = require('sinon')
const nodemailer = require('nodemailer')


const expect = chai.expect

describe('Authentication Test Cases', function () {
    describe('POST /register', function(){
        let mailerStub
        before('drop collection',function(done){
            Users.deleteMany({})
            .then(()=>{
                const transport = {
                    sendMail: () => Promise.resolve()
                }
                mailerStub = sinon.stub(nodemailer, 'createTransport').returns(transport)
            })
            .then(()=>done())
            .catch((error)=>{done(error)})
        })

        it('Should register successfully', function(done){
            request(app).post('/api/auth/register')
            .send({
                username: 'Test DB New',
                email: "test@email.com",
                password:'1234'
            })
            .end((err, res) =>{
                console.log(err);
                console.log(res.body);
                expect(res.body.message).equal('Registration Successful')
                expect(res.body.data.username).equal('Test DB New')
                expect(res.body.data.email).equal('test@email.com')
                expect(res.body.data).not.have.property('password')
                
            })
            done()
        })
    })
})