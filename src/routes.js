const routes = require('express').Router();
const multer = require("multer");
const multerConfigs = require("./config/multer");

routes.post("/backupdatabase", multer(multerConfigs).single('file'), (req, res) => {
    return res.json({ backup: "success" });
});

module.exports = routes;