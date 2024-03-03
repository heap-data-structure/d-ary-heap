:octopus:
[@heap-data-structure/d-ary-heap](https://heap-data-structure.github.io/d-ary-heap)
==

<p align="center">
<img src="https://raw.githubusercontent.com/heap-data-structure/d-ary-heap/main/media/sketch.svg" width="600">
</p>

`d`-ary heap data structure library for JavaScript.
See [docs](https://heap-data-structure.github.io/d-ary-heap).
Parent is [@heap-data-structure](https://github.com/heap-data-structure/about).

```js
import {_calloc} from '@array-like/alloc';
const calloc = _calloc(Int32Array);
const array = calloc(10000);

import {iota} from '@array-like/fill';
iota(array, 0, array.length, 0);

import {shuffle} from '@randomized/random';
shuffle(array, 0, array.length);

import {swap} from '@array-like/swap';
import {increasing} from '@total-order/primitive';
import {makeheap} from '@heap-data-structure/d-ary-heap';
makeheap( 2 , increasing , swap , array , 0 , array.length ) ;
//        ^       ^         ^       ^     ^        ^
//      arity  ordering    swap   input [left  , right[
//                        method
//

import {DAryHeap} from '@heap-data-structure/d-ary-heap';
let heap = new DAryHeap( 2 , increasing ) ;
//                       ^       ^
//                     arity  ordering
//
```

[![License](https://img.shields.io/github/license/heap-data-structure/d-ary-heap.svg)](https://raw.githubusercontent.com/heap-data-structure/d-ary-heap/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@heap-data-structure/d-ary-heap.svg)](https://www.npmjs.org/package/@heap-data-structure/d-ary-heap)
[![Tests](https://img.shields.io/github/workflow/status/heap-data-structure/d-ary-heap/ci?event=push&label=tests)](https://github.com/heap-data-structure/d-ary-heap/actions/workflows/ci.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/heap-data-structure/d-ary-heap.svg)](https://github.com/heap-data-structure/d-ary-heap/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/heap-data-structure/d-ary-heap.svg)](https://github.com/heap-data-structure/d-ary-heap/issues)
[![Downloads](https://img.shields.io/npm/dm/@heap-data-structure/d-ary-heap.svg)](https://www.npmjs.org/package/@heap-data-structure/d-ary-heap)

[![Code issues](https://img.shields.io/codeclimate/issues/heap-data-structure/d-ary-heap.svg)](https://codeclimate.com/github/heap-data-structure/d-ary-heap/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/heap-data-structure/d-ary-heap.svg)](https://codeclimate.com/github/heap-data-structure/d-ary-heap/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/heap-data-structure/d-ary-heap/main.svg)](https://codecov.io/gh/heap-data-structure/d-ary-heap)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/heap-data-structure/d-ary-heap.svg)](https://codeclimate.com/github/heap-data-structure/d-ary-heap/trends/technical_debt)
[![Documentation](https://heap-data-structure.github.io/d-ary-heap/badge.svg)](https://heap-data-structure.github.io/d-ary-heap/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@heap-data-structure/d-ary-heap)](https://bundlephobia.com/result?p=@heap-data-structure/d-ary-heap)

## :newspaper: Description
This package contains a `d`-ary heap implementation that can be parametrized
with any `d > 0`.
