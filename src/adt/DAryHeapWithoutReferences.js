import merge from '../core/merge.js';
import pop from '../core/pop.js';
import push from '../core/push.js';

export default function DAryHeapWithoutReferences(arity, compare) {
	// Arity of this heap

	this.arity = arity;

	// The comparison function

	this.compare = compare;

	// Array used to store values

	this.array = [];

	// Size of the heap

	this.length = 0;
}

DAryHeapWithoutReferences.prototype.swap = function (a, i, j) {
	const tmp = a[i];
	a[i] = a[j];
	a[j] = tmp;
};

DAryHeapWithoutReferences.prototype.head = function () {
	if (this.length === 0) {
		return undefined;
	}

	return this.array[0];
};

DAryHeapWithoutReferences.prototype.pop = function () {
	if (this.length === 0) {
		return undefined;
	}

	const a = this.array;
	const i = 0;
	const j = a.length;

	const value = pop(this.arity, this.compare, this.swap, a, i, j);

	a.pop();

	--this.length;

	return value;
};

DAryHeapWithoutReferences.prototype.push = function (value) {
	const a = this.array;
	const i = 0;
	const j = a.length;

	a.push(value);

	push(this.arity, this.compare, this.swap, a, i, j);

	++this.length;
};

DAryHeapWithoutReferences.prototype.merge = function (other) {
	const a = this.array;
	const i = 0;
	const j = a.length;

	const b = a.concat(other.array);
	this.array = b;

	const k = b.length;

	merge(this.arity, this.compare, this.swap, b, i, j, k);

	this.length += other.length;
};
