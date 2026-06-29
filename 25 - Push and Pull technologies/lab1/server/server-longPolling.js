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
    sender: { type: String, required: true },
    message: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

let subscribers = [];

app.post('/message', async (req, res) => {
    try {
        const { sender, message } = req.body;

        if (!message || !sender) {
            return res.status(400).json({ message: 'message and sender are required' });
        }

        const newMessage = new Message({ sender, message });
        await newMessage.save();

        const allMessages = await Message.find().sort({ timestamp: 1 });

        subscribers.forEach(sub => sub.res.status(200).json(allMessages));
        subscribers = [];

        return res.status(201).json({ message: 'message has been sent successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'unexpected error occured', error });
    }
});

app.get('/message', async (req, res) => {
    try {
        const { since } = req.query;

        if (!since) {
            const messages = await Message.find().sort({ timestamp: 1 });
            return res.status(200).json(messages);
        }

        const newMessages = await Message.find({ timestamp: { $gt: new Date(since) } });

        if (newMessages.length > 0) {
            const allMessages = await Message.find().sort({ timestamp: 1 });
            return res.status(200).json(allMessages);
        }

        subscribers.push({ res });

        const timeout = setTimeout(async () => {
            subscribers = subscribers.filter(sub => sub.res !== res);
            const allMessages = await Message.find().sort({ timestamp: 1 });
            if (!res.headersSent) {
                res.status(200).json(allMessages); 
            }
        }, 30000); 

        req.on('close', () => {
            clearTimeout(timeout);
            subscribers = subscribers.filter(sub => sub.res !== res);
        });

    } catch (error) {
        return res.status(500).json({ message: 'unexpected error occured', error });
    }
});

app.listen(5000, () => console.log('Server running on port 5000'));