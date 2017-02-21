'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;

var _siftup = require('./siftup');

var _siftup2 = _interopRequireDefault(_siftup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Merges heaps at intervals [i, j[ and [j, k[ in array *a*
 * into a new heap at interval [i, k[.
 *
 * Hypothesis :
 *
 *   - i <= j <= k
 *   - j - 1 is the last leaf ot the first heap
 *
 * @param {int} arity arity of the heap
 * @param {function} compare the comparison function
 * @param {function} swap the swap function
 * @param {array} a the array where the two heaps are stored
 * @param {int} i is the root of the first heap
 * @param {int} j is the root of the second heap
 * @param {int} k - 1 is the index of the last leaf in the second heap
 */

function merge(arity, compare, swap, a, i, j, k) {

  for (; j < k; ++j) {
    (0, _siftup2.default)(arity, compare, swap, a, i, j + 1, j);
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL21lcmdlLmpzIl0sIm5hbWVzIjpbIm1lcmdlIiwiYXJpdHkiLCJjb21wYXJlIiwic3dhcCIsImEiLCJpIiwiaiIsImsiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQXFCd0JBLEs7O0FBcEJ4Qjs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCZSxTQUFTQSxLQUFULENBQWlCQyxLQUFqQixFQUF3QkMsT0FBeEIsRUFBaUNDLElBQWpDLEVBQXVDQyxDQUF2QyxFQUEwQ0MsQ0FBMUMsRUFBNkNDLENBQTdDLEVBQWdEQyxDQUFoRCxFQUFvRDs7QUFFbEUsU0FBUUQsSUFBSUMsQ0FBWixFQUFnQixFQUFFRCxDQUFsQixFQUFzQjtBQUNyQiwwQkFBUUwsS0FBUixFQUFlQyxPQUFmLEVBQXdCQyxJQUF4QixFQUE4QkMsQ0FBOUIsRUFBaUNDLENBQWpDLEVBQW9DQyxJQUFJLENBQXhDLEVBQTJDQSxDQUEzQztBQUNBO0FBRUQiLCJmaWxlIjoibWVyZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBzaWZ0dXAgZnJvbSAnLi9zaWZ0dXAnIDtcblxuLyoqXG4gKiBNZXJnZXMgaGVhcHMgYXQgaW50ZXJ2YWxzIFtpLCBqWyBhbmQgW2osIGtbIGluIGFycmF5ICphKlxuICogaW50byBhIG5ldyBoZWFwIGF0IGludGVydmFsIFtpLCBrWy5cbiAqXG4gKiBIeXBvdGhlc2lzIDpcbiAqXG4gKiAgIC0gaSA8PSBqIDw9IGtcbiAqICAgLSBqIC0gMSBpcyB0aGUgbGFzdCBsZWFmIG90IHRoZSBmaXJzdCBoZWFwXG4gKlxuICogQHBhcmFtIHtpbnR9IGFyaXR5IGFyaXR5IG9mIHRoZSBoZWFwXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjb21wYXJlIHRoZSBjb21wYXJpc29uIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzd2FwIHRoZSBzd2FwIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge2FycmF5fSBhIHRoZSBhcnJheSB3aGVyZSB0aGUgdHdvIGhlYXBzIGFyZSBzdG9yZWRcbiAqIEBwYXJhbSB7aW50fSBpIGlzIHRoZSByb290IG9mIHRoZSBmaXJzdCBoZWFwXG4gKiBAcGFyYW0ge2ludH0gaiBpcyB0aGUgcm9vdCBvZiB0aGUgc2Vjb25kIGhlYXBcbiAqIEBwYXJhbSB7aW50fSBrIC0gMSBpcyB0aGUgaW5kZXggb2YgdGhlIGxhc3QgbGVhZiBpbiB0aGUgc2Vjb25kIGhlYXBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZSAoIGFyaXR5LCBjb21wYXJlLCBzd2FwLCBhLCBpLCBqLCBrICkge1xuXG5cdGZvciAoIDsgaiA8IGsgOyArK2ogKSB7XG5cdFx0c2lmdHVwKCBhcml0eSwgY29tcGFyZSwgc3dhcCwgYSwgaSwgaiArIDEsIGogKTtcblx0fVxuXG59XG4iXX0=