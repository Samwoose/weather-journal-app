# Weather Journal App Project
This project is to implement the functionalities that get weather information from the
OpenWeatherMap API and store some information to our server(server.js) then get & print out it
with user's feeling 

## Installation
- Node
- express
- body-parser
- cors
(Node packages can be installed with npm install 'name of package')

## Directory structure
website
- image
-- background_image.png
- app.js
- index.html
- style.css
README.md
server.js

## How to check out the website
- Get your personal OpenWeatherMap API key by signing up the web service at http://openweathermap.com/
- Set varible 'apiKey' to your API key in app.js 
- Open the terminal and navigate your working directory to the directory where the server.js is located.
- Run the server with command:
node server.js
- Open your browser(e.g. Chrome) and type http://localhost:3000/
- Enter zip code and your current feeling.
e.g. zip code : 90007 
     How are you feeling today: I am happy!
- Click Generate button. 

## Important functions in app.js
-const zipCodeChecker = (zipCode)
 * check if zip code is provided and return true if the zip code is valid
 * -invalid case1: zip code is not provided
 * -invalid case2: provided zip code is not valid in U.S.
 * @param {string} zipCode zip code entered by user on the browser.
 * @return {boolean} true/false 


-userFeelingChecker(userFeeling)
 * check if user feeling is provided and return true if it has been provided.
 * -invalid case1: user feeling is not provided
 * @param {string} userFeeling userFeeling entered by user on the browser when user clicked Generate button.
 * @return {boolean} true/false 

-getWeather(baseURL, countryCode, apiKey, zipCode)
 * async GET request function from external API(OpenWeatherMap)
 * @param {string} baseURL Base url to the OpenWeatherMap API.
 * @param {string} countryCode Country code of interest.
 * @param {string} apiKey Personal API key of OpenWeatherMap API.
 * @param {string} zipCode zip code entered by user on the browser.
 * @return {json} weatherData json of weather data from OpenWeather API

-postWeather(url,weatherData,userResponse,date)
 * async POST request function.
 * It updates pojectData object in server side(which is run by server.js)
 
 * @param {string} url endpoint that will trigger post request and save the data in server.
 * @param {Promise} weatherData Promise type and current weather data from OpenWeather API.
 * @param {string} userResponse User's feeling. It comes from users input on Web journal browser
 * @param {string} date current data
 * @return {json} newlyFormedData newly formed weather, date, and user response data in JSON

-getTempDateFeelingDataNUdateUI ()
 * async GET request function from our server (server.js)
 * and get projectData from our server
 * @param {string} url url to our server to get the projectData.
 * @return {none} none


-getNPostWeatherNUpdateUI(e)
 * Make GET and POST requests to our server and update UI
 * @param {Object} e event object.
 * @return {none} none


## Important routes in server.js
-app.get("/data",(req,res) 
 * Add a GET route that returns the projectData object. 

-app.post("/addFeeling",(req,res)
 * Add a POST route that adds incoming data to projectData Object

## Future work
- Check if the provided zip code is valid. 
- Customize UI more visually pleasantly 

## Licence
Udacity