
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

var makeheap = function( arity , compare , swap , a , i , j ) {

	for ( var k = i + ( j - i + arity - 2 ) / arity | 0 ; k --> i ; ) {

		siftdown( arity , compare , swap , a , i , j , k ) ;

	}

} ;

exports.makeheap = makeheap ;
