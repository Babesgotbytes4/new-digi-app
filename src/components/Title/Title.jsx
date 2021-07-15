import React from 'react';
import styled from 'styled-components';
import { tokens } from '../../data/tokens';
import { Typography } from '@material-ui/core';

const StyledTypography = styled(Typography)`
font-size:${({ size }) => tokens.text[size].size};    
letter-spacing:${({ size }) => tokens.text[size].spacing}; 
line-height:${({ size }) => tokens.text[size].height}; 

font-weight:${({ size }) => tokens.text[size].weight}; 
color: ${({ inverse }) => inverse ? tokens.highlight.white.solid : tokens.shade.black.stronger};
`
/**
 * @typedef {object} props
 * @property {JSX.Element} children
 * @property {'l' | 'xl'} size
 * @property {boolean} inverse
 * @property {1 | 2 | 3 | 4 | 5 | 6} level
 */

export const Title = (props) => {
    const { children, inverse = false, size = 'xl', level = null } = props;

    if (!level) throw new Error('Please add a title level')

    return <StyledTypography component={`h${level}`} inverse={inverse} size={size}>{children}</StyledTypography>
}

export default Title