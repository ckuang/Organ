var Notes = require('./Note.js');
var TONES = require('../constants/Tones.js');
var AppDispatcher = require('../dispatcher/Dispatcher');
var KeyActions = require('../actions/KeyActions');

var KeyListener = {
	keyDown: function(){

		$(document).on("keydown", function(event) {
			KeyActions.keyPressed(TONES.MAPPINGS[event.keyCode]);
		});
	},

	keyUp: function(){
		$(document).on("keyup", function(event) {

			KeyActions.keyReleased(TONES.MAPPINGS[event.keyCode]);
		});
	}
};

module.exports = KeyListener;
