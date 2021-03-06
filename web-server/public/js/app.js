console.log('Client side javascript');

fetch('http://localhost:3000/random-city').then((response => {
    response.json().then((data) => {
        console.log(data);
    });
}));



const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageParagraph = document.querySelector('#message');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;
    messageParagraph.textContent = 'Loading ...';

    fetch(`/weather?location=${location}}`).then((response => {
    response.json().then((data) => {
        if (data.weather) {
            messageParagraph.textContent = `The temperature for ${data.weather.geoResponse.body.features[0].place_name} is  ${data.weather.currently.temperature}`;
        } else {
            messageParagraph.textContent = data.error;
        }
    });
}));
});
