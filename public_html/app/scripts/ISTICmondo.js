function displayText(){																 //display JSON from url
    $.getJSON('http://localhost:8084/TAATP3/rest/personnes/getName', function(data){ //can also add to the url:  ?callback=?
        $("#textDisplay").text(data.nom);
        $("#textDisplay").html(data.nom);
        $("#textDisplay").text(data.prenom);    //even this doesn't work
        $("#textDisplay").html(data.prenom);
        alert("parsed ok");
    });
    /*
     
    //second code to try
    $.get("http://localhost:8084/TAATP3/rest/personnes/getName", {callback : "?" }, "jsonp",  function(data) {
    $('#textDisplay').text(data.nom);
});
    
    
 /*
    //third code to try
    $.ajax({
                type: "GET",
                url: "http://localhost:8084/TAATP3/rest/personnes/getName",
                dataType: "jsonp",               
                cache:true,             
                success: function(data) {
                alert(data);                     
                }
            });     
    
    // fourth code to try
     $.ajax({
    url: 'http://localhost:8084/TAATP3/rest/personnes/getName',
    type: "GET",
    dataType: "jsonp",
    async:false,
     success: function (msg) {
         JsonpCallback(msg);
    },
    error: function () {
        ErrorFunction();
    }

});*/

}


function JsonpCallback(json)
{
 document.getElementById('textDisplay').innerHtml=json.valueOf(nom);

}


var fadeOutTime=1000;
var slideUpTime=1500;

function GO(){
    $("#LoginScreen").children().fadeOut(fadeOutTime);
    $("#LoginScreen").slideUp(slideUpTime,function(){
    $("#LoginScreen").insertAfter($("#CreateUser")).children().fadeIn(10);
    $("#LoginScreen").slideDown(10);
    });
}

function go2(){
    $("#Personnes").children().fadeOut(fadeOutTime);
    $("#Personnes").slideUp(slideUpTime,function(){
    $("#Personnes").remove().insertAfter($("#LoginScreen")).children().fadeIn(10);
    $("#Personnes").slideDown(10);
    });
}
function go3(){
    $("#Seances").children().fadeOut(fadeOutTime);
    $("#Seances").slideUp(slideUpTime,function(){
    $("#Seances").remove().insertAfter($("#Personnes")).children().fadeIn(10);
    $("#Seances").slideDown(10);
    });
}
function go4(){
    $("#CreateUser").children().fadeOut(fadeOutTime);
    $("#CreateUser").slideUp(slideUpTime,function(){
    $("#CreateUser").remove().insertAfter($("#Seances")).children().fadeIn(10);
    $("#CreateUser").slideDown(10);
    });
}