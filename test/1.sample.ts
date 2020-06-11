import chai from 'chai'
import chaiHttp from 'chai-http'
import { describe, it } from 'mocha'

import app from '../src/app'

chai.use(chaiHttp)
const { expect } = chai

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
