
var makeheap = function( arity , compare , swap , a , i , j ) {

	for ( var k = i + ( j - i + arity - 2 ) / arity | 0 ; k --> i ; ) {

		siftdown( arity , compare , swap , a , i , j , k ) ;

	}

} ;

exports.makeheap = makeheap ;
