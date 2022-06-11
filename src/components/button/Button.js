import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

// JavaScript source code
class Button extends React.Component {
    render() {
        function sayHello() {
            console.log("Hello");
        }

        return (
            <button className="button" onClick={this.props.onClick}>
                {this.props.children}
            </button>
        );
    }
}

Button.propTypes = {
    onClick: PropTypes.func
}

export default Button;