import express from "express"
export default {
  index: (req: express.Request, res: express.Response) => {
    res.send("<h1>top page</h1>")
  }
}