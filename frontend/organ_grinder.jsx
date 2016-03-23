var Note = require('./util/Note.js');
var TONES = require('./constants/Tones.js');
var KeyListener = require('./util/KeyListener');
var React = require("react");
var ReactDOM = require("react-dom");
var Key = require("./components/Key.jsx");
var Organ = require("./components/Organ.jsx");

  $(document).ready(function (e) {
    ReactDOM.render(
      <Organ />,
      $("content")[0]
    );
  });
