import React, { useState, useEffect, useRef } from 'react'
import { withTheme } from 'styled-components';
import styled from 'styled-components'

const FloatingLayout = styled.div`
background : ${props => props.theme.colorSeconday};
box-shadow : ${props => props.theme.primaryBoxShadow};
display: block;
position: absolute;
width:380px!important;
margin:auto;
left:0;
right:0;
text-align:centre;
border-radius:${props => props.theme.radius};
padding: ${props => props.theme.padding};
margin-top: 2em
`

function Controls() {
    const [seconds, setSeconds] = useState(0);


    const padZeros = (i) => {
        return (i < 10) ? `0 ${i}` : i
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);



    return (<FloatingLayout>
        <ul>
            <li>
                ⛔️
               </li>
            <li>
                {seconds}
            </li>
            <li>
                ➕
               </li>
        </ul>
    </FloatingLayout>)
}

export default withTheme(Controls)