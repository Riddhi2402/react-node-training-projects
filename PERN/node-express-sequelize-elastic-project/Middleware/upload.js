const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: './public/uploads',
  filename: (request, file, cb) => {
    cb(null, Date.now()+'-'+file.originalname+path.extname(file.originalname));
  },
});

const uploadFile = multer({ storage: storage });
module.exports = uploadFile;
