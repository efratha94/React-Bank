const express = require("express")
const router = express.Router()
const Transaction = require("../models/transactionSchema")


router.get("/transactions", async function(req, res){
    const transaction = await Transaction.find({}, function(err, transaction){
        res.send(transaction)
    })
})

router.post("/transaction", async function(req, res){
    const transaction = new Transaction(req.body)
    await transaction.save()
    res.send(transaction)
})

router.delete("/transaction", async function(req, res){
    const transaction = await Transaction.deleteOne({}, function(err, response){
        if (err){
            console.log(err)
        } else {
            console.log("Delete succeeded!")
        }
    })
})

module.exports = router