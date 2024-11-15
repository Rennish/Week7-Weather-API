// alert("its working"); 


function displayCity(event){
  event.preventDefault(); 
  
  let cityName = document.querySelector("#city-name"); 
  

  let cityNamedisplayed = document.querySelector("h3"); 
  cityNamedisplayed.innerHTML = cityName.value ; 
  
}
let searchForm = document.querySelector("#search-form"); 


searchForm.addEventListener("submit", displayCity); 