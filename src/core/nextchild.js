

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

export default function nextchild ( arity, compare, swap, a, i, j ) {

	const k = i + Math.min( arity, j - i );

	let best = i;

	for ( ++i ; i < k ; ++i ) {

		if ( compare( a[i], a[best] ) < 0 ) {
			best = i;
		}

	}

	return best;

}
