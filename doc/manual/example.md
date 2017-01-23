#### Functions

```js
// Builds a heap in O(n) operations.
makeheap( arity , compare , swap , array , left , right ) ;

// Merges heaps at intervals [i, j[ and [j, k[ in array *a* into a new heap at interval [i, k[.
merge( arity , compare , swap , array , left , middle , right ) ;

// Computes which child is the smallest according to a comparison function.
nextchild( arity , compare , swap , array , left , right ) ;

// Pops the root from a d-ary heap.
pop( arity , compare , swap , array , left , right ) ;

// Sifts a node up to the root as if its priority was the highest.
pull( arity , compare , swap , array , left , right , target ) ;

// Inserts the jth element of an array in an existing dary heap in interval [i, j[.
push( arity , compare , swap , array , left , right ) ;

// Removes a target element from a d-ary heap.
remove( arity , compare , swap , array , left , right , target ) ;

// Sifts down a node.
siftdown( arity , compare , swap , array , left , right , target ) ;

// Sifts up a node.
siftup( arity , compare , swap , array , left , right , target ) ;

// Sorted iterator on the elements of the input array.
// If only the first k elements are read the cost is O(n + k log n).
// The array is mutated.
sorted( arity , compare , swap , array , left , right ) ;
```

#### ADT

```js
// can choose between 2 different implementations
//
//   - DAryHeap
//      # head -> value
//      # headreference -> reference
//      # pop -> value
//      # popreference -> reference
//      # push( value ) -> reference
//      # pushreference( reference )
//      # merge( other )
//      # update( reference , value )
//      # decreasekey( reference , value )
//      # increasekey( reference , value )
//      # delete( reference )
//
//   - DAryHeapWithoutReferences
//      # head -> value
//      # pop -> value
//      # push( value )
//      # merge( other )

let heap = new daryheap. ... ( 2 , compare.increasing ) ;
//                         ^            ^
//                       arity       ordering
```
