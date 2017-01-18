import test from 'ava' ;

import array from "aureooms-js-array" ;
import compare from "aureooms-js-compare" ;
import random from "aureooms-js-random" ;
import { issorted } from "aureooms-js-sort" ;
import * as it from "aureooms-js-itertools" ;
import fn from "aureooms-js-functools" ;

import { sorted } from '../../src' ;

function check ( arity ,comparename, compare , ctor , n ) {

	var title = `sorted-${arity} (new ${ctor.name}(${n}), ${comparename})`;

	test( title , t => {

		var a = new ctor( n ) ;

		array.iota( a , 0 , n , 0 ) ;

		random.shuffle( a , 0 , n ) ;

		var out = it.list( sorted( arity , compare , array.swap , a , 0 , n ) ) ;

		t.deepEqual( a.length , n , "size stays the same size" ) ;

		t.deepEqual( issorted( compare , out , 0 , n ) , n , "output is sorted" ) ;

	} ) ;

}

it.exhaust( it.map(

fn.chain( [ it.chain , it.list , fn.partial( fn.star , [ check ] ) ] ) ,

it.product( [

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
