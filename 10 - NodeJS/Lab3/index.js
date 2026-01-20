const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const userRouter = require('./routers/users');
const postRouter = require('./routers/posts');
const errorHandler = require('./middlewares/errorHandler');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());
app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use(errorHandler);

//start listen to port 3000
app.listen(process.env.PORT, () => {
     mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`).then(() => {
        console.log('✅✅ Connected to MongoDB')
    }).catch((err) => {
        console.log('❌❌ Connected to MongoDB')
        console.log(err)
    });
    console.log(`✅✅ Server is running on Port:${process.env.PORT}`);
});








