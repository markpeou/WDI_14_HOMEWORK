console.log('boop');

$('button').on('click',function(event) {
  event.preventDefault();
  var searchInput = $('#search').val()
  var $grid = $('.grid');

  var gif = {
  url: 'http://api.giphy.com/v1/gifs/search?q='+ searchInput + '&api_key=kIzooqT0a3mcgRR8wXYXAvqJRNCDFXpY&limit=5&offset=10'
};

var results = $.ajax(gif).done(function(res) {
  res.data.forEach(function(gifs) {
    var newDivElem = $('<div>');
    var newImgElem = $('<img src=' + gifs.images.original.url +'>');
      $('.grid').append(newImgElem);
      $(window).scroll(function() {
        if ($(window).scrollTop() == $(document).height() - $(window).height())
        $('.grid').append(newImgElem);
      });
    });
  });
});
