const express = require('express');

const app = express();

// if someone requests this page, this function would describe what will be sent back
app.get('', (req, res) => {
    res.send('<h1 style="background:yellow">Hello express!</h1>')
});

app.get('/help', (req, res) => {
    res.send('Help page');
});

app.get('/about', (req, res) => {
    res.send({
        name: 'Elisha',
        age: 33
    });
});

app.get('/weather', (req, res) => {
    res.send('Your weather');
});

// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000...');
});