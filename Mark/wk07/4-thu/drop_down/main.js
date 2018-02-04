console.log('drop down');

var cities = ("NYC","SF","LA","ATX","SYD");
var option = []

// append to city-type id
document.querySelector("form").addEventListener("click",displayMenu)
function displayMenu () {
document.querySelector("option").append(cities)

}


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
