
import nextchild from './nextchild.js' ;

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

export default function siftdown ( arity, compare, swap, a, i, j, k ) {

	let current = k - i;

	while ( true ) {

		// address of the first child in a zero-based
		// d-ary heap

		const firstchild = arity * current + 1;

		// if current node has no children
		// then we are done

		if ( firstchild >= j - i ) break;

		// if current value is smaller than its smallest
		// child then we are done

		const candidate = nextchild( arity, compare, swap, a, i + firstchild, j );

		if ( compare( a[i + current], a[candidate] ) <= 0 ) break;

		// otherwise
		// swap with smallest child

		swap( a, i + current, candidate );

		current = candidate - i;

	}

	return i + current;

}
