"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_Component) {
  _inherits(Select, _Component);

  function Select() {
    _classCallCheck(this, Select);

    return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
  }

  _createClass(Select, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return _react2.default.createElement(
        "p",
        { className: "control" },
        _react2.default.createElement(
          "label",
          { className: "label" },
          props.label
        ),
        _react2.default.createElement(
          "span",
          { className: "select" },
          _react2.default.createElement(
            "select",
            _extends({}, props, { name: props.name, className: "is-large" }),
            _react2.default.createElement("option", null),
            props.data.map(function (data, i) {
              return _react2.default.createElement(
                "option",
                { key: i, value: data.name },
                data.name
              );
            })
          ),
          _react2.default.createElement(
            "span",
            { className: "is-danger" },
            props.showError ? props.error : ''
          )
        )
      );
    }
  }]);

  return Select;
}(_react.Component);

Select.propTypes = {
  name: _react2.default.PropTypes.string.isRequired,
  data: _react2.default.PropTypes.array.isRequired
};

exports.default = Select;