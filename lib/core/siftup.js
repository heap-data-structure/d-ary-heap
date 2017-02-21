"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = siftup;

/**
 * Sifts up a node.
 *
 * @param {int} arity arity of the heap
 * @param {function} compare the comparison function
 * @param {function} swap the swap function
 * @param {array} a the array where the heap is stored
 * @param {int} i is the root element
 * @param {int} j - 1 is the last leaf
 * @param {int} k is the target node
 */

function siftup(arity, compare, swap, a, i, j, k) {

	var current = k - i;

	// while we are not the root

	while (current !== 0) {

		// address of the parent in a zero-based
		// d-ary heap

		var parent = i + Math.floor((current - 1) / arity);

		// if current value is greater than its parent
		// then we are done

		if (compare(a[i + current], a[parent]) >= 0) break;

		// otherwise
		// swap with parent

		swap(a, i + current, parent);

		current = parent - i;
	}

	return i + current;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL3NpZnR1cC5qcyJdLCJuYW1lcyI6WyJzaWZ0dXAiLCJhcml0eSIsImNvbXBhcmUiLCJzd2FwIiwiYSIsImkiLCJqIiwiayIsImN1cnJlbnQiLCJwYXJlbnQiLCJNYXRoIiwiZmxvb3IiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQWF3QkEsTTs7QUFaeEI7Ozs7Ozs7Ozs7OztBQVllLFNBQVNBLE1BQVQsQ0FBa0JDLEtBQWxCLEVBQXlCQyxPQUF6QixFQUFrQ0MsSUFBbEMsRUFBd0NDLENBQXhDLEVBQTJDQyxDQUEzQyxFQUE4Q0MsQ0FBOUMsRUFBaURDLENBQWpELEVBQXFEOztBQUVuRSxLQUFJQyxVQUFVRCxJQUFJRixDQUFsQjs7QUFFQTs7QUFFQSxRQUFRRyxZQUFZLENBQXBCLEVBQXdCOztBQUV2QjtBQUNBOztBQUVBLE1BQU1DLFNBQVNKLElBQUlLLEtBQUtDLEtBQUwsQ0FBWSxDQUFFSCxVQUFVLENBQVosSUFBa0JQLEtBQTlCLENBQW5COztBQUVBO0FBQ0E7O0FBRUEsTUFBS0MsUUFBU0UsRUFBRUMsSUFBSUcsT0FBTixDQUFULEVBQXlCSixFQUFFSyxNQUFGLENBQXpCLEtBQXdDLENBQTdDLEVBQWlEOztBQUVqRDtBQUNBOztBQUVBTixPQUFNQyxDQUFOLEVBQVNDLElBQUlHLE9BQWIsRUFBc0JDLE1BQXRCOztBQUVBRCxZQUFVQyxTQUFTSixDQUFuQjtBQUVBOztBQUVELFFBQU9BLElBQUlHLE9BQVg7QUFFQSIsImZpbGUiOiJzaWZ0dXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogU2lmdHMgdXAgYSBub2RlLlxuICpcbiAqIEBwYXJhbSB7aW50fSBhcml0eSBhcml0eSBvZiB0aGUgaGVhcFxuICogQHBhcmFtIHtmdW5jdGlvbn0gY29tcGFyZSB0aGUgY29tcGFyaXNvbiBmdW5jdGlvblxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3dhcCB0aGUgc3dhcCBmdW5jdGlvblxuICogQHBhcmFtIHthcnJheX0gYSB0aGUgYXJyYXkgd2hlcmUgdGhlIGhlYXAgaXMgc3RvcmVkXG4gKiBAcGFyYW0ge2ludH0gaSBpcyB0aGUgcm9vdCBlbGVtZW50XG4gKiBAcGFyYW0ge2ludH0gaiAtIDEgaXMgdGhlIGxhc3QgbGVhZlxuICogQHBhcmFtIHtpbnR9IGsgaXMgdGhlIHRhcmdldCBub2RlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2lmdHVwICggYXJpdHksIGNvbXBhcmUsIHN3YXAsIGEsIGksIGosIGsgKSB7XG5cblx0bGV0IGN1cnJlbnQgPSBrIC0gaTtcblxuXHQvLyB3aGlsZSB3ZSBhcmUgbm90IHRoZSByb290XG5cblx0d2hpbGUgKCBjdXJyZW50ICE9PSAwICkge1xuXG5cdFx0Ly8gYWRkcmVzcyBvZiB0aGUgcGFyZW50IGluIGEgemVyby1iYXNlZFxuXHRcdC8vIGQtYXJ5IGhlYXBcblxuXHRcdGNvbnN0IHBhcmVudCA9IGkgKyBNYXRoLmZsb29yKCAoIGN1cnJlbnQgLSAxICkgLyBhcml0eSApO1xuXG5cdFx0Ly8gaWYgY3VycmVudCB2YWx1ZSBpcyBncmVhdGVyIHRoYW4gaXRzIHBhcmVudFxuXHRcdC8vIHRoZW4gd2UgYXJlIGRvbmVcblxuXHRcdGlmICggY29tcGFyZSggYVtpICsgY3VycmVudF0sIGFbcGFyZW50XSApID49IDAgKSBicmVhaztcblxuXHRcdC8vIG90aGVyd2lzZVxuXHRcdC8vIHN3YXAgd2l0aCBwYXJlbnRcblxuXHRcdHN3YXAoIGEsIGkgKyBjdXJyZW50LCBwYXJlbnQgKTtcblxuXHRcdGN1cnJlbnQgPSBwYXJlbnQgLSBpO1xuXG5cdH1cblxuXHRyZXR1cm4gaSArIGN1cnJlbnQ7XG5cbn1cbiJdfQ==