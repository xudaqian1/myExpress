import chai, {expect} from 'chai'
import {app} from './helpers/tests-helper'

const userToRegister = {
  email: 'aas',
  password: 'adsafs',
  username: 'sdafa'
}

describe("Register",()=>{
  describe("POST /api/users/register", ()=>{
    it('用户名为空', async()=>{
      const res = await chai.request(app).post('/users/register').send(userToRegister)
      expect(res).to.have.status(400)
    })
  })
})