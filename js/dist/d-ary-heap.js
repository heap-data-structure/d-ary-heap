"use strict";

(function () {

	"use strict";

	var definition = function definition(exports, undefined) {

		/* js/src/001-core */
		/* js/src/001-core/makeheap.js */

		/**
   * Builds a heap in O(n) operations.
   *
   * @param {int} arity arity of the heap
   * @param {function} compare the comparison function
   * @param {function} swap the swap function
   * @param {array} a the array where the heap is stored
   * @param {int} i left inner bound
   * @param {int} j right outer bound
   *
   */

		var makeheap = function makeheap(arity, compare, swap, a, i, j) {

			for (var k = i + (j - i + arity - 2) / arity | 0; k-- > i;) {

				siftdown(arity, compare, swap, a, i, j, k);
			}
		};

		exports.makeheap = makeheap;

		/* js/src/001-core/merge.js */

		/**
   * Merges heaps at intervals [i, j[ and [j, k[ in array *a*
   * into a new heap at interval [i, k[.
   *
   * Hypothesis :
   *
   *   - i <= j <= k
   *   - j - 1 is the last leaf ot the first heap
   *
   * @param {int} arity arity of the heap
   * @param {function} compare the comparison function
   * @param {function} swap the swap function
   * @param {array} a the array where the two heaps are stored
   * @param {int} i is the root of the first heap
   * @param {int} j is the root of the second heap
   * @param {int} k - 1 is the index of the last leaf in the second heap
   */

		var merge = function merge(arity, compare, swap, a, i, j, k) {

			for (; j < k; ++j) {
				siftup(arity, compare, swap, a, i, j + 1, j);
			}
		};

		exports.merge = merge;

		/* js/src/001-core/nextchild.js */

		/**
   * Computes which child is the smallest according
   * to a comparison function.
   *
   * Hypothesis : i < j i.e. there should be at least one child
   *
   * @param {int} arity arity of the heap
   * @param {function} compare the comparison function
   * @param {function} swap the swap function
   * @param {array} a the array where the heap is stored
   * @param {int} i is the first child
   * @param {int} j - 1 is the last leaf
   */

		var nextchild = function nextchild(arity, compare, swap, a, i, j) {

			var k, best;

			k = i + Math.min(arity, j - i);

			best = i;

			for (++i; i < k; ++i) {

				if (compare(a[i], a[best]) < 0) {
					best = i;
				}
			}

			return best;
		};

		exports.nextchild = nextchild;

		/* js/src/001-core/pop.js */

		/**
   * Pops the root from a d-ary heap.
   *
   * Hypothesis : i < j
   *
   * @param {int} arity arity of the heap
   * @param {function} compare the comparison function
   * @param {function} swap the swap function
   * @param {array} a the array where the heap is stored
   * @param {int} i is the root
   * @param {int} j - 1 is the last leaf
   */

		var pop = function pop(arity, compare, swap, a, i, j) {

			var popped;

			// decrement size of heap

			--j;

			// put last leaf at root

			popped = a[i];
			a[i] = a[j];

			// sift down the new root

			siftdown(arity, compare, swap, a, i, j, i);

			// return old root

			return popped;
		};

		exports.pop = pop;

		/* js/src/001-core/pull.js */

		/**
   * Sifts a node up to the root as if its priority was the highest.
   *
   * @param {int} arity arity of the heap
   * @param {function} compare the comparison function
   * @param {function} swap the swap function
   * @param {array} a the array where the heap is stored
   * @param {int} i is the root element
   * @param {int} j - 1 is the last leaf
   * @param {int} k is the target node
   */

		var pull = function pull(arity, compare, swap, a, i, j, k) {

			var current, parent;

			current = k - i;

			// while we are not the root

			while (current !== 0) {

				// address of the parent in a zero-based
				// d-ary heap

				parent = i + Math.floor((current - 1) / arity);

				// swap with parent

				swap(a, i + current, parent);

				current = parent - i;
			}
		};

		exports.pull = pull;

		/* js/src/001-core/push.js */

		/**
   * Inserts the jth element of an array in an existing
   * dary heap in interval [i, j[.
   *
   * Hypothesis : i <= j
   *
   * @param {int} arity arity of the heap
   * @param {function} compare the comparison function
   * @param {function} swap the swap function
   * @param {array} a the array where the heap is stored
   * @param {int} i is the root
   * @param {int} j - 1 is the new leaf
   */

		var push = function push(arity, compare, swap, a, i, j) {

			// sift up the new leaf

			return siftup(arity, compare, swap, a, i, j + 1, j);
		};

		exports.push = push;

		/* js/src/001-core/remove.js */

		/**
   * Removes a target element from a d-ary heap.
   *
   * Hypothesis : i < j
   *
   * @param {int} arity arity of the heap
   * @param {function} compare the comparison function
   * @param {function} swap the swap function
   * @param {array} a the array where the heap is stored
   * @param {int} i is the root
   * @param {int} j - 1 is the last leaf
   * @param {int} k is the target node
   */

		var remove = function remove(arity, compare, swap, a, i, j, k) {

			// pull target node all the way up

			pull(arity, compare, swap, a, i, j, k);

			// pop target node

			return pop(arity, compare, swap, a, i, j);
		};

		exports.remove = remove;

		/* js/src/001-core/siftdown.js */

		/**
   * Sifts down a node.
   *
   * @param {int} arity arity of the heap
   * @param {function} compare the comparison function
   * @param {function} swap the swap function
   * @param {array} a the array where the heap is stored
   * @param {int} i is the root element
   * @param {int} j - 1 is the last leaf
   * @param {int} k is the target node
   */

		var siftdown = function siftdown(arity, compare, swap, a, i, j, k) {

			var current, candidate, firstchild;

			current = k - i;

			while (true) {

				// address of the first child in a zero-based
				// d-ary heap

				firstchild = arity * current + 1;

				// if current node has no children
				// then we are done

				if (firstchild >= j - i) {
					break;
				}

				// if current value is smaller than its smallest
				// child then we are done

				candidate = nextchild(arity, compare, swap, a, i + firstchild, j);

				if (compare(a[i + current], a[candidate]) <= 0) {
					break;
				}

				// otherwise
				// swap with smallest child

				swap(a, i + current, candidate);

				current = candidate - i;
			}

			return i + current;
		};

		exports.siftdown = siftdown;

		/* js/src/001-core/siftup.js */

		/**
   * Sifts up a node.
   *
   * @param {int} arity arity of the heap
   * @param {function} compare the comparison function
   * @param {function} swap the swap function
   * @param {array} a the array where the heap is stored
   * @param {int} i is the root element
   * @param {int} j - 1 is the last leaf
   * @param {int} k is the target node
   */

		var siftup = function siftup(arity, compare, swap, a, i, j, k) {

			var current, parent;

			current = k - i;

			// while we are not the root

			while (current !== 0) {

				// address of the parent in a zero-based
				// d-ary heap

				parent = i + Math.floor((current - 1) / arity);

				// if current value is greater than its parent
				// then we are done

				if (compare(a[i + current], a[parent]) >= 0) {
					return i + current;
				}

				// otherwise
				// swap with parent

				swap(a, i + current, parent);

				current = parent - i;
			}

			return i + current;
		};

		exports.siftup = siftup;

		/* js/src/002-adt */
		/* js/src/002-adt/DAryHeap.js */

		var DAryHeap = function DAryHeap(arity, compare) {

			// arity of this heap

			this.arity = arity;

			// the comparison function

			this.compare = function (a, b) {
				return compare(a.value, b.value);
			};

			// the original comparison function

			this._compare = compare;

			// array used to store values

			this.array = [];

			// size of the heap

			this.length = 0;
		};

		DAryHeap.Reference = function (index, value) {

			this.index = index;
			this.value = value;
		};

		DAryHeap.prototype.swap = function (a, i, j) {

			var tmp;

			tmp = a[i];
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

			var a, i, j, reference;

			if (this.length === 0) {
				return undefined;
			}

			a = this.array;
			i = 0;
			j = a.length;

			reference = pop(this.arity, this.compare, this.swap, a, i, j);

			a.pop();

			--this.length;

			return reference.value;
		};

		DAryHeap.prototype.popreference = function () {

			var a, i, j, reference;

			if (this.length === 0) {
				return null;
			}

			a = this.array;
			i = 0;
			j = a.length;

			reference = pop(this.arity, this.compare, this.swap, a, i, j);

			a.pop();

			--this.length;

			return reference;
		};

		DAryHeap.prototype.push = function (value) {

			var a, i, j, reference;

			a = this.array;
			i = 0;
			j = a.length;

			reference = new DAryHeap.Reference(j, value);

			a.push(reference);

			push(this.arity, this.compare, this.swap, a, i, j);

			++this.length;

			return reference;
		};

		DAryHeap.prototype.pushreference = function (reference) {

			var a, i, j;

			a = this.array;
			i = 0;
			j = a.length;

			reference.index = j;
			a.push(reference);

			push(this.arity, this.compare, this.swap, a, i, j);

			++this.length;
		};

		DAryHeap.prototype.merge = function (other) {

			var a, i, j, k, t;

			a = this.array;
			i = 0;
			j = a.length;

			// concat arrays of both heaps

			a = this.array = a.concat(other.array);

			k = a.length;

			// update index of concatenated elements

			for (t = j; t < k; ++t) {
				a[t].index = t;
			}

			merge(this.arity, this.compare, this.swap, a, i, j, k);

			this.length += other.length;
		};

		DAryHeap.prototype.update = function (reference, value) {

			var d;

			d = this._compare(value, reference.value);

			if (d < 0) {
				this.decreasekey(reference, value);
			} else if (d > 0) {
				this.increasekey(reference, value);
			} else {

				// d === 0 does not imply reference.value === value

				reference.value = value;
			}
		};

		DAryHeap.prototype.decreasekey = function (reference, value) {

			var a, i, j, k;

			a = this.array;
			i = 0;
			j = a.length;
			k = reference.index;

			reference.value = value;

			siftup(this.arity, this.compare, this.swap, a, i, j, k);
		};

		DAryHeap.prototype.increasekey = function (reference, value) {

			var a, i, j, k;

			a = this.array;
			i = 0;
			j = a.length;
			k = reference.index;

			reference.value = value;

			siftdown(this.arity, this.compare, this.swap, a, i, j, k);
		};

		DAryHeap.prototype["delete"] = function (reference) {

			var a, i, j, k;

			a = this.array;
			i = 0;
			j = a.length;
			k = reference.index;

			remove(this.arity, this.compare, this.swap, a, i, j, k);

			a.pop();

			--this.length;
		};

		exports.DAryHeap = DAryHeap;

		/* js/src/002-adt/DAryHeapWithoutReferences.js */

		var DAryHeapWithoutReferences = function DAryHeapWithoutReferences(arity, compare) {

			// arity of this heap

			this.arity = arity;

			// the comparison function

			this.compare = compare;

			// array used to store values

			this.array = [];

			// size of the heap

			this.length = 0;
		};

		DAryHeapWithoutReferences.prototype.swap = function (a, i, j) {

			var tmp;

			tmp = a[i];
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

			var a, i, j, value;

			if (this.length === 0) {
				return undefined;
			}

			a = this.array;
			i = 0;
			j = a.length;

			value = pop(this.arity, this.compare, this.swap, a, i, j);

			a.pop();

			--this.length;

			return value;
		};

		DAryHeapWithoutReferences.prototype.push = function (value) {

			var a, i, j;

			a = this.array;
			i = 0;
			j = a.length;

			a.push(value);

			push(this.arity, this.compare, this.swap, a, i, j);

			++this.length;
		};

		DAryHeapWithoutReferences.prototype.merge = function (other) {

			var a, i, j, k;

			a = this.array;
			i = 0;
			j = a.length;

			a = this.array = a.concat(other.array);

			k = a.length;

			merge(this.arity, this.compare, this.swap, a, i, j, k);

			this.length += other.length;
		};

		exports.DAryHeapWithoutReferences = DAryHeapWithoutReferences;

		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("aureooms-js-d-ary-heap", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["daryheap"] = {});
	} else console.error("unable to detect type of module to define for aureooms-js-d-ary-heap");
})();