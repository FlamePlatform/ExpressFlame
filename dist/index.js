"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpressFlame = ExpressFlame;

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ExpressFlame(func) {
  return (function (func) {
    return function express_middleware(req, res) {
      return new _promise2.default(function (resolve, reject) {
        //acting function
        func.call(null, req, res, function (err) {
          if (err) return reject(err);
          resolve();
        });
      });
    };
  })(func);
}