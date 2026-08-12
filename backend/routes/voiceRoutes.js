const express = require("express");
const multer = require("multer");

const router = express.Router();

const upload = multer({
    dest: "uploads/"
});


router.post("/", upload.single("audio"), (req,res)=>{

    console.log(req.file);

    res.json({
        message:"Audio received successfully"
    });

});


module.exports = router;