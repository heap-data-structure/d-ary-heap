import siftdown from './siftdown.js';

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

export default function makeheap(arity, compare, swap, a, i, j) {
	// eslint-disable-next-line no-bitwise
	for (let k = (i + (j - i + arity - 2) / arity) | 0; k-- > i; ) {
		siftdown(arity, compare, swap, a, i, j, k);
	}
}
