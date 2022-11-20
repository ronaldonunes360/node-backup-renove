const multer = require("multer");
const path = require("path");

module.exports = {
    dest: path.resolve(__dirname, "..", "..", "uploads", "databases"),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, "..", "..", "uploads", "databases"));
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        },
    }),
}