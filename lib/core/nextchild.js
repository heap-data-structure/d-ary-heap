"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = nextchild;


/**
 * Computes which child is the smallest according
 * to a comparison function.
 *
 * Hypothesis : i < j i.e. there should be at least one child
 *
 * @param {int} arity arity of the heap
 * @param {function} compare the comparison function
 * @param {function} swap the swap function
 * @param {array} a the array where the heap is stored
 * @param {int} i is the first child
 * @param {int} j - 1 is the last leaf
 */

function nextchild(arity, compare, swap, a, i, j) {

  var k = i + Math.min(arity, j - i);

  var best = i;

  for (++i; i < k; ++i) {

    if (compare(a[i], a[best]) < 0) {
      best = i;
    }
  }

  return best;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL25leHRjaGlsZC5qcyJdLCJuYW1lcyI6WyJuZXh0Y2hpbGQiLCJhcml0eSIsImNvbXBhcmUiLCJzd2FwIiwiYSIsImkiLCJqIiwiayIsIk1hdGgiLCJtaW4iLCJiZXN0Il0sIm1hcHBpbmdzIjoiOzs7OztrQkFnQndCQSxTOzs7QUFkeEI7Ozs7Ozs7Ozs7Ozs7O0FBY2UsU0FBU0EsU0FBVCxDQUFxQkMsS0FBckIsRUFBNEJDLE9BQTVCLEVBQXFDQyxJQUFyQyxFQUEyQ0MsQ0FBM0MsRUFBOENDLENBQTlDLEVBQWlEQyxDQUFqRCxFQUFxRDs7QUFFbkUsTUFBTUMsSUFBSUYsSUFBSUcsS0FBS0MsR0FBTCxDQUFVUixLQUFWLEVBQWlCSyxJQUFJRCxDQUFyQixDQUFkOztBQUVBLE1BQUlLLE9BQU9MLENBQVg7O0FBRUEsT0FBTSxFQUFFQSxDQUFSLEVBQVlBLElBQUlFLENBQWhCLEVBQW9CLEVBQUVGLENBQXRCLEVBQTBCOztBQUV6QixRQUFLSCxRQUFTRSxFQUFFQyxDQUFGLENBQVQsRUFBZUQsRUFBRU0sSUFBRixDQUFmLElBQTJCLENBQWhDLEVBQW9DO0FBQ25DQSxhQUFPTCxDQUFQO0FBQ0E7QUFFRDs7QUFFRCxTQUFPSyxJQUFQO0FBRUEiLCJmaWxlIjoibmV4dGNoaWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8qKlxuICogQ29tcHV0ZXMgd2hpY2ggY2hpbGQgaXMgdGhlIHNtYWxsZXN0IGFjY29yZGluZ1xuICogdG8gYSBjb21wYXJpc29uIGZ1bmN0aW9uLlxuICpcbiAqIEh5cG90aGVzaXMgOiBpIDwgaiBpLmUuIHRoZXJlIHNob3VsZCBiZSBhdCBsZWFzdCBvbmUgY2hpbGRcbiAqXG4gKiBAcGFyYW0ge2ludH0gYXJpdHkgYXJpdHkgb2YgdGhlIGhlYXBcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbXBhcmUgdGhlIGNvbXBhcmlzb24gZnVuY3Rpb25cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHN3YXAgdGhlIHN3YXAgZnVuY3Rpb25cbiAqIEBwYXJhbSB7YXJyYXl9IGEgdGhlIGFycmF5IHdoZXJlIHRoZSBoZWFwIGlzIHN0b3JlZFxuICogQHBhcmFtIHtpbnR9IGkgaXMgdGhlIGZpcnN0IGNoaWxkXG4gKiBAcGFyYW0ge2ludH0gaiAtIDEgaXMgdGhlIGxhc3QgbGVhZlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5leHRjaGlsZCAoIGFyaXR5LCBjb21wYXJlLCBzd2FwLCBhLCBpLCBqICkge1xuXG5cdGNvbnN0IGsgPSBpICsgTWF0aC5taW4oIGFyaXR5LCBqIC0gaSApO1xuXG5cdGxldCBiZXN0ID0gaTtcblxuXHRmb3IgKCArK2kgOyBpIDwgayA7ICsraSApIHtcblxuXHRcdGlmICggY29tcGFyZSggYVtpXSwgYVtiZXN0XSApIDwgMCApIHtcblx0XHRcdGJlc3QgPSBpO1xuXHRcdH1cblxuXHR9XG5cblx0cmV0dXJuIGJlc3Q7XG5cbn1cbiJdfQ==