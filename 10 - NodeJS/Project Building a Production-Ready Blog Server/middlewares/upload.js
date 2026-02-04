const multer = require('multer');
const path = require('path');
const APIError = require('../utils/APIError');

const storage = multer.memoryStorage();

const fileFilter = (req,file,cb)=>{
    const allowedTypes = /jpeg|jpg|png|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    if(extname && mimetype){
        return cb(null,true);
    }else{
        cb(new APIError('Only images (jpg, png, webp) are allowed!', 400), false);
    }
}

const uploadProfile = multer({
    storage,
    fileFilter,
    limits:{fileSize : 1024 *1024 *2}
}).single('profilePicture');

    
const uploadPostImages = multer({
    storage,
    fileFilter,
    limits:{fileSize : 1024 *1024 *5}
}).array('images',5);

module.exports={uploadProfile,uploadPostImages}