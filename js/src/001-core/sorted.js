
const sorted = function* ( arity , compare , swap , a , i , j ) {

	makeheap( arity , compare , swap , a , i , j ) ;

	for ( ; i < j ; --j ) yield pop( arity , compare , swap , a , i , j ) ;

} ;

exports.sorted = sorted ;


