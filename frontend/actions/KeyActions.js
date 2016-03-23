var KeyStore = require('../stores/KeyStore.js');
var KeyListener = require('../util/KeyListener');
var TONES = require('../constants/Tones.js');
var AppDispatcher = require('../dispatcher/Dispatcher');

 var KeyActions = {
	keyPressed: function (key) {

		var payload = {
			actionType: "press",
			note: key
		};
		AppDispatcher.dispatch(payload);
	},

	keyReleased: function (key) {
		var payload = {
			actionType: "release",
			note: key
		};
		AppDispatcher.dispatch(payload);
	}
};


module.exports = KeyActions;
