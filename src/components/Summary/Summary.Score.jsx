import React from 'react'
import styled from 'styled-components'
import { CircularProgress } from '@material-ui/core'
import { tokens } from '../../data/tokens'


const Wrapper = styled.div`
    position: relative;
`

const BackgroundCircle = styled(CircularProgress)`
    position: absolute;
    z-index: -1;
    opacity: 0.25;
`
const FloatingNumber = styled.div`
    position: absolute;
    z-index: 1;
    left: 0;
    top: 1.3rem;
    width: 100%;
    text-align: center;
    color: ${tokens.shade.blue.solid};
    font-size: ${tokens.text.l.size};
    letter-spacing: ${tokens.text.l.spacing};
    font-weight: ${tokens.text.l.weight};
`

export const Score = (props) => {
    const { value } = props;
    return (
        <Wrapper>
            <BackgroundCircle value={100} variant="static" size={60} thickness={5}/>
        <CircularProgress size={60} value={value} thickness={5} variant="static" />
        <FloatingNumber>{value}</FloatingNumber>
        </Wrapper>

    )
}
export default Score;