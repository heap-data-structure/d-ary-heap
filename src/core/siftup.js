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

export default function siftup(arity, compare, swap, a, i, j, k) {
	let current = k - i;

	// While we are not the root

	while (current !== 0) {
		// Address of the parent in a zero-based
		// d-ary heap

		const parent = i + Math.floor((current - 1) / arity);

		// If current value is greater than its parent
		// then we are done

		if (compare(a[i + current], a[parent]) >= 0) break;

		// Otherwise
		// swap with parent

		swap(a, i + current, parent);

		current = parent - i;
	}

	return i + current;
}
