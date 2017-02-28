'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('./Container');

var _Container2 = _interopRequireDefault(_Container);

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

var _Columns = require('./Columns');

var _Columns2 = _interopRequireDefault(_Columns);

var _Column = require('./Column');

var _Column2 = _interopRequireDefault(_Column);

var _Title = require('./Title');

var _Title2 = _interopRequireDefault(_Title);

var _Subtitle = require('./Subtitle');

var _Subtitle2 = _interopRequireDefault(_Subtitle);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Notification = require('./Notification');

var _Notification2 = _interopRequireDefault(_Notification);

var _Tile = require('./Tile');

var _Tile2 = _interopRequireDefault(_Tile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Section2.default,
        null,
        _react2.default.createElement(
          _Container2.default,
          null,
          _react2.default.createElement(
            _Title2.default,
            { 'is-1': true },
            'React Bulma Components'
          ),
          _react2.default.createElement(
            _Subtitle2.default,
            { 'is-2': true },
            'enjoy it! :)'
          ),
          _react2.default.createElement('hr', null),
          _react2.default.createElement(
            _Title2.default,
            null,
            'Basic example'
          ),
          _react2.default.createElement(
            'table',
            { className: 'table' },
            _react2.default.createElement(
              'tbody',
              null,
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  _Columns2.default,
                  null,
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      _Column2.default,
                      { 'is-half': true },
                      _react2.default.createElement(
                        _Button2.default,
                        null,
                        'Enter'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      _Column2.default,
                      { 'is-half': true },
                      '<Button>Enter</Button>'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  _Columns2.default,
                  null,
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      _Column2.default,
                      { 'is-half': true },
                      _react2.default.createElement(
                        _Button2.default,
                        { 'is-primary': true },
                        'Enter'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      _Column2.default,
                      { 'is-half': true },
                      '<Button is-primary>Enter</Button>'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  _Columns2.default,
                  null,
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      _Column2.default,
                      { 'is-half': true },
                      _react2.default.createElement(
                        _Button2.default,
                        { 'is-info': true },
                        'Enter'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      _Column2.default,
                      { 'is-half': true },
                      '<Button is-info>Enter</Button>'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  _Columns2.default,
                  null,
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      _Column2.default,
                      { 'is-half': true },
                      _react2.default.createElement(
                        _Button2.default,
                        { 'is-success': true },
                        'Enter'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      _Column2.default,
                      { 'is-half': true },
                      '<Button is-success>Enter</Button>'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  _Columns2.default,
                  null,
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      _Column2.default,
                      { 'is-half': true },
                      _react2.default.createElement(
                        _Button2.default,
                        { 'is-warning': true },
                        'Enter'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      _Column2.default,
                      { 'is-half': true },
                      '<Button is-warning>Enter</Button>'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  _Columns2.default,
                  null,
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      _Column2.default,
                      { 'is-half': true },
                      _react2.default.createElement(
                        _Button2.default,
                        { 'is-danger': true },
                        'Enter'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      _Column2.default,
                      { 'is-half': true },
                      '<Button is-danger>Enter</Button>'
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _Subtitle2.default,
            null,
            'Size'
          ),
          _react2.default.createElement(
            'table',
            { className: 'table' },
            _react2.default.createElement(
              'tbody',
              null,
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  _Columns2.default,
                  null,
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      _Column2.default,
                      { 'is-half': true },
                      _react2.default.createElement(
                        _Button2.default,
                        { 'is-small': true },
                        'Enter'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      _Column2.default,
                      { 'is-half': true },
                      '<Button is-small>Enter</Button>'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  _Columns2.default,
                  null,
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      _Column2.default,
                      { 'is-half': true },
                      _react2.default.createElement(
                        _Button2.default,
                        { 'is-medium': true },
                        'Enter'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      _Column2.default,
                      { 'is-half': true },
                      '<Button is-medium>Enter</Button>'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  _Columns2.default,
                  null,
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      _Column2.default,
                      { 'is-half': true },
                      _react2.default.createElement(
                        _Button2.default,
                        { 'is-large': true },
                        'Enter'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      _Column2.default,
                      { 'is-half': true },
                      '<Button is-large>Enter</Button>'
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _Subtitle2.default,
            null,
            'State'
          ),
          _react2.default.createElement(
            'table',
            { className: 'table' },
            _react2.default.createElement(
              'tbody',
              null,
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  _Columns2.default,
                  null,
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      _Column2.default,
                      { 'is-half': true },
                      _react2.default.createElement(
                        _Button2.default,
                        { 'is-primary': true, 'is-outlined': true },
                        'Enter'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      _Column2.default,
                      { 'is-half': true },
                      '<Button is-primary is-outlined>Enter</Button>'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  _Columns2.default,
                  null,
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      _Column2.default,
                      { 'is-half': true },
                      _react2.default.createElement(
                        _Button2.default,
                        { 'is-primary': true, 'is-loading': true },
                        'Enter'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      _Column2.default,
                      { 'is-half': true },
                      '<Button is-primary is-loading>Enter</Button>'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  _Columns2.default,
                  null,
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      _Column2.default,
                      { 'is-half': true },
                      _react2.default.createElement(
                        _Button2.default,
                        { 'is-primary': true, 'is-disabled': true },
                        'Enter'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      _Column2.default,
                      { 'is-half': true },
                      '<Button is-primary is-disabled>Enter</Button>'
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement('hr', null),
          _react2.default.createElement(
            _Subtitle2.default,
            null,
            'The pattern is ever the same ',
            _react2.default.createElement(
              'strong',
              null,
              '<component is-active/>'
            ),
            ' or ',
            _react2.default.createElement(
              'strong',
              null,
              '<component is-active={true}/>'
            ),
            ' and to disable use ',
            _react2.default.createElement(
              'strong',
              null,
              '<component is-active={false}/>'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'p',
              { className: 'is-text-centered' },
              'For more: ',
              _react2.default.createElement(
                'a',
                { href: 'http://bulma.io/documentation/overview/start/', target: '_blank' },
                'see the official documentation'
              )
            )
          ),
          _react2.default.createElement('hr', null),
          _react2.default.createElement(
            _Title2.default,
            null,
            'Tiles'
          ),
          _react2.default.createElement(
            _Tile2.default,
            { 'is-ancestor': true },
            _react2.default.createElement(
              _Tile2.default,
              { 'is-4': true, 'is-vertical': true, 'is-parent': true },
              _react2.default.createElement(
                _Tile2.default,
                { 'is-child': true, box: true },
                _react2.default.createElement(
                  'p',
                  { className: 'title' },
                  'One'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.'
                )
              ),
              _react2.default.createElement(
                _Tile2.default,
                { 'is-child': true, box: true },
                _react2.default.createElement(
                  'p',
                  { className: 'title' },
                  'Two'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.'
                )
              )
            ),
            _react2.default.createElement(
              _Tile2.default,
              { 'is-parent': true },
              _react2.default.createElement(
                _Tile2.default,
                { 'is-child': true, box: true },
                _react2.default.createElement(
                  'p',
                  { className: 'title' },
                  'Three'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;