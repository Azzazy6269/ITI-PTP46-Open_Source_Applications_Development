const express = require('express');
const postsController = require('../controllers/posts');
const schemas = require('../schemas');
const validate = require('../middlewares/validate');
const authenticate = require('../middlewares/authenticate');
const restrictTo = require('../middlewares/restrictTo');
const router = express.Router();

// create post
router.post('/',authenticate, validate(schemas.createPostSchema), postsController.createPost);

// get all posts
router.get('/',  authenticate ,validate(schemas.getAllPostsSchema), postsController.getAllPosts);

// get post by id
router.get('/:id',  authenticate ,postsController.getPostById);

// update post by id
router.patch('/:id', authenticate , validate(schemas.updatePostSchema), postsController.updatePostById);


// delete post by id
router.delete('/:id', authenticate , postsController.deletePostById);


module.exports = router;