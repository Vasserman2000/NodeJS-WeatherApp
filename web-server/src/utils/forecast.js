const request = require('request');
const common = require('./common');
const chalk = require('chalk');

const getWeather = function ({latitude, longitude, geoResponse}, callback ) {
    var token = common.getDarkSkyToken();

    var url = `https://api.darksky.net/forecast/${token}/${latitude},${longitude}?units=si&lang=en`;

    request({url, json: true}, (error, {body}) => {
        if (error) {
            console.log('Unable to connect to weather service!');
        } else if (body.error) {
            console.log('Unable to find location!');
        }
        console.log('Forecast for:', chalk.yellow(geoResponse.body.features[0].place_name));
        console.log(chalk.green('Temperature:'),body.currently.temperature, 'degrees,', chalk.green('Percip:'), body.currently.precipProbability, '%');
        callback({ 
            currently: body.currently,
            geoResponse
         });
    });
}

module.exports = getWeather;