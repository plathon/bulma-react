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

var Subtitle = function (_Component) {
  _inherits(Subtitle, _Component);

  function Subtitle() {
    _classCallCheck(this, Subtitle);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Subtitle).apply(this, arguments));
  }

  _createClass(Subtitle, [{
    key: 'render',
    value: function render() {

      var style = 'subtitle';
      var props = this.props;
      style += ' ' + (0, _classnames2.default)(props) + (' ' + props.className);

      if (props['is-1']) return _react2.default.createElement(
        'h1',
        _extends({}, props, { className: style }),
        this.props.children
      );else if (props['is-3']) return _react2.default.createElement(
        'h3',
        _extends({}, props, { className: style }),
        this.props.children
      );else if (props['is-4']) return _react2.default.createElement(
        'h4',
        _extends({}, props, { className: style }),
        this.props.children
      );else if (props['is-5']) return _react2.default.createElement(
        'h5',
        _extends({}, props, { className: style }),
        this.props.children
      );else if (props['is-6']) return _react2.default.createElement(
        'h6',
        _extends({}, props, { className: style }),
        this.props.children
      );else return _react2.default.createElement(
        'h2',
        _extends({}, props, { className: style }),
        this.props.children
      );
    }
  }]);

  return Subtitle;
}(_react.Component);

Subtitle.propTypes = {
  children: _react2.default.PropTypes.any.isRequired,
  className: _react2.default.PropTypes.string
};

Subtitle.defaultProps = {
  className: ''
};

exports.default = Subtitle;