console.log('boop');
// using s=jaws to request a list of movies
// use javascript dom creation to show it on the page wrapped in paragraphs for each movie

var options = {
  url: 'http://www.omdbapi.com/?apikey=2f6435d9&s=jaws'
  // method: 'get' //default
}

var movies = $('.movies');
// setting the movies container to a variable

var results = $.ajax(options).done(function(response) {
  // ajax is grabbing the results from the apikey. .done() a call back function. so it only runs when the first part of the code has finished running.

  response.Search.forEach(function(movie) {

    var newDivElem = $('<div>');
    var newH2Elem = $('<h2>');

    newH2Elem.text(movie.Title);
    newDivElem.append( newH2Elem );
    movies.append( newDivElem );
  });
});


// var createParagraph = function(text) {
//   var newpara = document.createElement('p');
//   newPara.textContent = text;
//   return newPara;
// }
//
//


// function myForEach(arr,fn) {
//   for (var i = 0; i < arr.length; i++) {
//     fn(arr[i])
//   }
// }
// var fruits = ['lychee','banana','pineapple'];
//                   // callback function
// myForEach(fruits,function(thing) {console.log("DON'T eat " + thing.toUpperCase() + "S"
// )
// })

// $.ajax(options).done(function(response){console.log(response)});
// IOC inversion of control
// this console log will log first cos it will run before the ajax method runs.
// console.log('look over here');
