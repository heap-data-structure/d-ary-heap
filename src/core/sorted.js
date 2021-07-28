import makeheap from './makeheap.js';
import pop from './pop.js';

export default function* sorted(arity, compare, swap, a, i, j) {
	makeheap(arity, compare, swap, a, i, j);

	for (; i < j; --j) yield pop(arity, compare, swap, a, i, j);
}
