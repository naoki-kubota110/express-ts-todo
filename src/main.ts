import express from 'express'
import router from "./routes"
import layouts from 'express-ejs-layouts'
import path from 'path'
import mongoose from "mongoose"

mongoose.connect('mongodb+srv://naoki0110:<naoki2507>@cluster0.mszls.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.Promise = global.Promise

const app = express()
const port = 3000
app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "views"))
app.use(layouts)
app.use(express.static(__dirname + "/public"))
app.use("/", router)
app.listen(port, () => {
  console.log("serve start")
})