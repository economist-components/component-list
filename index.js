'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var List = (function (_React$Component) {
  _inherits(List, _React$Component);

  function List() {
    _classCallCheck(this, List);

    _React$Component.apply(this, arguments);
  }

  List.prototype.renderChildren = function renderChildren() {
    function createListItem(child) {
      var key = child.key;
      var childWithoutKey = _react2['default'].cloneElement(_extends({}, child, { key: null }), child.props, child.props.children);
      return _react2['default'].createElement(
        'li',
        { className: 'list__item', key: key },
        childWithoutKey
      );
    }
    var children = this.props.children;
    if (typeof children === 'undefined') {
      children = [];
    }
    if (typeof children.length === 'undefined') {
      children = [children];
    }
    return children.map(createListItem);
  };

  List.prototype.render = function render() {
    var className = 'list';
    if (this.props.className) {
      className = [className, this.props.className].join(' ');
    }
    return _react2['default'].createElement(
      'ul',
      {
        className: className
      },
      this.renderChildren()
    );
  };

  _createClass(List, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        className: _react2['default'].PropTypes.string,
        children: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.element)])
      };
    }
  }]);

  return List;
})(_react2['default'].Component);

exports['default'] = List;
module.exports = exports['default'];