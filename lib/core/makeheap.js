'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeheap;

var _siftdown = require('./siftdown');

var _siftdown2 = _interopRequireDefault(_siftdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Builds a heap in O(n) operations.
 *
 * @param {int} arity arity of the heap
 * @param {function} compare the comparison function
 * @param {function} swap the swap function
 * @param {array} a the array where the heap is stored
 * @param {int} i left inner bound
 * @param {int} j right outer bound
 *
 */

function makeheap(arity, compare, swap, a, i, j) {

  for (var k = i + (j - i + arity - 2) / arity | 0; k-- > i;) {

    (0, _siftdown2.default)(arity, compare, swap, a, i, j, k);
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL21ha2VoZWFwLmpzIl0sIm5hbWVzIjpbIm1ha2VoZWFwIiwiYXJpdHkiLCJjb21wYXJlIiwic3dhcCIsImEiLCJpIiwiaiIsImsiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQWV3QkEsUTs7QUFkeEI7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7QUFZZSxTQUFTQSxRQUFULENBQW9CQyxLQUFwQixFQUE0QkMsT0FBNUIsRUFBc0NDLElBQXRDLEVBQTZDQyxDQUE3QyxFQUFpREMsQ0FBakQsRUFBcURDLENBQXJELEVBQXlEOztBQUV2RSxPQUFNLElBQUlDLElBQUlGLElBQUksQ0FBRUMsSUFBSUQsQ0FBSixHQUFRSixLQUFSLEdBQWdCLENBQWxCLElBQXdCQSxLQUE1QixHQUFvQyxDQUFsRCxFQUFzRE0sTUFBTUYsQ0FBNUQsR0FBa0U7O0FBRWpFLDRCQUFVSixLQUFWLEVBQWtCQyxPQUFsQixFQUE0QkMsSUFBNUIsRUFBbUNDLENBQW5DLEVBQXVDQyxDQUF2QyxFQUEyQ0MsQ0FBM0MsRUFBK0NDLENBQS9DO0FBRUE7QUFFRCIsImZpbGUiOiJtYWtlaGVhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHNpZnRkb3duIGZyb20gJy4vc2lmdGRvd24nIDtcblxuLyoqXG4gKiBCdWlsZHMgYSBoZWFwIGluIE8obikgb3BlcmF0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge2ludH0gYXJpdHkgYXJpdHkgb2YgdGhlIGhlYXBcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbXBhcmUgdGhlIGNvbXBhcmlzb24gZnVuY3Rpb25cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHN3YXAgdGhlIHN3YXAgZnVuY3Rpb25cbiAqIEBwYXJhbSB7YXJyYXl9IGEgdGhlIGFycmF5IHdoZXJlIHRoZSBoZWFwIGlzIHN0b3JlZFxuICogQHBhcmFtIHtpbnR9IGkgbGVmdCBpbm5lciBib3VuZFxuICogQHBhcmFtIHtpbnR9IGogcmlnaHQgb3V0ZXIgYm91bmRcbiAqXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZWhlYXAgKCBhcml0eSAsIGNvbXBhcmUgLCBzd2FwICwgYSAsIGkgLCBqICkge1xuXG5cdGZvciAoIGxldCBrID0gaSArICggaiAtIGkgKyBhcml0eSAtIDIgKSAvIGFyaXR5IHwgMCA7IGsgLS0+IGkgOyApIHtcblxuXHRcdHNpZnRkb3duKCBhcml0eSAsIGNvbXBhcmUgLCBzd2FwICwgYSAsIGkgLCBqICwgayApIDtcblxuXHR9XG5cbn1cbiJdfQ==