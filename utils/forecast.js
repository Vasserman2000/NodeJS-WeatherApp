const request = require('request');
const common = require('./common');

const getWeather = function (error, coordinates) {
    var token = common.getDarkSkyToken();

    var url = `https://api.darksky.net/forecast/${token}/${coordinates.latitude},${coordinates.longitude}?units=si&lang=en`;

    request({url: url, json: true}, (error, response) => {
        if (error) {
            console.log('Unable to connect to weather service!');
        } else if (response.body.error) {
            console.log('Unable to find location!');
        }
        console.log('Forecast for:', coordinates.geoResponse.body.features[0].place_name);
        console.log('Temperature:',response.body.currently.temperature, 'degrees, Percip:', response.body.currently.precipProbability, '%');
    });
}

module.exports = getWeather;