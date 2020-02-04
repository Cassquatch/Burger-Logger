const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgerController.js");

//dynamic port for hosting, default port for local use
const PORT = process.env.PORT || 8080;


const app = express();
//set up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//set up the routes to the server
app.use(routes);




app.listen(PORT, function() {
    //show where the server is listening
    console.log("Server listening on: http://localhost:" + PORT);
  });
  