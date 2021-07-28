
import siftdown from './siftdown.js' ;

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

export default function pop ( arity, compare, swap, a, i, j ) {

	// decrement size of heap

	--j;


	// put last leaf at root

	const popped = a[i];
	a[i] = a[j];


	// sift down the new root

	siftdown( arity, compare, swap, a, i, j, i );


	// return old root

	return popped;

}
