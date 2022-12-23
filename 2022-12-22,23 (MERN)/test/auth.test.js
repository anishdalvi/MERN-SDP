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
                username: 'test',
                email: "test@email.com",
                password:'1234'
            })
            .end((err, res) =>{
                console.log(err);
                console.log(res.body);
                expect(res.body.message).equal('Registration Successful')
                expect(res.body.data.username).equal('test')
                expect(res.body.data.email).equal('test@email.com')
                expect(res.body.data).not.have.property('password')
                
            })
            done()
        })

        it('Should register failed when email is not provided', (done) => {
            request(app).post('/api/auth/register')
            .send({
                username:'test',
                password:'1234'
            })
            .end((err, res) => {
                expect(res.body.message).equal('Registration Failed')
                expect(res.body.error).equal('Username, Email and Password not found')
                done(err)
                
            })
        })

        describe('POST /login', function () 
        {
            it('should login successfully', function (done) {
              request(app).post('/api/auth/login')
                .send({
                  email: 'test@email.com',
                  password: '1234'
                })
                .end((err, res) => {
                  expect(res.body.message).equal('Login Successful')
                  expect(res.body).have.property('access_token')
                  expect(res.body).not.have.property('password')
                  done(err)
                })
            })
        
            it('should login fail when invalid password is provided', function (done) {
              request(app).post('/api/auth/login')
                .send({
                  email: 'test@email.com',
                  password: 'invalid'
                })
                .end((err, res) => {
                  expect(res.body.message).equal('Login Failed')
                  expect(res.body.error).equal('Invalid Password')
                  done(err)
                })
            })
        })

    })
})