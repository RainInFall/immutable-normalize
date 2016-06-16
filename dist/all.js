'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var KEYS = Symbol('keys');
var PROTOTYPE = {};

var READABLE_HANDLER = {
  get: function get(me, key) {
    return me.get(key);
  },
  set: function set() {
    return false;
  },
  ownKeys: function ownKeys(me) {
    return Array.from(me, function (pair) {
      return pair[0];
    });
  },
  has: function has(me, key) {
    return me.has(key);
  },
  getPrototypeOf: function getPrototypeOf(me) {
    return me;
  },
  defineProperty: function defineProperty() {
    return false;
  },
  deleteProperty: function deleteProperty() {
    return false;
  },
  isExtensible: function isExtensible() {
    return false;
  },
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(me, key) {
    return me.has(key) ? { value: me.get(key), enumerable: true, writable: false, configurable: true } : undefined;
  }
};

var wrap = function wrap(me) {
  return new Proxy(me, READABLE_HANDLER);
};
exports.default = wrap;
var set = exports.set = function set(proxy, key, value) {
  return new Proxy(Object.getPrototypeOf(proxy).set(key, value), READABLE_HANDLER);
};
//# sourceMappingURL=all.js.map
