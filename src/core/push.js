
import siftup from './siftup.js' ;

/**
 * Inserts the jth element of an array in an existing
 * dary heap in interval [i, j[.
 *
 * Hypothesis : i <= j
 *
 * @param {int} arity arity of the heap
 * @param {function} compare the comparison function
 * @param {function} swap the swap function
 * @param {array} a the array where the heap is stored
 * @param {int} i is the root
 * @param {int} j - 1 is the new leaf
 */

export default function push ( arity, compare, swap, a, i, j ) {

	// sift up the new leaf

	return siftup( arity, compare, swap, a, i, j + 1, j );

}
