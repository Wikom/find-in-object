"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * Created by rouven on 11.04.17.
 */
var findInObject = function findInObject(
/*string*/
key,
/*Object*/
object) {
  if (object == null || key == null) {
    return null;
  }

  var keyParts = key.split('.');

  if (keyParts.length > 1) {
    var newObject = object[keyParts.shift()];
    return findInObject(keyParts.join('.'), newObject);
  }

  return object && typeof object[key] !== 'undefined' ? object[key] : null;
};

var _default = findInObject;
exports["default"] = _default;