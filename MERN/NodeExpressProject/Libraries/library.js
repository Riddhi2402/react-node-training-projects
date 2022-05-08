const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
require('dotenv').config();
const mongoose = require("mongoose");
const bodyParser=require('body-parser');


module.exports = {
    express: express,
    path: path,
    cookieParser: cookieParser,
    session: session,
    mongoose: mongoose,
    bodyParser: bodyParser
}
