import mongoose from "mongoose"
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    amount: Number,
    category: String,
    vendor: String
})

const Transaction = mongoose.model("transaction", transactionSchema)

export default transactionSchema