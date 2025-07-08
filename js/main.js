let weatherCards = document.getElementById("weatherCards");
let searchInput = document.getElementById("search");
let searchButton = document.getElementById("submit");

function getWeather(city) {
  
  let url = "https://api.weatherapi.com/v1/forecast.xml?key=d5b47201da6d47d2b30235006250707&q=" + city + "&days=3";

  fetch(url)
    .then(function(response) {
      return response.text();
    })
    .then(function(data) {
      let parser = new DOMParser();
      let xml = parser.parseFromString(data, "application/xml");

      let forecastDays = xml.getElementsByTagName("forecastday");

      let output = "";

      
let day1 = forecastDays[0];

let date1 = day1.getElementsByTagName("date")[0].textContent;

let icon1 = "https:" + day1.getElementsByTagName("icon")[0].textContent;

      let temp1 = day1.getElementsByTagName("avgtemp_c")[0].textContent;

      let condition1 = day1.getElementsByTagName("text")[0].textContent;

output += "<div class='col-md-4'>";
output += "<div class='weather-card today p-3 h-100'>";
output += "<div class='d-flex justify-content-between'>";
output += "<p>" + new Date(date1).toLocaleDateString('en-US', { weekday: 'long' }) + "</p>";
output += "<p>" + date1 + "</p>";
output += "</div>";
output += "<h4>" + city + "</h4>";
output += "<div class='temp'>";
output += "<h2>" + temp1 + "°C</h2>";
output += "<img src='" + icon1 + "'>";
output += "</div>";
output += "<p>" + condition1 + "</p>";
output += "</div></div>";

      // Day 2
 let day2 = forecastDays[1];
let date2 = day2.getElementsByTagName("date")[0].textContent;
let icon2 = "https:" + day2.getElementsByTagName("icon")[0].textContent;
let temp2 = day2.getElementsByTagName("avgtemp_c")[0].textContent;
      let condition2 = day2.getElementsByTagName("text")[0].textContent;

output += "<div class='col-md-4'>";
output += "<div class='weather-card p-3 h-100'>";
output += "<p>" + new Date(date2).toLocaleDateString('en-US', { weekday: 'long' }) + "</p>";
output += "<img src='" + icon2 + "'>";
output += "<h3>" + temp2 + "°C</h3>";
output += "<p>" + condition2 + "</p>";
output += "</div></div>";

      // Day 3
let day3 = forecastDays[2];
let date3 = day3.getElementsByTagName("date")[0].textContent;
let icon3 = "https:" + day3.getElementsByTagName("icon")[0].textContent;
let temp3 = day3.getElementsByTagName("avgtemp_c")[0].textContent;
let condition3 = day3.getElementsByTagName("text")[0].textContent;

output += "<div class='col-md-4'>";
output += "<div class='weather-card p-3 h-100'>";
output += "<p>" + new Date(date3).toLocaleDateString('en-US', { weekday: 'long' }) + "</p>";
output += "<img src='" + icon3 + "'>";
output += "<h3>" + temp3 + "°C</h3>";
output += "<p>" + condition3 + "</p>";
output += "</div></div>";

weatherCards.innerHTML = output;

    })
.catch(function(error) {
console.log("Error:", error);
    });
}

window.addEventListener("DOMContentLoaded", function() {
  getWeather("Cairo");
});

searchButton.addEventListener("click", function() {
  let city = searchInput.value;
  getWeather(city);
});
