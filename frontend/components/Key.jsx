var React = require("react");
var KeyStore = require("./../stores/KeyStore.js");
var KeyListener = require("./../util/KeyListener.js");
var AppDispatcher = require('../dispatcher/Dispatcher');
var Note = require("./../util/Note.js");
var TONES = require("./../constants/Tones");

var Key = React.createClass({
	getInitialState: function() {
		return { keys: [] };
	},

	componentDidMount: function() {

		this.KeyStoreToken = KeyStore.addListener(this.setStateFromStore);
		this.Note = new Note(TONES.TONES[this.props.note]);
		// KeyListener.keyDown();
		// KeyListener.keyUp();
	},
	componentWillUnmount: function () {
		this.KeyStoreToken.remove();
	},

	setStateFromStore: function(){
		this.setState({ keys: KeyStore.all()} );
	},

	render: function() {
		if (this.Note){
			if (this.state.keys.indexOf(this.props.note) !== -1) {
				this.Note.start();
				return (<div> {this.props.note} playing  {this.state.keys}</div>);
			} else {
				this.Note.stop();
				return (<div> {this.props.note} not playing  {this.state.keys}</div>);
			}
		} else {
			return (<h1>{this.props.note}    {this.state.keys}</h1>);
		}

	}
});

module.exports = Key;
