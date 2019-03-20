const geoCode = require('./utils/geocode');
const forecast = require('./utils/forecast');


var city = process.argv[2];

if (!city) {
    console.log('Please provide a city');
} else {
    geoCode(city, (error, coordinates) => {
        if (error) {
            return console.log(error);
        }
        
        forecast(error, coordinates);
    }); 
}