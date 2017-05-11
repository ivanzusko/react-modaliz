/**
 * Modaliz
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    className:          PropTypes.string,
    conditionalRender:  PropTypes.bool,
    discardDefaults:    PropTypes.bool,
    show:               PropTypes.bool,
    simple:             PropTypes.bool,
    speed:              PropTypes.number,
    text:               PropTypes.string,
    title:              PropTypes.string,
    onClose:            PropTypes.func.isRequired,
}

const defaultProps = {
    conditionalRender:  false,
    discardDefaults:    false,
    show:               false,
    simple:             false,
    speed:              100,
    text:               '',
    title:              '',
}

class Modaliz extends Component {
    constructor () {
        super();

        this.state = {
            fadeIn: {}
        }
    }

    componentDidMount () {
        if (this.props.conditionalRender) {
            setTimeout(() => {
                this.setState({
                    fadeIn: {
                        opacity:    1,
                        transition: `${this.props.speed}ms`,
                    }
                });
            }, 1);
        }
    }

    componentWillReceiveProps (nextProps) {
        if (!this.props.conditionalRender) {
            if (nextProps.show) {
                setTimeout(() => {
                    this.setState({
                        fadeIn: {
                            opacity:    1,
                            transition: `${this.props.speed}ms`,
                        }
                    });
                }, 1);
            }
            else {
                this.setState({ fadeIn: {} });
            }
        }
    }

    render () {
        const wrapper = this.props.className ? `modaliz-wrapper ${this.props.className}-wrapper` : 'modaliz-wrapper';
        const container = this.props.className ? `modaliz-container ${this.props.className}-container` : 'modaliz-container';
        const close = this.props.className ? `modaliz-close ${this.props.className}-close` : 'modaliz-close';
        const overlay = this.props.className ? `modaliz-overlay ${this.props.className}-overlay` : 'modaliz-overlay';
        let modalizStyle = {};

        if (!this.props.discardDefaults) {
            modalizStyle = {
                wrapper: {
                    position:   'fixed',
                    width:      '100vw',
                    height:     '100vh',
                    zIndex:     1000,
                    top:        0,
                    left:       0,
                    opacity:    0,
                },
                container: {
                    position:           'absolute',
                    maxWidth:           '500px',
                    minHeight:          '100px',
                    width:              '90vw',
                    backgroundColor:    '#ffffff',
                    top:                '50%',
                    left:               '50%',
                    transform:          'translate(-50%, -50%)',
                    padding:            '10px 20px',
                    zIndex:             1,
                },
                close: {
                    position:       'absolute',
                    width:          '1.5rem',
                    height:         '1.5rem',
                    top:            '.5rem',
                    right:          '.5rem',
                    fontSize:       '30px',
                    display:        'flex',
                    alignItems:     'center',
                    justifyContent: 'center',
                    cursor:         'pointer',
                    zIndex:         1,
                },
                overlay: {
                    position:           'absolute',
                    width:              '100%',
                    height:             '100%',
                    backgroundColor:    'rgba(0, 0, 0, .8)',
                    top:                0,
                    left:               0,
                    zIndex:             0,
                },
            };
        }

        if (!this.props.show) {
            return false;
        }

        return (
            <div
                className={wrapper}
                style={Object.assign({}, modalizStyle.wrapper, this.state.fadeIn)}
            >
                <div
                    className={container}
                    style={modalizStyle.container}
                >
                    <div
                        className={close}
                        style={modalizStyle.close}
                        onClick={this.props.onClose}
                    >
                        &times;
                    </div>
                    {
                        this.props.simple &&
                            <h1>{this.props.title}</h1>
                    }
                    {
                        this.props.simple &&
                            <div>
                                <p>{this.props.text}</p>
                            </div>
                    }
                    {
                        !this.props.simple &&
                            this.props.children
                    }
                </div>
                <div
                    className={overlay}
                    style={modalizStyle.overlay}
                    onClick={this.props.onClose}
                >
                </div>
            </div>
        );
    }
}

Modaliz.propTypes = propTypes;
Modaliz.defaultProps = defaultProps;

export default Modaliz;
