
import pull from './pull.js' ;
import pop from './pop.js' ;

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

export default function remove ( arity, compare, swap, a, i, j, k ) {

	// pull target node all the way up

	pull( arity, compare, swap, a, i, j, k );

	// pop target node

	return pop( arity, compare, swap, a, i, j );

}
