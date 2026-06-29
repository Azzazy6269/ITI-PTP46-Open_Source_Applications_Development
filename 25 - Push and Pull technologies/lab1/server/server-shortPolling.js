const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/pollingChat')
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch((err) => console.error('MongoDB connection error:', err));

const messageSchema = new mongoose.Schema({
    sender: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const Message = mongoose.model('Message', messageSchema);

app.post('/message',async (req,res)=>{
    try{
        const {sender,message} = req.body;

        if(!message || !sender){
            return res.status(400).json({message:'message and sender are required'})
        }

        const newMessage =await new Message({sender,message});
        await newMessage.save();

        return res.status(201).json({message:'message has been sent successfully'});
    }catch(error){
        return res.status(500).json({message:'unexpected error occured',error});
    }
})

app.get('/message',async (req,res)=>{
    try{
        const messages = await Message.find().sort({ timestamp: 1 });
        return res.status(200).json(messages);
    }catch(error){
        return res.status(500).json({message:'unexpected error occured',error});
    }
})

app.listen(5000, () => console.log('Server running on port 5000'));