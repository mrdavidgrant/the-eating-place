"use strict"

const express       = require('express')
const routes        = express.Router()
const app           = express();

require('dotenv').config();

module.exports = function(helper, knex) {
  app.set("view engine", "ejs");
  app.use(express.static("public"));
  var twilioHelper = require('../twilioServerStuff')

  routes
    .get("/", (req, res) => {
      helper.query((result) => {
        res.render('index', {result: result})
      })

    })

    .get("/order/:id", (req, res) => {
      res.redirect('/')
    })

    .post("/order", (req, res) => {
      helper.insert(req.body)
      // twilioHelper.messageSMS(req.body)
      // twilioHelper.messageCall(req.body)

      res.send('').status(201);
    })

    .put("/order/:id", (req, res) => {
      res.redirect('/')
    })


  return routes

}
