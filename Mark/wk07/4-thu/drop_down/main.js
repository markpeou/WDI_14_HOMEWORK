console.log('drop down');

var cities = ("NYC","SF","LA","ATX","SYD");
var background = ["nyc","sf","la","sydney","austin"]
var select = document.querySelector('select');


cities.forEach(function(city) {
  var option = document.createElement('option')
  option.value = city
  option.innerHTML = city
  select.appendChild(option)
});

function changeEventHandler(event) {
  var city = event.target("click")
  var body = document.querySelector('body')

  for(var i = 0; i < background.length; i++) {
    body.classList.remove(background[i])
  };

  for(var i = 0; i < cities.length; i++) {
    if (city.value === cities[i]) {
      body.classList.add(background[i])
    };
  };
};

document.addEventListener('DOMContentLoaded',function() {
  document.querySelector('select').onchange=changeEventHandler;},false);
})

// // append to city-type id
// document.querySelector("form").addEventListener("click",displayMenu)
// function displayMenu () {
// document.querySelector("option").append(cities)
//
// }


// document.querySelector("form").addEventListener("click",function() {
//   for ( cities = 0; cities < cities.length; cities++) {
//     document.getElementById("city-type").append(cities)
//
//   }
// });

// function displayMenu() {
// var dropMenu = document.getElementById("city-type");
// var cities = document.createElement("cities")
//   cities.text = "NYC","SF","LA","ATX","SYD";
//   for (i = 0; i < cities.length; i++) {
//     dropMenu.append(cities.text);
// };
// };
//
//
// dropMenu.append(cities.text);
