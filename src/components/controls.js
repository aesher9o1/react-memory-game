import React, { useState, useEffect, useRef } from 'react'
import styled, {withTheme} from 'styled-components'

const FloatingLayout = styled.div`
background : ${props => props.theme.colorSeconday};
box-shadow : ${props => props.theme.primaryBoxShadow};
display: block;
position: absolute;
width:260px!important;
margin:auto;
left:0;
right:0;
text-align:centre;
border-radius:${props => props.theme.radius};
padding: ${props => props.theme.padding};
margin-top: 2em
`

const EmojiButton = styled.button`
  margin: 0!important;
  padding:0.1em;
  background: transparent;
  border:none;
  font-size: 1.6rem;
  color: white;
  font-family: 'Merriweather Sans', sans-serif;
  font-weight: 900;
  cursor: pointer;
  -webkit-appearance: button;
  outline:none !important
`

function Controls(props) {
    const [seconds, setSeconds] = useState(0);


    const padZeros = (i) => {
        return (i < 10) ? `0${i}` : i
    }

    const getMinuteString= (seconds)=>{
        const m = padZeros(Math.floor(seconds / 60))
        const s = padZeros(seconds %60)

        return m + ":"+s
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleEmojiDecrease = ()=>{
        setSeconds(0)
        props.setEmojiCount(emoji=>emoji-1)
    }
    const handleEmojiIncrease = ()=>{
        setSeconds(0)
        props.setEmojiCount(emoji=>emoji+1)
    }

    return (<FloatingLayout>
        <ul>
            <li>
                <EmojiButton onClick={handleEmojiDecrease}>⛔️</EmojiButton>
               </li>
            <li style={{width:"140px"}}>
            &nbsp;&nbsp;&nbsp;{getMinuteString(seconds)}&nbsp;&nbsp;&nbsp;
            </li>
            <li>
                <EmojiButton onClick={handleEmojiIncrease}>➕</EmojiButton>
               </li>
        </ul>
    </FloatingLayout>)
}

export default withTheme(Controls)