'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = remove;

var _pull = require('./pull');

var _pull2 = _interopRequireDefault(_pull);

var _pop = require('./pop');

var _pop2 = _interopRequireDefault(_pop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Removes a target element from a d-ary heap.
 *
 * Hypothesis : i < j
 *
 * @param {int} arity arity of the heap
 * @param {function} compare the comparison function
 * @param {function} swap the swap function
 * @param {array} a the array where the heap is stored
 * @param {int} i is the root
 * @param {int} j - 1 is the last leaf
 * @param {int} k is the target node
 */

function remove(arity, compare, swap, a, i, j, k) {

  // pull target node all the way up

  (0, _pull2.default)(arity, compare, swap, a, i, j, k);

  // pop target node

  return (0, _pop2.default)(arity, compare, swap, a, i, j);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL3JlbW92ZS5qcyJdLCJuYW1lcyI6WyJyZW1vdmUiLCJhcml0eSIsImNvbXBhcmUiLCJzd2FwIiwiYSIsImkiLCJqIiwiayJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBa0J3QkEsTTs7QUFqQnhCOzs7O0FBQ0E7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7OztBQWNlLFNBQVNBLE1BQVQsQ0FBa0JDLEtBQWxCLEVBQXlCQyxPQUF6QixFQUFrQ0MsSUFBbEMsRUFBd0NDLENBQXhDLEVBQTJDQyxDQUEzQyxFQUE4Q0MsQ0FBOUMsRUFBaURDLENBQWpELEVBQXFEOztBQUVuRTs7QUFFQSxzQkFBTU4sS0FBTixFQUFhQyxPQUFiLEVBQXNCQyxJQUF0QixFQUE0QkMsQ0FBNUIsRUFBK0JDLENBQS9CLEVBQWtDQyxDQUFsQyxFQUFxQ0MsQ0FBckM7O0FBRUE7O0FBRUEsU0FBTyxtQkFBS04sS0FBTCxFQUFZQyxPQUFaLEVBQXFCQyxJQUFyQixFQUEyQkMsQ0FBM0IsRUFBOEJDLENBQTlCLEVBQWlDQyxDQUFqQyxDQUFQO0FBRUEiLCJmaWxlIjoicmVtb3ZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgcHVsbCBmcm9tICcuL3B1bGwnIDtcbmltcG9ydCBwb3AgZnJvbSAnLi9wb3AnIDtcblxuLyoqXG4gKiBSZW1vdmVzIGEgdGFyZ2V0IGVsZW1lbnQgZnJvbSBhIGQtYXJ5IGhlYXAuXG4gKlxuICogSHlwb3RoZXNpcyA6IGkgPCBqXG4gKlxuICogQHBhcmFtIHtpbnR9IGFyaXR5IGFyaXR5IG9mIHRoZSBoZWFwXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjb21wYXJlIHRoZSBjb21wYXJpc29uIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzd2FwIHRoZSBzd2FwIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge2FycmF5fSBhIHRoZSBhcnJheSB3aGVyZSB0aGUgaGVhcCBpcyBzdG9yZWRcbiAqIEBwYXJhbSB7aW50fSBpIGlzIHRoZSByb290XG4gKiBAcGFyYW0ge2ludH0gaiAtIDEgaXMgdGhlIGxhc3QgbGVhZlxuICogQHBhcmFtIHtpbnR9IGsgaXMgdGhlIHRhcmdldCBub2RlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlICggYXJpdHksIGNvbXBhcmUsIHN3YXAsIGEsIGksIGosIGsgKSB7XG5cblx0Ly8gcHVsbCB0YXJnZXQgbm9kZSBhbGwgdGhlIHdheSB1cFxuXG5cdHB1bGwoIGFyaXR5LCBjb21wYXJlLCBzd2FwLCBhLCBpLCBqLCBrICk7XG5cblx0Ly8gcG9wIHRhcmdldCBub2RlXG5cblx0cmV0dXJuIHBvcCggYXJpdHksIGNvbXBhcmUsIHN3YXAsIGEsIGksIGogKTtcblxufVxuIl19