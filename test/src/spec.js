
import ava from 'ava' ;

import * as spec from '@heap-data-structure/specification' ;

import { DAryHeap , DAryHeapWithoutReferences } from '../../src' ;

const heapswithreferences = [

	["DAryHeap, unary", compare => new DAryHeap( 1 , compare ) ],
	["DAryHeap, binary", compare => new DAryHeap( 2 , compare ) ],
	["DAryHeap, ternary", compare => new DAryHeap( 3 , compare ) ],
	["DAryHeap, 4-ary", compare => new DAryHeap( 4 , compare ) ],
	["DAryHeap, 5-ary", compare => new DAryHeap( 5 , compare ) ],

] ;

const heapswithoutreferences = [

	["DAryHeapWithoutReferences, unary", compare => new DAryHeapWithoutReferences( 1 , compare ) ],
	["DAryHeapWithoutReferences, binary", compare => new DAryHeapWithoutReferences( 2 , compare ) ],
	["DAryHeapWithoutReferences, ternary", compare => new DAryHeapWithoutReferences( 3 , compare ) ],
	["DAryHeapWithoutReferences, 4-ary", compare => new DAryHeapWithoutReferences( 4 , compare ) ],
	["DAryHeapWithoutReferences, 5-ary", compare => new DAryHeapWithoutReferences( 5 , compare ) ],

] ;

spec.test( ava , heapswithreferences , { references : true , length : true } ) ;
spec.test( ava , heapswithoutreferences , { references : false , length : true } ) ;
