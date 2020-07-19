import 'mocha'

import chai from 'chai'
import chaiHttp from 'chai-http'
import App from '../../app'
import { Express } from 'express'
import {before} from 'mocha'
import config from '../../config'
chai.use(chaiHttp)

let application:App
export let app : Express

before(async() =>{
  application = new App(config)
  app = application.app
  console.log("start test ....")
})
