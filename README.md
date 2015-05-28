[js-d-ary-heap](http://aureooms.github.io/js-d-ary-heap)
====
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/aureooms/js-d-ary-heap?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

d-ary heap code bricks in JavaScript.

```js
makeheap( 2 , increasing , swap , array , 0 , array.length ) ;
//        ^       ^         ^       ^     ^        ^
//      arity  ordering    swap   input [left  , right[
//                        method
```

[![NPM license](http://img.shields.io/npm/l/aureooms-js-d-ary-heap.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-d-ary-heap/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-d-ary-heap.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-d-ary-heap)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-d-ary-heap.svg?style=flat)](http://bower.io/search/?q=aureooms-js-d-ary-heap)
[![Build Status](http://img.shields.io/travis/aureooms/js-d-ary-heap.svg?style=flat)](https://travis-ci.org/aureooms/js-d-ary-heap)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-d-ary-heap.svg?style=flat)](https://coveralls.io/r/aureooms/js-d-ary-heap)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-d-ary-heap.svg?style=flat)](https://david-dm.org/aureooms/js-d-ary-heap#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-d-ary-heap.svg?style=flat)](https://david-dm.org/aureooms/js-d-ary-heap#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-d-ary-heap.svg?style=flat)](https://codeclimate.com/github/aureooms/js-d-ary-heap)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-d-ary-heap.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-d-ary-heap)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-d-ary-heap.svg?style=flat)](https://github.com/aureooms/js-d-ary-heap/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-d-ary-heap.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-d-ary-heap)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Description
This package contains a `d`-ary heap implementation that can be parametrized
with any `d > 0`.

## Install

### jspm
```terminal
jspm install github:aureooms/js-d-ary-heap
# or
jspm install npm:aureooms-js-d-ary-heap
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-d-ary-heap
```

### bower
```terminal
bower install aureooms-js-d-ary-heap
```

### ender
```terminal
ender add aureooms-js-d-ary-heap
```

### jam
```terminal
jam install aureooms-js-d-ary-heap
```

### spm
```terminal
spm install aureooms-js-d-ary-heap --save
```

### npm
```terminal
npm install aureooms-js-d-ary-heap --save
```

## Require
### jspm
```js
let daryheap = require( "github:aureooms/js-d-ary-heap" ) ;
// or
import daryheap from 'aureooms-js-d-ary-heap' ;
```
### duo
```js
let daryheap = require( "aureooms/js-d-ary-heap" ) ;
```

### component, ender, spm, npm
```js
let daryheap = require( "aureooms-js-d-ary-heap" ) ;
```

### bower
The script tag exposes the global variable `daryheap`.
```html
<script src="bower_components/aureooms-js-d-ary-heap/js/dist/d-ary-heap.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "aureooms-js-d-ary-heap" ] , function ( daryheap ) { ... } ) ;
```

## Use

### Functions
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
```

### ADT

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
//      # push( value ) -> reference
//      # merge( other )

let heap = daryheap. ... ( 2 , compare.increasing ) ;
//                         ^            ^
//                       arity       ordering
```

## Reference

  - http://www.cs.princeton.edu/~wayne/cs423/lectures/heaps-4up.pdf
  - http://stackoverflow.com/questions/6531543/efficient-implementation-of-binary-heaps
