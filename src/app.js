/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');
var ajax = require('ajax');

var splashCard = new UI.Card({
  title: 'Barracuda',
  subtitle: 'Let me serve you',
  body: 'Press any button.'
});

splashCard.show();

splashCard.on('click', 'up', function(e) {
var URL = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk';  
  // Download data
  ajax({url: URL, type: 'json'},
    function(json) {
      // Convert temperature
      var temp = Math.round(json.main.temp - 273.15);

      // Use data to show a weather forecast Card
      var resultsCard = new UI.Card({
        title: 'London, UK',
        body: json.weather[0].main + '\nTemp: ' + temp
      });

      // Show results, remove splash card
      resultsCard.show();
      //splashCard.hide();
    },
    function(error) {
      console.log('Ajax failed: ' + error);
    }
  );


  // var menu = new UI.Menu({
  //   sections: [{
  //     items: [{
  //       title: 'Pebble.js',
  //       icon: 'images/menu_icon.png',
  //       subtitle: 'Can do Menus'
  //     }, {
  //       title: 'Second Item',
  //       subtitle: 'Subtitle Text'
  //     }]
  //   }]
  // });
  // menu.on('select', function(e) {
  //   console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
  //   console.log('The item is titled "' + e.item.title + '"');
  // });
  // menu.show();
});

splashCard.on('click', 'select', function(e) {
  var wind = new UI.Window({
    fullscreen: true,
  });
  var textfield = new UI.Text({
    position: new Vector2(0, 65),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'RINGING!!!',
    textAlign: 'center'
  });
  wind.add(textfield);
  wind.show();
});

// main.on('click', 'down', function(e) {
//   var card = new UI.Card();
//   card.title('A Card');
//   card.subtitle('Is a Window');
//   card.body('The simplest window type in Pebble.js.');
//   card.show();
// });
