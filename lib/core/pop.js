'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pop;

var _siftdown = require('./siftdown');

var _siftdown2 = _interopRequireDefault(_siftdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pops the root from a d-ary heap.
 *
 * Hypothesis : i < j
 *
 * @param {int} arity arity of the heap
 * @param {function} compare the comparison function
 * @param {function} swap the swap function
 * @param {array} a the array where the heap is stored
 * @param {int} i is the root
 * @param {int} j - 1 is the last leaf
 */

function pop(arity, compare, swap, a, i, j) {

  // decrement size of heap

  --j;

  // put last leaf at root

  var popped = a[i];
  a[i] = a[j];

  // sift down the new root

  (0, _siftdown2.default)(arity, compare, swap, a, i, j, i);

  // return old root

  return popped;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL3BvcC5qcyJdLCJuYW1lcyI6WyJwb3AiLCJhcml0eSIsImNvbXBhcmUiLCJzd2FwIiwiYSIsImkiLCJqIiwicG9wcGVkIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFnQndCQSxHOztBQWZ4Qjs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUFhZSxTQUFTQSxHQUFULENBQWVDLEtBQWYsRUFBc0JDLE9BQXRCLEVBQStCQyxJQUEvQixFQUFxQ0MsQ0FBckMsRUFBd0NDLENBQXhDLEVBQTJDQyxDQUEzQyxFQUErQzs7QUFFN0Q7O0FBRUEsSUFBRUEsQ0FBRjs7QUFHQTs7QUFFQSxNQUFNQyxTQUFTSCxFQUFFQyxDQUFGLENBQWY7QUFDQUQsSUFBRUMsQ0FBRixJQUFPRCxFQUFFRSxDQUFGLENBQVA7O0FBR0E7O0FBRUEsMEJBQVVMLEtBQVYsRUFBaUJDLE9BQWpCLEVBQTBCQyxJQUExQixFQUFnQ0MsQ0FBaEMsRUFBbUNDLENBQW5DLEVBQXNDQyxDQUF0QyxFQUF5Q0QsQ0FBekM7O0FBR0E7O0FBRUEsU0FBT0UsTUFBUDtBQUVBIiwiZmlsZSI6InBvcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHNpZnRkb3duIGZyb20gJy4vc2lmdGRvd24nIDtcblxuLyoqXG4gKiBQb3BzIHRoZSByb290IGZyb20gYSBkLWFyeSBoZWFwLlxuICpcbiAqIEh5cG90aGVzaXMgOiBpIDwgalxuICpcbiAqIEBwYXJhbSB7aW50fSBhcml0eSBhcml0eSBvZiB0aGUgaGVhcFxuICogQHBhcmFtIHtmdW5jdGlvbn0gY29tcGFyZSB0aGUgY29tcGFyaXNvbiBmdW5jdGlvblxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3dhcCB0aGUgc3dhcCBmdW5jdGlvblxuICogQHBhcmFtIHthcnJheX0gYSB0aGUgYXJyYXkgd2hlcmUgdGhlIGhlYXAgaXMgc3RvcmVkXG4gKiBAcGFyYW0ge2ludH0gaSBpcyB0aGUgcm9vdFxuICogQHBhcmFtIHtpbnR9IGogLSAxIGlzIHRoZSBsYXN0IGxlYWZcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3AgKCBhcml0eSwgY29tcGFyZSwgc3dhcCwgYSwgaSwgaiApIHtcblxuXHQvLyBkZWNyZW1lbnQgc2l6ZSBvZiBoZWFwXG5cblx0LS1qO1xuXG5cblx0Ly8gcHV0IGxhc3QgbGVhZiBhdCByb290XG5cblx0Y29uc3QgcG9wcGVkID0gYVtpXTtcblx0YVtpXSA9IGFbal07XG5cblxuXHQvLyBzaWZ0IGRvd24gdGhlIG5ldyByb290XG5cblx0c2lmdGRvd24oIGFyaXR5LCBjb21wYXJlLCBzd2FwLCBhLCBpLCBqLCBpICk7XG5cblxuXHQvLyByZXR1cm4gb2xkIHJvb3RcblxuXHRyZXR1cm4gcG9wcGVkO1xuXG59XG4iXX0=