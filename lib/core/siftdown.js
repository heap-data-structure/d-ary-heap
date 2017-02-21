'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = siftdown;

var _nextchild = require('./nextchild');

var _nextchild2 = _interopRequireDefault(_nextchild);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sifts down a node.
 *
 * @param {int} arity arity of the heap
 * @param {function} compare the comparison function
 * @param {function} swap the swap function
 * @param {array} a the array where the heap is stored
 * @param {int} i is the root element
 * @param {int} j - 1 is the last leaf
 * @param {int} k is the target node
 */

function siftdown(arity, compare, swap, a, i, j, k) {

	var current = k - i;

	while (true) {

		// address of the first child in a zero-based
		// d-ary heap

		var firstchild = arity * current + 1;

		// if current node has no children
		// then we are done

		if (firstchild >= j - i) break;

		// if current value is smaller than its smallest
		// child then we are done

		var candidate = (0, _nextchild2.default)(arity, compare, swap, a, i + firstchild, j);

		if (compare(a[i + current], a[candidate]) <= 0) break;

		// otherwise
		// swap with smallest child

		swap(a, i + current, candidate);

		current = candidate - i;
	}

	return i + current;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL3NpZnRkb3duLmpzIl0sIm5hbWVzIjpbInNpZnRkb3duIiwiYXJpdHkiLCJjb21wYXJlIiwic3dhcCIsImEiLCJpIiwiaiIsImsiLCJjdXJyZW50IiwiZmlyc3RjaGlsZCIsImNhbmRpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBZXdCQSxROztBQWR4Qjs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7OztBQVllLFNBQVNBLFFBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCQyxPQUEzQixFQUFvQ0MsSUFBcEMsRUFBMENDLENBQTFDLEVBQTZDQyxDQUE3QyxFQUFnREMsQ0FBaEQsRUFBbURDLENBQW5ELEVBQXVEOztBQUVyRSxLQUFJQyxVQUFVRCxJQUFJRixDQUFsQjs7QUFFQSxRQUFRLElBQVIsRUFBZTs7QUFFZDtBQUNBOztBQUVBLE1BQU1JLGFBQWFSLFFBQVFPLE9BQVIsR0FBa0IsQ0FBckM7O0FBRUE7QUFDQTs7QUFFQSxNQUFLQyxjQUFjSCxJQUFJRCxDQUF2QixFQUEyQjs7QUFFM0I7QUFDQTs7QUFFQSxNQUFNSyxZQUFZLHlCQUFXVCxLQUFYLEVBQWtCQyxPQUFsQixFQUEyQkMsSUFBM0IsRUFBaUNDLENBQWpDLEVBQW9DQyxJQUFJSSxVQUF4QyxFQUFvREgsQ0FBcEQsQ0FBbEI7O0FBRUEsTUFBS0osUUFBU0UsRUFBRUMsSUFBSUcsT0FBTixDQUFULEVBQXlCSixFQUFFTSxTQUFGLENBQXpCLEtBQTJDLENBQWhELEVBQW9EOztBQUVwRDtBQUNBOztBQUVBUCxPQUFNQyxDQUFOLEVBQVNDLElBQUlHLE9BQWIsRUFBc0JFLFNBQXRCOztBQUVBRixZQUFVRSxZQUFZTCxDQUF0QjtBQUVBOztBQUVELFFBQU9BLElBQUlHLE9BQVg7QUFFQSIsImZpbGUiOiJzaWZ0ZG93bi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IG5leHRjaGlsZCBmcm9tICcuL25leHRjaGlsZCcgO1xuXG4vKipcbiAqIFNpZnRzIGRvd24gYSBub2RlLlxuICpcbiAqIEBwYXJhbSB7aW50fSBhcml0eSBhcml0eSBvZiB0aGUgaGVhcFxuICogQHBhcmFtIHtmdW5jdGlvbn0gY29tcGFyZSB0aGUgY29tcGFyaXNvbiBmdW5jdGlvblxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3dhcCB0aGUgc3dhcCBmdW5jdGlvblxuICogQHBhcmFtIHthcnJheX0gYSB0aGUgYXJyYXkgd2hlcmUgdGhlIGhlYXAgaXMgc3RvcmVkXG4gKiBAcGFyYW0ge2ludH0gaSBpcyB0aGUgcm9vdCBlbGVtZW50XG4gKiBAcGFyYW0ge2ludH0gaiAtIDEgaXMgdGhlIGxhc3QgbGVhZlxuICogQHBhcmFtIHtpbnR9IGsgaXMgdGhlIHRhcmdldCBub2RlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2lmdGRvd24gKCBhcml0eSwgY29tcGFyZSwgc3dhcCwgYSwgaSwgaiwgayApIHtcblxuXHRsZXQgY3VycmVudCA9IGsgLSBpO1xuXG5cdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdC8vIGFkZHJlc3Mgb2YgdGhlIGZpcnN0IGNoaWxkIGluIGEgemVyby1iYXNlZFxuXHRcdC8vIGQtYXJ5IGhlYXBcblxuXHRcdGNvbnN0IGZpcnN0Y2hpbGQgPSBhcml0eSAqIGN1cnJlbnQgKyAxO1xuXG5cdFx0Ly8gaWYgY3VycmVudCBub2RlIGhhcyBubyBjaGlsZHJlblxuXHRcdC8vIHRoZW4gd2UgYXJlIGRvbmVcblxuXHRcdGlmICggZmlyc3RjaGlsZCA+PSBqIC0gaSApIGJyZWFrO1xuXG5cdFx0Ly8gaWYgY3VycmVudCB2YWx1ZSBpcyBzbWFsbGVyIHRoYW4gaXRzIHNtYWxsZXN0XG5cdFx0Ly8gY2hpbGQgdGhlbiB3ZSBhcmUgZG9uZVxuXG5cdFx0Y29uc3QgY2FuZGlkYXRlID0gbmV4dGNoaWxkKCBhcml0eSwgY29tcGFyZSwgc3dhcCwgYSwgaSArIGZpcnN0Y2hpbGQsIGogKTtcblxuXHRcdGlmICggY29tcGFyZSggYVtpICsgY3VycmVudF0sIGFbY2FuZGlkYXRlXSApIDw9IDAgKSBicmVhaztcblxuXHRcdC8vIG90aGVyd2lzZVxuXHRcdC8vIHN3YXAgd2l0aCBzbWFsbGVzdCBjaGlsZFxuXG5cdFx0c3dhcCggYSwgaSArIGN1cnJlbnQsIGNhbmRpZGF0ZSApO1xuXG5cdFx0Y3VycmVudCA9IGNhbmRpZGF0ZSAtIGk7XG5cblx0fVxuXG5cdHJldHVybiBpICsgY3VycmVudDtcblxufVxuIl19