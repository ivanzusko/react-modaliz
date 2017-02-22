(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react);
        global.index = mod.exports;
    }
})(this, function (exports, _react) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var propTypes = {
        className: _react.PropTypes.string,
        conditionalRender: _react.PropTypes.bool,
        discardDefaults: _react.PropTypes.bool,
        show: _react.PropTypes.bool,
        speed: _react.PropTypes.number,
        onClose: _react.PropTypes.func.isRequired
    };

    var defaultProps = {
        conditionalRender: false,
        discardDefaults: false,
        show: false,
        speed: 100
    };

    var Modaliz = function (_Component) {
        _inherits(Modaliz, _Component);

        function Modaliz() {
            _classCallCheck(this, Modaliz);

            var _this = _possibleConstructorReturn(this, (Modaliz.__proto__ || Object.getPrototypeOf(Modaliz)).call(this));

            _this.state = {
                fadeIn: {}
            };
            return _this;
        }

        _createClass(Modaliz, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                var _this2 = this;

                if (this.props.conditionalRender) {
                    setTimeout(function () {
                        _this2.setState({
                            fadeIn: {
                                opacity: 1,
                                transition: _this2.props.speed + 'ms'
                            }
                        });
                    }, 1);
                }
            }
        }, {
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                var _this3 = this;

                if (!this.props.conditionalRender) {
                    if (nextProps.show) {
                        setTimeout(function () {
                            _this3.setState({
                                fadeIn: {
                                    opacity: 1,
                                    transition: _this3.props.speed + 'ms'
                                }
                            });
                        }, 1);
                    } else {
                        this.setState({ fadeIn: {} });
                    }
                }
            }
        }, {
            key: 'render',
            value: function render() {
                var wrapper = this.props.className ? 'modaliz-wrapper ' + this.props.className + '-wrapper' : 'modaliz-wrapper';
                var container = this.props.className ? 'modaliz-container ' + this.props.className + '-container' : 'modaliz-container';
                var close = this.props.className ? 'modaliz-close ' + this.props.className + '-close' : 'modaliz-close';
                var overlay = this.props.className ? 'modaliz-overlay ' + this.props.className + '-overlay' : 'modaliz-overlay';
                var modalizStyle = {};

                if (!this.props.discardDefaults) {
                    modalizStyle = {
                        wrapper: {
                            position: 'fixed',
                            width: '100vw',
                            height: '100vh',
                            zIndex: 1000,
                            top: 0,
                            left: 0,
                            opacity: 0
                        },
                        container: {
                            position: 'absolute',
                            maxWidth: '500px',
                            minHeight: '100px',
                            width: '90vw',
                            backgroundColor: '#ffffff',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 1
                        },
                        close: {
                            position: 'absolute',
                            width: '1.5rem',
                            height: '1.5rem',
                            top: '.5rem',
                            right: '.5rem',
                            fontSize: '30px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            zIndex: 1
                        },
                        overlay: {
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, .8)',
                            top: 0,
                            left: 0,
                            zIndex: 0
                        }
                    };
                }

                if (!this.props.show) {
                    return false;
                }

                return _react2.default.createElement(
                    'div',
                    {
                        className: wrapper,
                        style: Object.assign({}, modalizStyle.wrapper, this.state.fadeIn)
                    },
                    _react2.default.createElement(
                        'div',
                        {
                            className: container,
                            style: modalizStyle.container
                        },
                        _react2.default.createElement(
                            'div',
                            {
                                className: close,
                                style: modalizStyle.close,
                                onClick: this.props.onClose
                            },
                            '\xD7'
                        ),
                        this.props.children
                    ),
                    _react2.default.createElement('div', {
                        className: overlay,
                        style: modalizStyle.overlay,
                        onClick: this.props.onClose
                    })
                );
            }
        }]);

        return Modaliz;
    }(_react.Component);

    Modaliz.propTypes = propTypes;
    Modaliz.defaultProps = defaultProps;

    exports.default = Modaliz;
});