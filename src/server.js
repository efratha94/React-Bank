const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const app = express()
const port = 3002
const api = require("./api/api")


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
mongoose.connect("mongodb://localhost/bank-react-app", { useNewUrlParser: true, useUnifiedTopology: true  })


app.use("/", api)

app.listen(port, function(){
    console.log("Running on port " + port)
})