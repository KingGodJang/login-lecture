"use strict";

//모듈
const express = require('express');
const app = express();

const PORT = 3000;

//라우팅
const home = require("./routers/home");

//앱 세팅
app.set("views", "./views" );
app.set("view engine", "ejs");

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.


//
app.use('/public', express.static('public'));

module.exports = app;