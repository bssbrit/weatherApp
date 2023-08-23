const weatherContainer = document.querySelector(".weatherInfo");

//Criar função que pegue as informações da API
//Graus

const getCityWeather = function (city) {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=7c8dff78b47f4c0f8e0171820232308&q=${city}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderWeather(data);
      //renderWeather(data) User a "data" numa função que agregara os elementos na pagina
    });
};

getCityWeather("rio de janeiro");

//função renderWeather
/*
Informações que vamos mostrar:
nome da cidade
Pais
temperatura(C ou F)
horaŕio local
*/

const renderWeather = (data) => {
  const html = `
    
    <div class="city__data">
      <h3 class="country__name">${data.location.country}</h3>
      <h2 class="city_name">${data.location.name}</h4>
      <p class="localTime">Data e horario: ${data.location.localtime}</p>
       
    </div>
  `;
  weatherContainer.insertAdjacentHTML("afterbegin", html);
};
