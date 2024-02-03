// import multer from 'multer'
const multer = require('multer')

const storage = multer.memoryStorage();
module.exports.upload = multer({ storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 100
    }
 });

