'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = push;

var _siftup = require('./siftup');

var _siftup2 = _interopRequireDefault(_siftup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Inserts the jth element of an array in an existing
 * dary heap in interval [i, j[.
 *
 * Hypothesis : i <= j
 *
 * @param {int} arity arity of the heap
 * @param {function} compare the comparison function
 * @param {function} swap the swap function
 * @param {array} a the array where the heap is stored
 * @param {int} i is the root
 * @param {int} j - 1 is the new leaf
 */

function push(arity, compare, swap, a, i, j) {

  // sift up the new leaf

  return (0, _siftup2.default)(arity, compare, swap, a, i, j + 1, j);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL3B1c2guanMiXSwibmFtZXMiOlsicHVzaCIsImFyaXR5IiwiY29tcGFyZSIsInN3YXAiLCJhIiwiaSIsImoiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQWlCd0JBLEk7O0FBaEJ4Qjs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBY2UsU0FBU0EsSUFBVCxDQUFnQkMsS0FBaEIsRUFBdUJDLE9BQXZCLEVBQWdDQyxJQUFoQyxFQUFzQ0MsQ0FBdEMsRUFBeUNDLENBQXpDLEVBQTRDQyxDQUE1QyxFQUFnRDs7QUFFOUQ7O0FBRUEsU0FBTyxzQkFBUUwsS0FBUixFQUFlQyxPQUFmLEVBQXdCQyxJQUF4QixFQUE4QkMsQ0FBOUIsRUFBaUNDLENBQWpDLEVBQW9DQyxJQUFJLENBQXhDLEVBQTJDQSxDQUEzQyxDQUFQO0FBRUEiLCJmaWxlIjoicHVzaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHNpZnR1cCBmcm9tICcuL3NpZnR1cCcgO1xuXG4vKipcbiAqIEluc2VydHMgdGhlIGp0aCBlbGVtZW50IG9mIGFuIGFycmF5IGluIGFuIGV4aXN0aW5nXG4gKiBkYXJ5IGhlYXAgaW4gaW50ZXJ2YWwgW2ksIGpbLlxuICpcbiAqIEh5cG90aGVzaXMgOiBpIDw9IGpcbiAqXG4gKiBAcGFyYW0ge2ludH0gYXJpdHkgYXJpdHkgb2YgdGhlIGhlYXBcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbXBhcmUgdGhlIGNvbXBhcmlzb24gZnVuY3Rpb25cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHN3YXAgdGhlIHN3YXAgZnVuY3Rpb25cbiAqIEBwYXJhbSB7YXJyYXl9IGEgdGhlIGFycmF5IHdoZXJlIHRoZSBoZWFwIGlzIHN0b3JlZFxuICogQHBhcmFtIHtpbnR9IGkgaXMgdGhlIHJvb3RcbiAqIEBwYXJhbSB7aW50fSBqIC0gMSBpcyB0aGUgbmV3IGxlYWZcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwdXNoICggYXJpdHksIGNvbXBhcmUsIHN3YXAsIGEsIGksIGogKSB7XG5cblx0Ly8gc2lmdCB1cCB0aGUgbmV3IGxlYWZcblxuXHRyZXR1cm4gc2lmdHVwKCBhcml0eSwgY29tcGFyZSwgc3dhcCwgYSwgaSwgaiArIDEsIGogKTtcblxufVxuIl19