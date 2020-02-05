// const express = require("express");
// const router = express.Router();

let db = require("../models");

module.exports = function(app){

    //gets existing burgers to be eaten
    app.get("/", (req, res) => {
        db.Burger.findAll({raw: true})
        .then(data => {
            res.render("index", {burgers: data});
        })
        .catch(err => console.log(err));
    
    });
     
    app.get("/api/burgers", (req, res) => {
        db.Burger.findAll({}).then(data => res.json(data));
    });
    //add burgers to be eaten
    app.post("/api/burgers", (req, res) => {
        console.log(req.body);
        
        db.Burger.create({
            burger_name: req.body.burger_name
        })
            .then(data => {
                res.json({id: data.id});
                res.end();
            })
            .catch(err => console.log(err));
    
       
    });
}

