
function refreshWeather(currentweather){

  //document.write(currentweather.data.temperature.current)

 //let currentTemperature = Math.round(currentweather.data.temperature.current) ; 

 //document.write(currentTemperature); 

 let currenteTemperatureValue = document.querySelector("#currenttemperaturevalue"); 

 //currenteTemperatureValue.innerHTML = currentTemperature ; 
 //this is a shorter way of doing the exact same thing the commented codes do. 
 currenteTemperatureValue.innerHTML = Math.round(currentweather.data.temperature.current) ; 
 
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
