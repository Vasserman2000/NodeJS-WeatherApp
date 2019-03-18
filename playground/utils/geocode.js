const request = require('request');

const getCoordinates = function (city, token, callback) {
    const mapBoxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${token}`;

    request({url: mapBoxUrl, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect  to location services!', undefined);
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined);
        } else {
            var coordinates, center = response.body.features[0].center;
            var city = response.body.features[0].text;
            if (center) {
                coordinates = {
                    'longitude': center[0],
                    'latitude': center[1],
                    'city': city
                };
                callback(undefined, coordinates);
            }
        }
    });
};

module.exports = getCoordinates;