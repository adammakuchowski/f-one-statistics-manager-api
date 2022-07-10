import express from "express"
import {apiTests} from '../actions/api/test'

const router = express.Router()

router.get('/apiWorkVerification', apiTests.apiWorkVerification)

export default router
