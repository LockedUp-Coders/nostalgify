import chai from 'chai'
import chaiHttp from 'chai-http'
import { describe, it } from 'mocha'

var should = chai.should();

import app from '../src/app'


chai.use(chaiHttp)
const { expect } = chai




describe('profile update',()=>  {

  it('should update the profile pge and return a message',(hi)=>{
   let update={
    firstname:'harshil',
    lastname:'shah',
    password:'123',
    teams:['2','3']
   }
   chai.request('http://localhost:3000')
   .post('/user/profile')
   .send(update)
   .end((err,res)=>{
    res.should.have.status(200);
    res.body.should.be.json;
    hi()
   }).catch((e)=>hi(e))
  })
  
})


/*

describe('Test Suite', () => {
  it('Should Just Pass', (done) => {
    chai
      .request(app)
      .get('/')
      .then((res) => {
        expect(res.status).to.be.equal(200)
        done()
      })
      .catch((e) => done(e))
  })
})
*/