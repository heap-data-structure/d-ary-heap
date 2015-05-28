
var util = require( "util" );
var array = require( "aureooms-js-array" ) ;
var compare = require( "aureooms-js-compare" ) ;
var random = require( "aureooms-js-random" ) ;
var sort = require( "aureooms-js-sort" ) ;
var itertools = require( "aureooms-js-itertools" );
var functools = require( "aureooms-js-functools" );

var check = function ( arity ,comparename, compare , ctor , n ) {

var title = util.format("makeheap-%s (new %s(%d), %s)", arity , ctor.name, n, comparename);

console.log( title ) ;

test( title , function ( ) {

	var a = new ctor( n ) ;

	array.iota( a , 0 , n , 0 ) ;

	random.shuffle( a , 0 , n ) ;

	daryheap.makeheap( arity , compare , array.swap , a , 0 , n ) ;

	deepEqual( a.length , n , "size stays the same" ) ;

	var out = [ ] ;

	var i = n ;

	while ( i-- ) {

		out.push( daryheap.pop( arity , compare , array.swap , a , 0 , i + 1 ) ) ;

	}

	deepEqual( sort.issorted( compare , out , 0 , n ) , n , "output is sorted" ) ;

} ) ;

} ;

itertools.exhaust( itertools.map(

functools.chain( [ itertools.chain , itertools.list , functools.partial( functools.star , [ check ] ) ] ) ,

itertools.product( [

	[[1],[2],[3],[4],[5]],

	[
		["increasing" , compare.increasing ] ,
		["decreasing" , compare.decreasing ]
	],
	[
		[ Array ],
		[ Int8Array ],
		[ Uint8Array ],
		[ Int16Array ],
		[ Uint16Array ],
		[ Int32Array ],
		[ Uint32Array ],
		[ Float32Array ],
		[ Float64Array ]
	],
	[[0],[1],[2],[3],[4],[5],[15],[16],[17],[63],[64],[65]]

] , 1 )

) ) ;
