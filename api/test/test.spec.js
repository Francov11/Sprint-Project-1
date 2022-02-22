const chai = require("chai")
const expect = chai.expect
const request = require('supertest')
const app = require("../index")

describe("register",function(){

    it("Devuelve el status code 200 si el usuario se registro con exito", done =>{
        const newUser={
            name: "test",
            lastName: "test",
            email: "test@nothing.com",
            phoneNumber:"123",
            password: "1234",
            repeatPassword: "1234",
            address: "address123"
        }
        request(app)
            .post("/auth/register/")
            .send(newUser)
            .end(function(err,res){
                chai.expect(res.statusCode).equals(200)
                done()
            })
    })
    it("Devuelve el status code 404, si no se ingresaron los campos obligatorios",(done)=>{
        const newUser={
            name: "test",
            lastName:"",
            email: "test@nothing.com",
            phoneNumber:"123",
            password: "",
            repeatPassword: "1234",
            address: "address1" 
        }
        request(app)
            .post("/auth/register")
            .send(newUser)
            .end(function(err,res){
                chai.expect(res.statusCode).equals(404)
                done()
            })
    })

})