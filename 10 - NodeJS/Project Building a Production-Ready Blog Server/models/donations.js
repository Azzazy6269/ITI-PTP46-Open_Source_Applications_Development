const mongoose = require('mongoose');

//schema
const donationsSchema = mongoose.Schema({
    sessionId:{type:String , required:true},
    orderId:{type:String , required:true , unique:true},
    amount:{type:Number , required:true},
    status:{type:String ,enum : ["PENDING", "PAID", "FAILED", "REFUNDED"], default:"PENDING"},
    sessionURL:{type:String },
    webhookData:{type:mongoose.Schema.Types.Mixed}
},{timestamps : true}
);

//model
const Donation = mongoose.model('Donation',donationsSchema);

module.exports = Donation;