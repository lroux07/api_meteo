const cityName = document.querySelector('#cityName');
const send = document.querySelector('#send');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const container = document.querySelector('.container');

async function getApi() {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName.value}&APPID=0eee845fbfb08dcc0204fcb70613dc4a`;
  const response = await fetch(url);
  
  const api = await response.json();
  console.log(api);

  affiche(api);
}

send.addEventListener('click', (event) => {
  event.preventDefault();
  getApi();

});

function affiche(api) {
  h1.textContent = api.city.name;
  h2.textContent = api.city.country;
}

const article = document.createElement('article');
container.appendChild(article);

// Dans l'article on met la date, la temperature minimum et la temperature maximum