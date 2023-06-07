const cookieParser = require('cookie-parser');
const express = require('express');
const path = require('path');
const session = require('express-session');
const ssr = require('../middleware/ssr');
const sessionConfig = require('./sessionConfig');

const config = (app) => {
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static(path.join(__dirname, '..', 'public')));
  app.use(ssr);
  app.use(session(sessionConfig));
};

module.exports = config;
