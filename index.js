'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var List = (function (_React$Component) {
  _inherits(List, _React$Component);

  function List() {
    _classCallCheck(this, List);

    _React$Component.apply(this, arguments);
  }

  List.prototype.renderChildren = function renderChildren() {
    function createListItem(child) {
      return _reactAddons2['default'].createElement(
        'li',
        { className: 'list__item' },
        child
      );
    }
    return _reactAddons2['default'].Children.map(this.props.children, createListItem);
  };

  List.prototype.render = function render() {
    var className = 'list';
    if (this.props.className) {
      className = [className, this.props.className].join(' ');
    }
    return _reactAddons2['default'].createElement(
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
        className: _reactAddons2['default'].PropTypes.string,
        children: _reactAddons2['default'].PropTypes.oneOfType([_reactAddons2['default'].PropTypes.element, _reactAddons2['default'].PropTypes.arrayOf(_reactAddons2['default'].PropTypes.element)])
      };
    }
  }]);

  return List;
})(_reactAddons2['default'].Component);

exports['default'] = List;
module.exports = exports['default'];