var AppDispatcher = require('../dispatcher/Dispatcher.js');
var Store = require('flux/utils').Store;
var KeyStore = new Store(AppDispatcher);
var _keys = [];



var addKey = function (key) {
	if (_keys.indexOf(key) === -1) _keys.push(key);
	KeyStore.__emitChange();
};

var removeKey = function (key) {

	var removed = _keys.indexOf(key);
	_keys.splice(removed, 1);
	KeyStore.__emitChange();
};

KeyStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
  case "press":
    addKey(payload.note);
    break;
  case "release":
    removeKey(payload.note);
    break;
  }
};

KeyStore.all = function(){
	return _keys.slice();
};

module.exports = KeyStore;
