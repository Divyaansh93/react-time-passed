'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimePassed = function (_Component) {
    _inherits(TimePassed, _Component);

    function TimePassed(props) {
        _classCallCheck(this, TimePassed);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.timeAgo = props.timeAgo ? props.timeAgo : (0, _moment2.default)();
        _this.state = {
            text: ''
        };
        return _this;
    }

    /**
     * clear the interval from the state
     */


    TimePassed.prototype.componentWillUnmount = function componentWillUnmount() {
        clearInterval(this.intervalFunction);
    };

    TimePassed.prototype.componentDidMount = function componentDidMount() {
        var _this2 = this;

        this.setState({ text: (0, _moment2.default)(this.timeAgo).fromNow() });
        this.intervalFunction = setInterval(function () {
            _this2.setState({ text: (0, _moment2.default)(_this2.timeAgo).fromNow() });
        }, 60001);
    };

    /**
     * function @TimeAgo render after every 1 minute. 
     */


    TimePassed.prototype.render = function render() {
        return _react2.default.createElement(
            'div',
            null,
            this.state.text
        );
    };

    return TimePassed;
}(_react.Component);

exports.default = TimePassed;
module.exports = exports['default'];