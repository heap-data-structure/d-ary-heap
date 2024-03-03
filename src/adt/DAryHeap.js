import merge from '../core/merge.js';
import pop from '../core/pop.js';
import push from '../core/push.js';
import remove from '../core/remove.js';
import siftdown from '../core/siftdown.js';
import siftup from '../core/siftup.js';

export default function DAryHeap(arity, compare) {
	// Arity of this heap

	this.arity = arity;

	// The comparison function

	this.compare = function (a, b) {
		return compare(a.value, b.value);
	};

	// The original comparison function

	this._compare = compare;

	// Array used to store values

	this.array = [];

	// Size of the heap

	this.length = 0;
}

DAryHeap.Reference = function (index, value) {
	this.index = index;
	this.value = value;
};

DAryHeap.prototype.swap = function (a, i, j) {
	const tmp = a[i];
	a[i] = a[j];
	a[j] = tmp;

	a[i].index = i;
	a[j].index = j;
};

DAryHeap.prototype.head = function () {
	if (this.length === 0) {
		return undefined;
	}

	return this.array[0].value;
};

DAryHeap.prototype.headreference = function () {
	if (this.length === 0) {
		return null;
	}

	return this.array[0];
};

DAryHeap.prototype.pop = function () {
	if (this.length === 0) {
		return undefined;
	}

	const a = this.array;
	const i = 0;
	const j = a.length;

	const reference = pop(this.arity, this.compare, this.swap, a, i, j);

	a.pop();

	--this.length;

	return reference.value;
};

DAryHeap.prototype.popreference = function () {
	if (this.length === 0) {
		return null;
	}

	const a = this.array;
	const i = 0;
	const j = a.length;

	const reference = pop(this.arity, this.compare, this.swap, a, i, j);

	a.pop();

	--this.length;

	return reference;
};

DAryHeap.prototype.push = function (value) {
	const a = this.array;
	const i = 0;
	const j = a.length;

	const reference = new DAryHeap.Reference(j, value);

	a.push(reference);

	push(this.arity, this.compare, this.swap, a, i, j);

	++this.length;

	return reference;
};

DAryHeap.prototype.pushreference = function (reference) {
	const a = this.array;
	const i = 0;
	const j = a.length;

	reference.index = j;
	a.push(reference);

	push(this.arity, this.compare, this.swap, a, i, j);

	++this.length;
};

DAryHeap.prototype.merge = function (other) {
	const a = this.array;
	const i = 0;
	const j = a.length;

	// Concat arrays of both heaps

	const b = a.concat(other.array);
	this.array = b;

	const k = b.length;

	// Update index of concatenated elements

	for (let t = j; t < k; ++t) {
		b[t].index = t;
	}

	merge(this.arity, this.compare, this.swap, b, i, j, k);

	this.length += other.length;
};

DAryHeap.prototype.update = function (reference, value) {
	const d = this._compare(value, reference.value);

	if (d < 0) {
		this.decreasekey(reference, value);
	} else if (d > 0) {
		this.increasekey(reference, value);
	} else {
		// D === 0 does not imply reference.value === value

		reference.value = value;
	}
};

DAryHeap.prototype.decreasekey = function (reference, value) {
	const a = this.array;
	const i = 0;
	const j = a.length;
	const k = reference.index;

	reference.value = value;

	siftup(this.arity, this.compare, this.swap, a, i, j, k);
};

DAryHeap.prototype.increasekey = function (reference, value) {
	const a = this.array;
	const i = 0;
	const j = a.length;
	const k = reference.index;

	reference.value = value;

	siftdown(this.arity, this.compare, this.swap, a, i, j, k);
};

DAryHeap.prototype.delete = function (reference) {
	const a = this.array;
	const i = 0;
	const j = a.length;
	const k = reference.index;

	remove(this.arity, this.compare, this.swap, a, i, j, k);

	a.pop();

	--this.length;
};
