var YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

function formatResults(item) {
  return `
  <div class="videoModule">
    <img src="${item.snippet.thumbnails.default.url}" width="${item.snippet.thumbnails.default.width}" height="${item.snippet.thumbnails.default.height}" />
    <span>${item.snippet.description}</span>
    </div>`
}

function displayYouTubeSearchData(data) {
  var results = data.items.map(function(item, index) {
    $('.js-search-results').append(formatResults(item));
    return item;
  });
}

function watchSubmit() {
  $('.js-search-form').submit(function(event) {
    event.preventDefault();
    $('.js-search-results').html("")
    var queryTarget = $(event.currentTarget).find('.js-query');
    var query = queryTarget.val();
    queryTarget.val("");
   
   $.get('https://www.googleapis.com/youtube/v3/search', 
    { 
      part:'snippet', 
      key: 'AIzaSyBu-SMenbweWfuAaEhANAnuUauTw3SK8iY', 
      q: query 
    }, 
    function(data){
      displayYouTubeSearchData(data)
    })
  });
}

$(watchSubmit);