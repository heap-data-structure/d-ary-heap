
import makeheap from './makeheap' ;
import pop from './pop' ;

export default function* sorted ( arity , compare , swap , a , i , j ) {

	makeheap( arity , compare , swap , a , i , j ) ;

	for ( ; i < j ; --j ) yield pop( arity , compare , swap , a , i , j ) ;

}
