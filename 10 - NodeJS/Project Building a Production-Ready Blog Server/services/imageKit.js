const ImageKit = require('imagekit');
const APIError = require('../utils/APIError')

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

const uploadImage = async (fileBuffer, fileName, folder)=>{
    try{
        const response = await imagekit.upload({
            file : fileBuffer,
            fileName : fileName,
            folder : folder
        });
        return response;
    }catch(error){
        throw new APIError("failed to upload",400)
    }
}

const deleteImage = async (fileId)=>{
    try{
        const response = await imagekit.deleteFile(fileId)
        return response;
    }catch(error){
        throw new APIError("failed to deleteFile",400)
    }
}

const getImageUrl = (fileId, transformations = []) => {
    return imagekit.url({
        path: fileId,
        transformation: transformations
    });
};


module.exports = {uploadImage,deleteImage,getImageUrl}