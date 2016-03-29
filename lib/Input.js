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

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Input).apply(this, arguments));
  }

  _createClass(Input, [{
    key: 'render',
    value: function render() {
      var style = 'input';
      var props = this.props;
      style += ' ' + (0, _classnames2.default)(props) + (' ' + props.className);
      var controlClass = !props['is-loading'] ? 'control' : 'control is-loading';
      if (!props.standalone) {
        return _react2.default.createElement(
          'p',
          { className: controlClass },
          _react2.default.createElement(
            'label',
            { className: 'label' },
            this.props.label
          ),
          _react2.default.createElement('input', _extends({}, props, {
            className: style,
            type: props.type,
            name: props.name,
            disabled: props['is-disabled'] })),
          _react2.default.createElement(
            'span',
            { className: 'is-danger' },
            props.showError ? props.error : ''
          )
        );
      } else {
        return _react2.default.createElement('input', _extends({}, props, {
          className: style,
          type: props.type,
          name: props.name,
          disabled: props['is-disabled'] }));
      }
    }
  }]);

  return Input;
}(_react.Component);

Input.defaultProps = {
  type: 'text',
  className: '',
  disabled: false,
  standalone: false
};

Input.propTypes = {
  name: _react2.default.PropTypes.string.isRequired,
  "is-disabled": _react2.default.PropTypes.bool
};

exports.default = Input;