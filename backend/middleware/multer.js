// IF THERE IS ANY FORM OR ANYTHING IT GOES THROUGH THIS MIDDLEWARE AND SEND RESPONSE

import multer from "multer";

const storage = multer.diskStorage({
    filename:function(req,file,callback) {
        callback(null,file.originalname);
    }
});

const upload = multer({storage});

export default upload;