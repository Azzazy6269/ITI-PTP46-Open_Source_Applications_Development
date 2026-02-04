const express = require('express');
const likesController = require('../controllers/likes');
const schemas = require('../schemas/likes');
const validate = require('../middlewares/validate');
const authenticate = require('../middlewares/authenticate');
const restrictToRolesorOwner = require('../middlewares/restrictToRolesorOwner');
const restrictToRolesOnly = require('../middlewares/restrictToRolesOnly');
const router = express.Router({ mergeParams: true });


// toggle post Like  =>  POST /posts/:postId/likes
// toggle comment Like => POST /posts/:postId/comments/:commentId/likes
// toggle comment Like => POST /comments/:commentId/likes
router.post('/', authenticate, validate(schemas.createLikeSchema), likesController.toggleLike)

// get post LikesCount  =>  GET /posts/:postId/likes/count
// get comment LikesCount => GET /posts/:postId/comments/:commentId/likes/count
// get comment LikesCount => GET /comments/:commentId/likes/count
router.get('/count', authenticate, likesController.getLikesCount)

// isLikedByUser =>  GET /posts/:postId/likes/isLiked
// isLikedByUser => GET /posts/:postId/comments/:commentId/likes/count/isLiked
// isLikedByUser => GET /comments/:commentId/likes/count/isLiked
router.get('/isLiked', authenticate, likesController.isLikedByUser)


// getUserLikes  => GET /likes/me
router.get('/me', authenticate, likesController.getUserLikes)




module.exports = router;