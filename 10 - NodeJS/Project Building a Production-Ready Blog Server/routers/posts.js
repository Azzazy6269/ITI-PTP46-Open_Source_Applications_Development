const express = require('express');
const postsController = require('../controllers/posts');
const schemas = require('../schemas/posts');
const validate = require('../middlewares/validate');
const authenticate = require('../middlewares/authenticate');
const restrictToRolesorOwner = require('../middlewares/restrictToRolesorOwner');
const restrictToRolesOnly = require('../middlewares/restrictToRolesOnly');
const imageKit = require('../middlewares/upload');
const router = express.Router();

//increase view by 1 if the user hasn't seen the post before
router.post('/:id/view',authenticate , postsController.IncresePostViewById);

// get draft posts for author only
//Get /posts/schedule
router.get('/draft',authenticate ,validate(schemas.getDraftPostsSchema), postsController.getDraftPosts);

// get published posts of anyone by userId (like openning his profile)
//Get /posts/schedule
router.get('/:userId/publish',authenticate ,validate(schemas.getPublishedPostsSchema), postsController.getPublishedPosts);

// get scheduled posts for author only
//Get /posts/schedule
router.get('/schedule',authenticate ,validate(schemas.getScheduledPostsSchema), postsController.getScheduledPosts);

//Search posts
//GET http://localhost:3000/posts/search?title=random&dateStart=2026-01-24T16:57:11.647Z&dateEnd=2026-01-30T20:02:15.882Z&tags=firsttag
//GET http://localhost:3000/posts/search?content=moh&dateStart=2026-01-24T16:57:11.647Z&dateEnd=2026-01-30T20:02:15.882Z&tags=firsttag
router.get('/search',authenticate ,validate(schemas.searchPostsSchema), postsController.searchPosts);

// create post
//http://localhost:3000/posts
router.post('/', authenticate ,validate(schemas.createPostSchema), postsController.createPost);

// get all posts
//http://localhost:3000/posts/
router.get('/',  authenticate ,  validate(schemas.getAllPostsSchema), postsController.getAllPosts);

// get post by id //and increase view by 1 if the user hasn't seen the post before 
//http://localhost:3000/posts/:id
router.get('/:id',  authenticate ,postsController.getPostById);

// update post by id
// http://localhost:3000/posts/:id
router.patch('/:id', authenticate , restrictToRolesorOwner.postRestrictTo(['admin']) ,validate(schemas.updatePostSchema), postsController.updatePostById);

// delete post by id
// http://localhost:3000/posts/:id
router.delete('/:id', authenticate ,restrictToRolesorOwner.postRestrictTo(['admin'])  ,postsController.deletePostById);

// upload post images
// http://localhost:3000/posts/:id/images
router.post('/:id/images',authenticate ,restrictToRolesorOwner.postRestrictTo([]) , imageKit.uploadPostImages , postsController.uploadPostImages);

//delete post images
//http://localhost:3000/posts/:id/images/:id
router.delete('/:id/images/:fileId',authenticate ,restrictToRolesorOwner.postRestrictTo([]) , postsController.deletePostImage);




const commentRouter = require('./comments');
router.use('/:postId/comments', commentRouter);

const likeRouter = require('./likes');
router.use('/:targetId/likes', likeRouter);

module.exports = router;