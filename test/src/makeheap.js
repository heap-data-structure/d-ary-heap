import test from 'ava';

import {swap} from '@array-like/swap';
import {isSorted} from '@comparison-sorting/is-sorted';
import {
	chain as fchain,
	partial,
	star,
} from '@functional-abstraction/functools';
import {_chain as chain} from '@iterable-iterator/chain';
import {exhaust} from '@iterable-iterator/consume';
import {list} from '@iterable-iterator/list';
import {map} from '@iterable-iterator/map';
import {range} from '@iterable-iterator/range';
import {shuffle} from '@randomized/random';
import {product} from '@set-theory/cartesian-product';
import {increasing, decreasing} from '@total-order/primitive';

import {makeheap, pop} from '#module';

const check = function (arity, comparename, compare, ctor, n) {
	const title = `makeheap-${arity} (new ${ctor.name}(${n}), ${comparename})`;

	test(title, (t) => {
		const a = ctor.from(range(n));

		shuffle(a, 0, n);

		makeheap(arity, compare, swap, a, 0, n);

		t.deepEqual(a.length, n, 'size stays the same');

		const out = [];

		let i = n;

		while (i--) {
			out.push(pop(arity, compare, swap, a, 0, i + 1));
		}

		t.true(isSorted(compare, out, 0, n), 'output is sorted');
	});
};

exhaust(
	map(
		fchain([chain, list, partial(star, [check])]),

		product(
			[
				[[1], [2], [3], [4], [5]],

				[
					['increasing', increasing],
					['decreasing', decreasing],
				],
				[
					[Array],
					[Int8Array],
					[Uint8Array],
					[Int16Array],
					[Uint16Array],
					[Int32Array],
					[Uint32Array],
					[Float32Array],
					[Float64Array],
				],
				[[0], [1], [2], [3], [4], [5], [15], [16], [17], [63], [64], [65]],
			],
			1,
		),
	),
);
