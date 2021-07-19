import express from 'express'
import usersController from '../controllers/usersController'

const router = express.Router()
router.get("/", usersController.index) 
export default router