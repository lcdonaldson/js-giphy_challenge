$(document).ready(function () {
    var offset = 20;
    var placeholder;

    function makeGiphyCall(offset) {
        var api = "http://api.giphy.com/v1/gifs/search?";
        var apiKey = "&api_key=dc6zaTOxFJmzC";
        var written = $("#name").val();

        if (placeholder != written) {
            $('.content').html("");
            placeholder = written;
            offset = 20;
        };

        var query = "&q=" + written + "&limit=20&offset=" + offset;
        var url = api + apiKey + query;
        var xhr = $.get(url);

        xhr.done(function(giphy) {
        // When the request has been made, and you get a response
            for (var i = 0; i < giphy.data.length; i++) {
                var data = giphy.data[i].images.downsized.url;
                var result = $('.content').append("<img src='" + data + "'/>");
            };

        });
    }

    $("button").on("click", function(event){
        event.preventDefault();

        makeGiphyCall();

        $(window).scroll(function() {
            if($(window).scrollTop() == $(document).height() - $(window).height()) {
                makeGiphyCall(offset);
                offset += 20;
            }
        });

    });

});