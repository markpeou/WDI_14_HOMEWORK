var request = require('request');

var city = process.argv[2]

var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + process.env.Weather_API
request(url, function(error,response,body) {
  console.log(JSON.parse(body).main.temp);
});
