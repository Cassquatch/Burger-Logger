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

    app.put("/api/burgers/:id", (req, res) => {
        console.log(req.params.id);
        db.Burger.findOne({
            where: {
                id: req.params.id
            },

                
            
        }).then((result) => {
            console.log(result);
            result.update({
                devoured: req.body.devoured
            });
            res.status(200).end();
        });
    });

    app.delete("/api/burgers/:id", (req, res) => {
        
        db.Burger.destroy({
          where: {
            id: req.params.id
          }
        }).then(() => {
         
          res.end();
        });
      });
    
}

