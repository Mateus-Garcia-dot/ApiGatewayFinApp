import { Router } from 'express'
import { echoTest } from '../controller/echoTest.controller'

const mainRoute = Router()

mainRoute.post('/echoTest', echoTest)

export { mainRoute }
