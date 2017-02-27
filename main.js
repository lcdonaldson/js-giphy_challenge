$(document).ready(function (){
    $("button").on("click", function(event){
        event.preventDefault();

        var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dc6zaTOxFJmzC&limit=5");
        // var img = $('<img/>', {src: xhr + '.png'});
        // img.appendTo('.content');

        xhr.done(function(data) { 
            // $('<p>' +  xhr + '</p>').appendTo('.content');
            console.log(data);
            var data = data.data[0].images.original.url;
            // var result = drawImage(data);
            document.getElementById("results").innerHTML = data; 

        });


        // var written = $("#name").val();
        // $('<p>' +  written + '</p>').appendTo('.content');



        // var api = "http://api.giphy.com/v1/gifs/search?";
        // var apiKey = "&api_key=dc6zaTOxFJmzC";
        // var query = "&q=ryan+gosling";

        // function setup() {
        //     noCanvas();
        //     var url = api + apiKey + query;
        //     loadJSON(url, gotData);
        // };

        // function gotData(data) {
        //     println(data.data[0].images.original.url)
        // };

                
    });

    

});