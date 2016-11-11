function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, PropTypes } from 'react';
import moment from 'moment';

var TimePassed = function (_Component) {
    _inherits(TimePassed, _Component);

    function TimePassed(props) {
        _classCallCheck(this, TimePassed);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.timeAgo = props.timeAgo ? props.timeAgo : moment();
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

        this.setState({ text: moment(this.timeAgo).fromNow() });
        this.intervalFunction = setInterval(function () {
            _this2.setState({ text: moment(_this2.timeAgo).fromNow() });
        }, 60001);
    };

    /**
     * function @TimeAgo render after every 1 minute. 
     */


    TimePassed.prototype.render = function render() {
        return React.createElement(
            'div',
            null,
            this.state.text
        );
    };

    return TimePassed;
}(Component);

export { TimePassed as default };