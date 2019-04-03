const fs = require('fs');
const path = require('path');

let getMapboxToken = function () {
    return 'pk.eyJ1IjoidmFzc2VybWFuMjAwMCIsImEiOiJjanQ2OWdra3AwNWlvNDNtenpvOXJhenA1In0.64v1LxmIGdbMYtB6LVzwHg';
}

let getDarkSkyToken = function () {
    return '2a82c8bdfe73c0c8788432b45fb9ee99';
}

let getRandomCity = function (callback) {
     fs.readFile(path.join('./src/', 'cities.json'), { encoding: 'utf-8'}, function (err, data) {
        if (!err) {
            const citiesJson = (JSON.parse(data)).cities;
            const citiesCount = citiesJson.length;
            callback(citiesJson[Math.floor(Math.random() * citiesCount)].city);
        } else {
            console.log(err);
        }
    });
}

module.exports =  { 
    getMapboxToken,
    getDarkSkyToken,
    getRandomCity
}