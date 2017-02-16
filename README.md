[@aureooms/js-d-ary-heap](https://aureooms.github.io/js-d-ary-heap)
==

<img src="https://cdn.rawgit.com/aureooms/js-d-ary-heap/master/media/sketch.svg" width="864">

`d`-ary heap data structure library for JavaScript.
See [docs](https://aureooms.github.io/js-d-ary-heap).
Parent is [@aureooms/js-heap](https://github.com/aureooms/js-heap).

```js
makeheap( 2 , increasing , swap , array , 0 , array.length ) ;
//        ^       ^         ^       ^     ^        ^
//      arity  ordering    swap   input [left  , right[
//                        method
//
let heap = new DAryHeap( 2 , compare.increasing ) ;
//                       ^            ^
//                     arity       ordering
//
```

[![License](https://img.shields.io/github/license/aureooms/js-d-ary-heap.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-d-ary-heap/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@aureooms/js-d-ary-heap.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-d-ary-heap)
[![Build Status](https://img.shields.io/travis/aureooms/js-d-ary-heap.svg?style=flat)](https://travis-ci.org/aureooms/js-d-ary-heap)
[![Coverage Status](https://img.shields.io/coveralls/aureooms/js-d-ary-heap.svg?style=flat)](https://coveralls.io/r/aureooms/js-d-ary-heap)
[![Dependencies Status](https://img.shields.io/david/aureooms/js-d-ary-heap.svg?style=flat)](https://david-dm.org/aureooms/js-d-ary-heap#info=dependencies)
[![devDependencies Status](https://img.shields.io/david/dev/aureooms/js-d-ary-heap.svg?style=flat)](https://david-dm.org/aureooms/js-d-ary-heap#info=devDependencies)
[![Code Climate](https://img.shields.io/codeclimate/github/aureooms/js-d-ary-heap.svg?style=flat)](https://codeclimate.com/github/aureooms/js-d-ary-heap)
[![NPM downloads per month](https://img.shields.io/npm/dm/@aureooms/js-d-ary-heap.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-d-ary-heap)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-d-ary-heap.svg?style=flat)](https://github.com/aureooms/js-d-ary-heap/issues)
[![Documentation](https://aureooms.github.io/js-d-ary-heap/badge.svg)](https://aureooms.github.io/js-d-ary-heap/source.html)

## Description
This package contains a `d`-ary heap implementation that can be parametrized
with any `d > 0`.

## Reference

  - http://www.cs.princeton.edu/~wayne/cs423/lectures/heaps-4up.pdf
  - http://stackoverflow.com/questions/6531543/efficient-implementation-of-binary-heaps
