const request = require('request');

const url = 'https://api.darksky.net/forecast/2a82c8bdfe73c0c8788432b45fb9ee99/37.8267,-122.4233?units=si&lang=ru';

request({ url: url, json: true }, (error, response) => {
    const currently = response.body.currently;
    console.log(response.body.daily.data[0].summary + ' It is currently ', currently.temperature, ' degrees out. There is a', currently.precipProbability, '% chanse of rain.');
})