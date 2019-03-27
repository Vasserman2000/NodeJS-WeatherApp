const path = require('path');

const express = require('express');

const app = express();

// Define pathsfor Express cinfig
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'ElishaV'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        author: 'Elishav',
        year: '2019'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        author: 'Elishav',
        year: '2019'
    });
});

app.get('/weather', (req, res) => {
    res.send('Your weather');
});


app.listen(3000, () => {
    console.log('Server is up on port 3000...'); 
});