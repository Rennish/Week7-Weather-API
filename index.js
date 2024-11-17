
function refreshWeather(currentweather){

  //document.write(currentweather.data.temperature.current)

 //let currentTemperature = Math.round(currentweather.data.temperature.current) ; 

 //document.write(currentTemperature); 

 let currenteTemperatureValue = document.querySelector("#currenttemperaturevalue"); 

 //currenteTemperatureValue.innerHTML = currentTemperature ; 
 //this is a shorter way of doing the exact same thing the commented codes do. 
 currenteTemperatureValue.innerHTML = Math.round(currentweather.data.temperature.current) ; 

 let weatherDescription = document.querySelector("#weatherdescription") ; 
 weatherDescription.innerHTML = currentweather.data.condition.description ; 


 let currentWeatherIcon = document.querySelector("#currentweathericon"); 
 //currentWeatherIcon.innerHTML = currentweather.data.condition.icon ; 

 console.log(currentweather.data); 
 
 let humidity = document.querySelector("#Humidity"); 

 humidity.innerHTML = `${currentweather.data.temperature.humidity}%`; 

 let windSpeed = document.querySelector("#windspeed"); 
 windSpeed.innerHTML  = `${currentweather.data.wind.speed} knots `; 

 let currentTime = document.querySelector("#currenttime"); 
 let date = new Date(currentweather.data.time * 1000); 
 currentTime.innerHTML = formatDate(date);
 
}

function formatDate(date){
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = ["Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
  ]

  let day = days[date.getDay()]; 

  if (minutes <10){
    minutes = `0${minutes}` ; 
  }

  return `${day} ${hours}:${minutes}` ; 
}

function searchCity(currentcityName){
  let apiKey = "73dof19a030ad06t05b21e8521b4860f"; 
  let apiurl = `https://api.shecodes.io/weather/v1/current?query=${currentcityName}&key=${apiKey}`; 
  //console.log(currentcityName); 

  axios.get(apiurl).then(refreshWeather); 
  //console.log(apiurl); 
}
function displayCity(event){
  event.preventDefault(); 
  
  let cityName = document.querySelector("#city-name"); 
  let cityNamedisplayed = document.querySelector("h3"); 
  cityNamedisplayed.innerHTML = cityName.value ; 

  currentcityname = cityName.value
  searchCity(currentcityname) ; 
}
let searchForm = document.querySelector("#search-form"); 
searchForm.addEventListener("submit", displayCity); 
