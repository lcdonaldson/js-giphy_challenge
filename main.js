$(document).ready(function () {
    var offset = 20;
    var placeholder;

    function makeGiphyCall(offset) {
        // Set the variables
        var api = "http://api.giphy.com/v1/gifs/search?";
        var apiKey = "&api_key=dc6zaTOxFJmzC";
        var written = $("#name").val();

        if (placeholder != written) {
            $('.content').html("");
            placeholder = written;
            offset = 20;
        };
        // Get the data from search input
        var query = "&q=" + written + "&limit=20&offset=" + offset;
        var url = api + apiKey + query;
        var xhr = $.get(url);

        // When the request has been made, and you get a response
        // Iterate through results and place on the page.
        xhr.done(function(giphy) {
            for (var i = 0; i < giphy.data.length; i++) {
                var data = giphy.data[i].images.downsized.url;
                var result = $('.content').append("<img src='" + data + "'/>");
            };

        });
    }

    // click event which executes call to function above
    $("button").on("click", function(event){
        event.preventDefault();

        makeGiphyCall();
        // Load next set of images when scrolled to bottom of
        // the page
        $(window).scroll(function() {
            if($(window).scrollTop() == $(document).height() - $(window).height()) {
                makeGiphyCall(offset);
                offset += 20;
            }
        });

    });

});