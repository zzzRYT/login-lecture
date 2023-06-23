"use strict";

const express = require('express');
const router = express();

const ctrl = require('./home.ctrl');

router.get("/", ctrl.index);

router.get("/login", ctrl.login);

module.exports = router;