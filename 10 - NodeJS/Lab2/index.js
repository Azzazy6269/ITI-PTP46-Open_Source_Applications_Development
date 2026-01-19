const mongoose = require('mongoose');
const express = require('express');
const { timeStamp } = require('node:console');
const app = express()
app.use(express.json());


const postsSchema = mongoose.Schema({
    title:{type:String , required:true},
    content:{type:String , required:true},
    author:{type:String , required:true},
    tags:{type:[String]},
    published:{type:Boolean , default:false},
    likes:{type:Number , default:0},
},{timestamps : true}
);
const Post = mongoose.model('Post',postsSchema);

// create post
app.post('/post', async (req,res)=>{
    const {title, content,author} = req.body;
    if(!title || !content || !author){
        return res.status(400).json({ message: "All fields are required" })
    } 
    const post = await Post.create({title, content,author})
    res.status(201).json({ message: "post created successfully", data: post })
})

//get all posts
app.get('/post', async (req, res) => {
    let { page = 1, limit = 10 } = req.query;
    page = Number(page);
    limit = Number(limit);
    const postsPromise = Post.find().skip((page - 1) * limit).limit(limit);
    const totalPromise = Post.countDocuments();
    const [posts, total] = await Promise.all([postsPromise, totalPromise]);
    res.json({
        message: "Posts fetched successfully", data: posts, pagenation: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit)
        }
    })
})

//get post by ID
app.get('/post/:id', async (req, res) => {
    const { id } = req.params;
    if(!mongoose.isValidObjectId(id)){
        return res.status(400).json({ message: "Invalid post ID" })
    }
    const post =await Post.findOne({_id : id});
    if (!post) {
        return res.status(404).json({ message: "post not found" })
    }
    res.json({
        message: "Posts fetched successfully", data: post
    })
})

//update post by id
app.patch('/post/:id', async (req, res) => {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ message: "Invalid post ID" })
    }
    const { title, content, author,tags, published} = req.body;

    const updatedPost = await Post.findOneAndUpdate({ _id: id }, { title, content, author,tags, published}, { new: true });

    if (!updatedPost) {
        return res.status(404).json({ message: "post not found" })
    }
    res.json({ message: "post updated successfully", data: updatedPost });
})

//delete user by id
app.delete('/post/:id',async (req,res)=>{
    const {id} = req.params;
    if(!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ message : " Invalid post ID "})
    }
    const deletedPost = await Post.findOneAndDelete({_id : id});
    if(!deletedPost){
        return res.status(404).json({ message : " post not found "})
    }
    res.json({message : "post deleted successfully"})
})

//start listen to port 3000
app.listen(3000, () => {
    mongoose.connect('mongodb://localhost:27017/iti-zag').then(() => {
        console.log('✅✅ Connected to MongoDB')
    }).catch((err) => {
        console.log('❌❌ Connected to MongoDB')
        console.log(err)
    });
    console.log('✅✅ Server is running on Port:3000');
});








