/* Global Variables */
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const countryCode = ',us'; //As of now, a user only can get the weather data in us
const apiKey = '&appid=84ff473286e612faa285c0e093aab1ea';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();



/**
 * async GET request function from external API(OpenWeatherMap)
 *
 * @param {string} baseURL Base url to the OpenWeatherMap API.
 * @param {string} countryCode Country code of interest.
 * @param {string} apiKey Personal API key of OpenWeatherMap API.
 * @param {string} zipCode zip code entered by user on the browser.
 * @return {json} weatherData json of weather data from OpenWeather API
 */
const getWeather = async (baseURL, countryCode, apiKey, zipCode) => {
    //get weather data from the OpenWeatherMap API and save it to variable
    
    const weatherResponse = await fetch (baseURL+zipCode+countryCode+apiKey)
    //if resolved try this.
    try{
        //conver to json form
        const weatherData = await weatherResponse.json();
        // Debug purpose
        //console.log(weatherData);
        //console.log(weatherData.main.temp);// This returens temperature in Kelvin. Need to convert to Celsius by subtracting 273.15  
        //console.log(weatherData.name);
        
        return weatherData
    } catch(error){
        console.log('For some reason, the task could not be finished',error);
    }
}

/**
 * async POST request function.
 * It updates pojectData object in server side(which is run by server.js)
 *
 * @param {} b B.
 * @param {} b B.
 * @param {} b B.
 * @param {} b B.
 * @return {number} x raised to the n-th power.
 */


const zipCode = 90007; // As of now it is a fixed value. It is Los Angeles Zip code
//const zipCode = document.querySelector('#zip').value ; //get zip code from user input
getWeather(baseURL, countryCode, apiKey, zipCode);
