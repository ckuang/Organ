var React = require("react");
var KeyStore = require("./../stores/KeyStore.js");
var KeyListener = require("./../util/KeyListener.js");
var AppDispatcher = require('../dispatcher/Dispatcher');
var Note = require("./../util/Note.js");
var TONES = require("./../constants/Tones");
var Key = require("./Key");

var alpha = [ "A", "B", "C", "D", "E", "F", "G"];

var Organ = React.createClass({
	componentDidMount: function () {
		KeyListener.keyDown();
		KeyListener.keyUp();
	},
	render: function() {
		var keys = alpha.map(function (letter, idx) {
			return (
				<li key={idx}>
					<Key note={letter} />
				</li>
		);
		});

		return (
			<ul>
				{keys}
			</ul>
		);
	}
});

module.exports = Organ;
