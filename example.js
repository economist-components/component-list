'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _indexEs6 = require('./index.es6');

var _indexEs62 = _interopRequireDefault(_indexEs6);

var context = [{
  title: 'Subscribe',
  text: 'Subscribe',
  href: 'http://www.economistgroupmedia.com'
}, {
  title: 'Economist',
  text: 'Economist',
  href: 'http://www.economist.com/rights/'
}];
function mapContextToAnchor(contextItem) {
  return _react2['default'].createElement(
    'a',
    contextItem,
    contextItem.title
  );
}
exports['default'] = _react2['default'].createElement(
  _indexEs62['default'],
  { className: 'c-example--horizontal' },
  context.map(mapContextToAnchor)
);
module.exports = exports['default'];