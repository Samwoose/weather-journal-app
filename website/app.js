/* Global Variables */
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const conutryCode = ',us'; //As of now, a user only can get the weather data in us
const apiKey = '&appid=84ff473286e612faa285c0e093aab1ea';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
