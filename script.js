const weatherContainer = document.querySelector(".weatherInfo");
const celciusBtn = document.getElementById("celcius");
const fahrenheitBtn = document.getElementById("fahrenheit");
let nomeCidade;
//Criar função que pegue as informações da API

const getCityWeather = function (city) {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=7c8dff78b47f4c0f8e0171820232308&q=${city}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderWeather(data, celciusTrue);
      //renderWeather(data) User a "data" numa função que agregara os elementos na pagina
    });
};

//scales button logic
let celciusTrue = false;
celciusBtn.addEventListener("click", function () {
  if (!celciusTrue) celciusTrue = true;
  //else celciusTrue = false;

  getCityWeather(nomeCidade, celciusTrue);
});
fahrenheitBtn.addEventListener("click", function () {
  if (celciusTrue) celciusTrue = false;
  //else celciusTrue = true;

  getCityWeather(nomeCidade, celciusTrue);
});

//função renderWeather

const renderWeather = (data, celciusTrue) => {
  weatherContainer.innerHTML = "";
  let temperatura;
  if (!celciusTrue) temperatura = `${data.current.temp_f} f`;
  else temperatura = ` ${data.current.temp_c} c`;
  const html = `
    
    <div class="city__data">
      <h3 class="country__name">${data.location.country}</h3>
      <h2 class="city_name">${data.location.name}</h4>
      <p class="localTime">Data e horario: ${data.location.localtime}</p>
       <h2 class="temperature">Temperatura: ${temperatura}</p>
    </div>
  `;
  weatherContainer.insertAdjacentHTML("afterbegin", html);
};

//function to get the city name
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  nomeCidade = document.getElementById("city").value;

  getCityWeather(nomeCidade, celciusTrue);
  console.log(nomeCidade);
});
