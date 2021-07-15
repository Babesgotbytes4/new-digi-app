import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components'
import { tokens } from '../../data/tokens'

const calcColor = ({ inverse, importance }) => {
    if (inverse && importance === 'primary') {
        return tokens.highlight.white.strong;
    }

    if (inverse) {
        return tokens.highlight.white.strong;
    }

    if (importance === 'primary') {
        return tokens.shade.black.stronger;
    }

    return tokens.shade.black.medium;
}

const Base = styled(Typography)`
    font-size: ${({ size }) => tokens.text[size].size};
    letter-spacing: ${({ size }) => tokens.text[size].spacing};
    font-weight: ${({ size }) => tokens.text[size].weight};
    color: ${calcColor};
    `

/**
 * 
 * @typedef {object} props
 * @property {JSX.Element} children
 * @property {'s' | 'm' | 'l'} size
 * @property {boolean} inverse
 * @property {'primary' | 'secondary'} importance
 */

/**
 * @name Text
 * 
 * @description To render a paragraph or line of text meant for reading.
 * 
 * @param {props} props
 */

export const Text = (props) => {
    const { size = 'm', inverse = false, importance = 'primary', children } = props;

    return (
        <Base size={size} inverse={inverse} importance={importance}>
            {children}
        </Base>
    );
};

export default Text