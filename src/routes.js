const routes = require('express').Router();
const multer = require("multer");
const multerConfigs = require("./config/multer");

routes.post("/bakcupdatabase", multer(multerConfigs).single('file'), (req, res) => {
    return res.json({ hello: "wold" });
});

module.exports = routes;