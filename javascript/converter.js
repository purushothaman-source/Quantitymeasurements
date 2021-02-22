$(document).ready(function () {
    var lengthoptions = ["meter", "centimeter", "millimeter", "kilometer", "mile"];
    $(".box1").click(() => {
        $("#select").empty();
        $.each(lengthoptions, function (index, value) {
            $("#select").append(`<option>` + value + `</option>` + '<br>');
        });
    });
    var temperatureoptions = ["Celsius", "Fahrenheit","Kelvin" ];
    $(".box2").click(() => {
        $("#select").empty();
        $.each(temperatureoptions, function (index, value) {
            $("#select").append(`<option> `+ value + `</option>` + '<br>');
        });
    });
    var volumeoptions = ["Litres", "Millilitres","Galons" ];
    $(".box3").click(() => {
        $("#select").empty();
        $.each(volumeoptions, function (index, value) {
            $("#select").append(`<option>` + value + `</option>` + '<br>');
        });
    });

});