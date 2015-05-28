
var heapspec = require( "aureooms-js-heap-spec" ) ;

var heapswithreferences = [


	["DAryHeap, unary", function ( compare ) {
		return new daryheap.DAryHeap( 1 , compare ) ;
	} ],
	["DAryHeap, binary", function ( compare ) {
		return new daryheap.DAryHeap( 2 , compare ) ;
	} ],
	["DAryHeap, ternary", function ( compare ) {
		return new daryheap.DAryHeap( 3 , compare ) ;
	} ],
	["DAryHeap, 4-ary", function ( compare ) {
		return new daryheap.DAryHeap( 4 , compare ) ;
	} ],
	["DAryHeap, 5-ary", function ( compare ) {
		return new daryheap.DAryHeap( 5 , compare ) ;
	} ]


] ;

var heapswithoutreferences = [

	["DAryHeapWithoutReferences, unary", function ( compare ) {
		return new daryheap.DAryHeapWithoutReferences( 1 , compare ) ;
	} ],
	["DAryHeapWithoutReferences, binary", function ( compare ) {
		return new daryheap.DAryHeapWithoutReferences( 2 , compare ) ;
	} ],
	["DAryHeapWithoutReferences, ternary", function ( compare ) {
		return new daryheap.DAryHeapWithoutReferences( 3 , compare ) ;
	} ],
	["DAryHeapWithoutReferences, 4-ary", function ( compare ) {
		return new daryheap.DAryHeapWithoutReferences( 4 , compare ) ;
	} ],
	["DAryHeapWithoutReferences, 5-ary", function ( compare ) {
		return new daryheap.DAryHeapWithoutReferences( 5 , compare ) ;
	} ]
] ;


heapspec.test( heapswithreferences , true ) ;
heapspec.test( heapswithoutreferences , false ) ;
