const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require("helmet");
const { sanitizeMongoInput } = require("express-v5-mongo-sanitize");
const { xss } = require('express-xss-sanitizer');
const hpp = require('hpp');
require('dotenv').config();

const rateLimiter = require('./middlewares/rateLimiter');

const userRouter = require('./routers/users');
const postRouter = require('./routers/posts');
const donationRouter = require('./routers/donations');
const commentRouter = require('./routers/comments')
const likeRouter = require('./routers/likes')
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// app level middleware
app.set('trust proxy', 1);
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(sanitizeMongoInput);
app.use(xss());
app.use(hpp());
app.use(rateLimiter);

// routers
app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/donations' ,donationRouter);
app.use('/comments' ,commentRouter);
app.use('/likes' ,likeRouter);


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








