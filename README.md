[@aureooms/js-d-ary-heap](https://aureooms.github.io/js-d-ary-heap)
==

<img src="https://cdn.rawgit.com/aureooms/js-d-ary-heap/main/media/sketch.svg" width="864">

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

[![License](https://img.shields.io/github/license/aureooms/js-d-ary-heap.svg)](https://raw.githubusercontent.com/aureooms/js-d-ary-heap/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-d-ary-heap.svg)](https://www.npmjs.org/package/@aureooms/js-d-ary-heap)
[![Build](https://img.shields.io/travis/aureooms/js-d-ary-heap/main.svg)](https://travis-ci.org/aureooms/js-d-ary-heap/branches)
[![Dependencies](https://img.shields.io/david/aureooms/js-d-ary-heap.svg)](https://david-dm.org/aureooms/js-d-ary-heap)
[![Dev dependencies](https://img.shields.io/david/dev/aureooms/js-d-ary-heap.svg)](https://david-dm.org/aureooms/js-d-ary-heap?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-d-ary-heap.svg)](https://github.com/aureooms/js-d-ary-heap/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-d-ary-heap.svg)](https://www.npmjs.org/package/@aureooms/js-d-ary-heap)

[![Code issues](https://img.shields.io/codeclimate/issues/aureooms/js-d-ary-heap.svg)](https://codeclimate.com/github/aureooms/js-d-ary-heap/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/aureooms/js-d-ary-heap.svg)](https://codeclimate.com/github/aureooms/js-d-ary-heap/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/aureooms/js-d-ary-heap/main.svg)](https://codecov.io/gh/aureooms/js-d-ary-heap)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-d-ary-heap.svg)](https://codeclimate.com/github/aureooms/js-d-ary-heap/trends/technical_debt)
[![Documentation](https://aureooms.github.io/js-d-ary-heap/badge.svg)](https://aureooms.github.io/js-d-ary-heap/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-d-ary-heap)](https://bundlephobia.com/result?p=@aureooms/js-d-ary-heap)

## Description
This package contains a `d`-ary heap implementation that can be parametrized
with any `d > 0`.

## Reference

  - http://www.cs.princeton.edu/~wayne/cs423/lectures/heaps-4up.pdf
  - http://stackoverflow.com/questions/6531543/efficient-implementation-of-binary-heaps
