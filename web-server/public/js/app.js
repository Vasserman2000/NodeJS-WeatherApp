console.log('Client side javascript');

fetch('http://localhost:3000/random-city').then((response => {
    response.json().then((data) => {
        console.log(data);
    });
}));



const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;

    fetch(`http://localhost:3000/weather?location=${location}}`).then((response => {
    response.json().then((data) => {
        console.log(data);
    });
}));
});
