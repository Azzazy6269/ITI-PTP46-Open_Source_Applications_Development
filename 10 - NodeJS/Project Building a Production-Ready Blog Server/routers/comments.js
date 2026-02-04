const express = require('express');
const commentsController = require('../controllers/comments');
const schemas = require('../schemas/comments');
const validate = require('../middlewares/validate');
const authenticate = require('../middlewares/authenticate');
const restrictToRolesorOwner = require('../middlewares/restrictToRolesorOwner');
const restrictToRolesOnly = require('../middlewares/restrictToRolesOnly');
const router = express.Router({ mergeParams: true });


// create comment  =>  POST /posts/:postId/comments 
router.post('/', authenticate, validate(schemas.createCommentSchema), commentsController.createComment)

// get all comments       =>  GET/comments
// get comments by postId =>  GET /posts/:postId/comments 
router.get('/', authenticate, validate(schemas.getAllCommentsSchema), (req,res,next)=>{
    if(req.params.postId){
        commentsController.getCommentsByPost(req,res,next);
    }else if(req.user.role ==='admin'){ 
        commentsController.getAllComments(req,res,next);
    }else{
        return next(new APIError("Access denied. Admin only or postId required.", 403));
    }
});//we had to handle Authorization here instead of restrictTo because of multiple meannings of the path


// get comment by id  =>  GET /comments/:id  or  GET /posts/:postId/comments/:id
router.get('/:id', authenticate,commentsController.getCommentById) ;

// update comment by id  =>  GET /comments/:id  or  GET /posts/:postId/comments/:id
router.patch('/:id', authenticate, restrictToRolesorOwner.commentRestrictTo([]), validate(schemas.updateCommentSchema), commentsController.updateCommentById);

// delete comment by id  =>  GET /comments/:id  or  GET /posts/:postId/comments/:id
router.delete('/:id', authenticate, restrictToRolesorOwner.commentRestrictTo(['admin', 'postOwner']), commentsController.deleteCommentById);


const likeRouter = require('./likes');
router.use('/:targetId/likes', likeRouter);


module.exports = router;