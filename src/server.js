const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const app = express()
const port = 3002
const api = require("./api/api")


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
mongoose.connect("mongodb://localhost/bank-react-app", { useNewUrlParser: true, useUnifiedTopology: true  })

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.use("/", api)

app.listen(port, function(){
    console.log("Running on port " + port)
})