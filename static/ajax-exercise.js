"use strict";


// PART 1: SHOW A FORTUNE
function showFortune(result) {
    // Display fortune in div#fortune-text
    $('#fortune-text').html(result);
}


function getFortune(evt) {
    $.get('/fortune', showFortune);
}


$('#get-fortune-button').on('click', getFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();

    // TODO: request weather with that URL and show the forecast in #weather-info
    $.get(url, function(result) {
        alert(result['forecast']);
    });
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    var formValues = $('#order-form').serialize();
    $.post('/order-melons.json', formValues, function (result) {
        // TODO: show the result message after your form
        var message = $('#order-status');
        message.html(result.msg);

        // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
        if (result.code === 'ERROR') {
            message.addClass('order-error');
        } else {
            message.removeClass('order-error');
        }
    });
}

$("#order-form").on('submit', orderMelons);


