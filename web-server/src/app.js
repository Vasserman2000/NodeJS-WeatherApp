const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geoCode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

/* Index page */
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        author: 'ElishaV'
    });
});

/* Help page */
app.get('/help', (req, res) => {
    res.render('help', {
        author: 'ElishaV',
        year: '2019',
        title: 'Help'
    });
});

/* About page */
app.get('/about', (req, res) => {
    res.render('about', {
        author: 'ElishaV',
        year: '2019',
        title: 'About'
    });
});

/* Weather page */
app.get('/weather', (req, res) => {
    var location = req.query.location;
    if (!location) {
        return res.send({
            error: 'You must provide location!'
        });
    }   
    geoCode(location, (error, coordinates) => {
        if (error) {
            return console.log(error);
        }

        forecast(coordinates, (weather) => {
            res.send({
                weather
            });
        });
    });
});


/* 404 page */
app.get('/help/*', (req, res) => {
    res.render('404', {
        errorMessage: 'Help article not found',
        title: '404',
        author: 'ElishaV'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        errorMessage: 'Page not found',
        title: '404',
        author: 'ElishaV'
    });
});


app.listen(3000, () => {
    console.log('Server is up on port 3000...'); 
});