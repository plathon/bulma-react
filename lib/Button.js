'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'buttonTypeRender',
    value: function buttonTypeRender() {
      var style = 'button';
      var props = this.props;
      style += ' ' + (0, _classnames2.default)(props) + (' ' + props.className);
      if (props.type === 'link') return _react2.default.createElement(
        'a',
        _extends({}, props, { className: style, href: this.props.to }),
        this.props.children
      );else return _react2.default.createElement(
        'button',
        _extends({}, props, { className: style, type: props.type, desabled: this.props['is-disabled'] }),
        this.props.children
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return this.buttonTypeRender();
    }
  }]);

  return Button;
}(_react.Component);

Button.propTypes = {
  children: _react2.default.PropTypes.any.isRequired,
  type: _react2.default.PropTypes.oneOf(['submit', 'button', 'link', '']),
  className: _react2.default.PropTypes.string,
  to: _react2.default.PropTypes.string
};

Button.defaultProps = {
  type: 'link',
  className: '',
  to: '#'
};

exports.default = Button;