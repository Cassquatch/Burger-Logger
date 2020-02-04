// const express = require("express");
// const router = express.Router();
const Burger = require("../models/Burger.js");
const db = require("../config/connection.js");

module.exports = function(app){

    //gets existing burgers to be eaten
    app.get("/", (req, res) => {
        Burger.findAll({})
        .then(data => {
            console.log(data);
            res.render("index", {burgers: data});
        })
        .catch(err => console.log(err));
    
    });
     
    app.get("/api/burgers", (req, res) => {
        Burger.findAll({}).then(data => res.json(data));
    });
    //add burgers to be eaten
    app.post("/api/burgers", (req, res) => {
        console.log(req.body);
        
        Burger.create({
            burger_name: req.body.burger_name,
            
        })
            .then(data => {
                res.json({id: data.id});
                res.end();
            })
            .catch(err => console.log(err));
    
       
    });
}

