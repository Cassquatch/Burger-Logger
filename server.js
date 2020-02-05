const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgerController.js");
const db = require("./models");

//dynamic port for hosting, default port for local use
const PORT = process.env.PORT || 8080;


const app = express();
//set up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//setting up data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//point to the static
app.use(express.static("public"));
//set up the routes to the server
// app.use(routes);
require("./routes/api-routes.js")(app);






db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("Server listening on: http://localhost:" + PORT);
    });
  });