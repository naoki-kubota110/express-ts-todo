import express from 'express'
import * as User from '../models/userModel'
export default {
  index: (req: express.Request, res: express.Response) => {
    const userss= User.find()
    res.render("users/index", {userss})
  },
}