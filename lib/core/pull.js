"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pull;

/**
 * Sifts a node up to the root as if its priority was the highest.
 *
 * @param {int} arity arity of the heap
 * @param {function} compare the comparison function
 * @param {function} swap the swap function
 * @param {array} a the array where the heap is stored
 * @param {int} i is the root element
 * @param {int} j - 1 is the last leaf
 * @param {int} k is the target node
 */

function pull(arity, compare, swap, a, i, j, k) {

  var current = k - i;

  // while we are not the root

  while (current !== 0) {

    // address of the parent in a zero-based
    // d-ary heap

    var parent = i + Math.floor((current - 1) / arity);

    // swap with parent

    swap(a, i + current, parent);

    current = parent - i;
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL3B1bGwuanMiXSwibmFtZXMiOlsicHVsbCIsImFyaXR5IiwiY29tcGFyZSIsInN3YXAiLCJhIiwiaSIsImoiLCJrIiwiY3VycmVudCIsInBhcmVudCIsIk1hdGgiLCJmbG9vciJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBYXdCQSxJOztBQVp4Qjs7Ozs7Ozs7Ozs7O0FBWWUsU0FBU0EsSUFBVCxDQUFnQkMsS0FBaEIsRUFBdUJDLE9BQXZCLEVBQWdDQyxJQUFoQyxFQUFzQ0MsQ0FBdEMsRUFBeUNDLENBQXpDLEVBQTRDQyxDQUE1QyxFQUErQ0MsQ0FBL0MsRUFBbUQ7O0FBRWpFLE1BQUlDLFVBQVVELElBQUlGLENBQWxCOztBQUVBOztBQUVBLFNBQVFHLFlBQVksQ0FBcEIsRUFBd0I7O0FBRXZCO0FBQ0E7O0FBRUEsUUFBTUMsU0FBU0osSUFBSUssS0FBS0MsS0FBTCxDQUFZLENBQUVILFVBQVUsQ0FBWixJQUFrQlAsS0FBOUIsQ0FBbkI7O0FBRUE7O0FBRUFFLFNBQU1DLENBQU4sRUFBU0MsSUFBSUcsT0FBYixFQUFzQkMsTUFBdEI7O0FBRUFELGNBQVVDLFNBQVNKLENBQW5CO0FBRUE7QUFFRCIsImZpbGUiOiJwdWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIFNpZnRzIGEgbm9kZSB1cCB0byB0aGUgcm9vdCBhcyBpZiBpdHMgcHJpb3JpdHkgd2FzIHRoZSBoaWdoZXN0LlxuICpcbiAqIEBwYXJhbSB7aW50fSBhcml0eSBhcml0eSBvZiB0aGUgaGVhcFxuICogQHBhcmFtIHtmdW5jdGlvbn0gY29tcGFyZSB0aGUgY29tcGFyaXNvbiBmdW5jdGlvblxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3dhcCB0aGUgc3dhcCBmdW5jdGlvblxuICogQHBhcmFtIHthcnJheX0gYSB0aGUgYXJyYXkgd2hlcmUgdGhlIGhlYXAgaXMgc3RvcmVkXG4gKiBAcGFyYW0ge2ludH0gaSBpcyB0aGUgcm9vdCBlbGVtZW50XG4gKiBAcGFyYW0ge2ludH0gaiAtIDEgaXMgdGhlIGxhc3QgbGVhZlxuICogQHBhcmFtIHtpbnR9IGsgaXMgdGhlIHRhcmdldCBub2RlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHVsbCAoIGFyaXR5LCBjb21wYXJlLCBzd2FwLCBhLCBpLCBqLCBrICkge1xuXG5cdGxldCBjdXJyZW50ID0gayAtIGk7XG5cblx0Ly8gd2hpbGUgd2UgYXJlIG5vdCB0aGUgcm9vdFxuXG5cdHdoaWxlICggY3VycmVudCAhPT0gMCApIHtcblxuXHRcdC8vIGFkZHJlc3Mgb2YgdGhlIHBhcmVudCBpbiBhIHplcm8tYmFzZWRcblx0XHQvLyBkLWFyeSBoZWFwXG5cblx0XHRjb25zdCBwYXJlbnQgPSBpICsgTWF0aC5mbG9vciggKCBjdXJyZW50IC0gMSApIC8gYXJpdHkgKTtcblxuXHRcdC8vIHN3YXAgd2l0aCBwYXJlbnRcblxuXHRcdHN3YXAoIGEsIGkgKyBjdXJyZW50LCBwYXJlbnQgKTtcblxuXHRcdGN1cnJlbnQgPSBwYXJlbnQgLSBpO1xuXG5cdH1cblxufVxuIl19