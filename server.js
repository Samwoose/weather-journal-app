// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
//local host port is 3000
const port = 3000;
//These lines of code will verify if the server is running by 
//calling callback function
const server = app.listen(port, callback);
function callback(){
    console.log('server running');
    console.log(`runnig on localhost: ${port}`);
}

//Add a GET route that returns the projectData object. 
app.get("/data",(req,res)=>{
    //returns the projectData object to client when GET request is made
    res.send(projectData);
});

//Add a POST route that adds incoming data to projectData Object
app.post("/addFeeling",(req,res)=>{
    //create a new entry for an object
    const newEntry = {
        temperature : req.body.temperature,
        date : req.body.date,
        userResponse : req.body.userResponse,
    }
    //push the new entry to the object
    //projectData.push(newEntry);
    projectData = newEntry ;
});
