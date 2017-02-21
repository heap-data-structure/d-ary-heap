'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = sorted;

var _makeheap = require('./makeheap');

var _makeheap2 = _interopRequireDefault(_makeheap);

var _pop = require('./pop');

var _pop2 = _interopRequireDefault(_pop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [sorted].map(regeneratorRuntime.mark);

function sorted(arity, compare, swap, a, i, j) {
	return regeneratorRuntime.wrap(function sorted$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:

					(0, _makeheap2.default)(arity, compare, swap, a, i, j);

				case 1:
					if (!(i < j)) {
						_context.next = 7;
						break;
					}

					_context.next = 4;
					return (0, _pop2.default)(arity, compare, swap, a, i, j);

				case 4:
					--j;
					_context.next = 1;
					break;

				case 7:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL3NvcnRlZC5qcyJdLCJuYW1lcyI6WyJzb3J0ZWQiLCJhcml0eSIsImNvbXBhcmUiLCJzd2FwIiwiYSIsImkiLCJqIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFJeUJBLE07O0FBSHpCOzs7O0FBQ0E7Ozs7OztlQUV5QkEsTTs7QUFBVixTQUFVQSxNQUFWLENBQW1CQyxLQUFuQixFQUEyQkMsT0FBM0IsRUFBcUNDLElBQXJDLEVBQTRDQyxDQUE1QyxFQUFnREMsQ0FBaEQsRUFBb0RDLENBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRWQsNkJBQVVMLEtBQVYsRUFBa0JDLE9BQWxCLEVBQTRCQyxJQUE1QixFQUFtQ0MsQ0FBbkMsRUFBdUNDLENBQXZDLEVBQTJDQyxDQUEzQzs7QUFGYztBQUFBLFdBSU5ELElBQUlDLENBSkU7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxZQUljLG1CQUFLTCxLQUFMLEVBQWFDLE9BQWIsRUFBdUJDLElBQXZCLEVBQThCQyxDQUE5QixFQUFrQ0MsQ0FBbEMsRUFBc0NDLENBQXRDLENBSmQ7O0FBQUE7QUFJRSxPQUFFQSxDQUpKO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzb3J0ZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBtYWtlaGVhcCBmcm9tICcuL21ha2VoZWFwJyA7XG5pbXBvcnQgcG9wIGZyb20gJy4vcG9wJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBzb3J0ZWQgKCBhcml0eSAsIGNvbXBhcmUgLCBzd2FwICwgYSAsIGkgLCBqICkge1xuXG5cdG1ha2VoZWFwKCBhcml0eSAsIGNvbXBhcmUgLCBzd2FwICwgYSAsIGkgLCBqICkgO1xuXG5cdGZvciAoIDsgaSA8IGogOyAtLWogKSB5aWVsZCBwb3AoIGFyaXR5ICwgY29tcGFyZSAsIHN3YXAgLCBhICwgaSAsIGogKSA7XG5cbn1cbiJdfQ==