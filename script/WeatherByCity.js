// JavaScript File

function getWeatherByCity(fnOK, fnError, cityName) {
    console.log(cityName);
    $.getJSON(
        'http://api.openweathermap.org/data/2.5/forecast/daily?q=' 
        + cityName + '&APPID=dd1b5adf11309defd12e273e2d0732a2&cnt=3&units=metric' + '&lang=ua&callback=?',
        function (data) {
            fnOK.call(this, data);
        }
    );
}