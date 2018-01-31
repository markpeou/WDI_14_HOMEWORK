console.log('boop');

$('button').on('click',function() {
  var searchInput = $('#search').val()
  var $movies = $('.movies');

  var options = {
    url: 'http://www.omdbapi.com/?apikey=2f6435d9&s='+ searchInput,
    method: 'get'
  };
debugger
  var results = $.ajax(options).done(function(response) {
  // ajax is grabbing the results from the apikey. .done() a call back function. so it only runs when the first part of the code has finished running.
  response.Search.forEach(function(movie) {
    var newDivElem = $('<div>');
    var newAnchorElem = $('<a href="#"></a>');
    var newH2Elem = $('<h2>');

      newH2Elem.text(movie.Title);
      newAnchorElem.attr("href", 'http://www.imdb.com/title/' + movie.imdbID)
      newAnchorElem.append(newH2Elem);
      newDivElem.append(newAnchorElem);
      $movies.append(newDivElem);
      });
    });
});
