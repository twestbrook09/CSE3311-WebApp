"use strict";
const express = require("express");
let router = express.Router();

router.get('/', (req, response) => {
    response.render('check_status');
});

module.exports = router;