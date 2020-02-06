# Burger-Logger
A full stack application that allows the user to add burgers, devour them, and delete them.

# Built With
* Node.js
* Javascript
* jQuery
* Express
* Express Handlebars 
* MySQL
* Sequelize

# Functionality
When the user runs the app, you create burgers through entering it into the text area, it then fills the left side of the screen with burgers to be eaten and also create a devour button to go with it. When you click the devour button, it moves the burger to the "Devoured" side of the page, which is the right side, and then adds a delete button with it, to stop from over filling the page or having to manually clear the table in the db.

# Connecting to the Database Locally
If you clone this repo, and want to run this locally, go into the config folder, and in config.json, for "development" add your credentials in there, make sure you have created the database and allowed your user permissions, then run the app with node server.

# Link to Deployed Application
https://safe-sands-79519.herokuapp.com/

# Author
Cassidy Fortner