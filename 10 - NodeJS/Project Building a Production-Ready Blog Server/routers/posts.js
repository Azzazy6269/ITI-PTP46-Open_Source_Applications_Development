const express = require('express');
const postsController = require('../controllers/posts');
const schemas = require('../schemas/posts');
const validate = require('../middlewares/validate');
const authenticate = require('../middlewares/authenticate');
const restrictToRolesorOwner = require('../middlewares/restrictToRolesorOwner');
const restrictToRolesOnly = require('../middlewares/restrictToRolesOnly');
const imageKit = require('../middlewares/upload');
const router = express.Router();

// create post
router.post('/', authenticate ,validate(schemas.createPostSchema), postsController.createPost);

// get all posts
router.get('/',  authenticate ,  validate(schemas.getAllPostsSchema), postsController.getAllPosts);

// get post by id
router.get('/:id',  authenticate ,postsController.getPostById);

// update post by id
router.patch('/:id', authenticate , restrictToRolesorOwner.postRestrictTo(['admin']) ,validate(schemas.updatePostSchema), postsController.updatePostById);

// delete post by id
router.delete('/:id', authenticate ,restrictToRolesorOwner.postRestrictTo(['admin'])  ,postsController.deletePostById);

// upload post images
router.post('/:id/images',authenticate ,restrictToRolesorOwner.postRestrictTo([]) , imageKit.uploadPostImages , postsController.uploadPostImages);

//delete post images
router.delete('/:id/images/:fileId',authenticate ,restrictToRolesorOwner.postRestrictTo([]) , postsController.deletePostImage);



const commentRouter = require('./comments');
router.use('/:postId/comments', commentRouter);

const likeRouter = require('./likes');
router.use('/:targetId/likes', likeRouter);

module.exports = router;