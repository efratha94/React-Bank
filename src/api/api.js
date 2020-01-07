const express = require("express")
const router = express.Router()
const Transaction = require("../models/transactionSchema")


router.get("/transactions", async function(req, res){
    const transaction = await Transaction.find({}, function(err, transaction){
        res.status(200).send(transaction)
    })
})

router.post("/transaction", async function(req, res){
    const transaction = new Transaction(req.body)
    await transaction.save()
    res.send(transaction)
})

router.delete("/transaction", async function(req, res){
    const transaction = await Transaction.findOneAndDelete({amount: req.body.amount, vendor: req.body.vendor}, function(err, suc){
        if (err){
            console.log(err)
        } else {
            console.log("Transaction Deleted!")
        }
    })
})

module.exports = router