/* global $ */

var backend = "https://script.google.com/macros/s/AKfycbzuIDCquJg6xUUn-OQ3D5BMZayXxciru5i6bOKjnNFg4OtE6p0/exec";

var pad2 = function(number) {
  return ( number < 10 ? '0' : '' ) + number;
};

var main = function() {
  
  var today = new Date();
  var currentDate = today.getFullYear() + "-" + pad2(today.getMonth()+1) + "-" + pad2(today.getDate());
  var currentHour = today.getHours();
  var rand = new Date( Math.floor(Math.random() * 10000000000000) );
  var randomDate = rand.getFullYear() + "-" + pad2(rand.getMonth() + 1) + "-" + pad2(rand.getDate());
  console.log(randomDate);

  $.ajax(
    {
      type: "GET",
      url: backend,
      crossDomain: true,
      dataType: "jsonp",
      data: {
        date: currentDate,
      },
      success: function(response) {
        let $target = $('a#day');
        $target.attr('href', response.data.href);
        $target.text($target.text() + response.data.name);
      }
    }
  );

  $.ajax(
    {
      type: "GET",
      url: backend,
      crossDomain: true,
      dataType: "jsonp",
      data: {
        date: currentDate,
        hour: currentHour
      },
      success: function(response) {
        let $target = $('a#hour');
        $target.attr('href', response.data.href);
        $target.text($target.text() + response.data.name);
      }
    }
  );

  $.ajax(
    {
      type: "GET",
      url: backend,
      crossDomain: true,
      dataType: "jsonp",
      data: {
        date: randomDate
      },
      success: function(response) {
        let $target = $('a#random');
        $target.attr('href', response.data.href);
        $target.text($target.text() + response.data.name);
      }
    }
  );
  
};

$(document).ready(main);
