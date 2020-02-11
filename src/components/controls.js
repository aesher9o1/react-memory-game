import React,{useState, useEffect} from 'react'
import { withTheme } from 'styled-components';
import styled from 'styled-components'

function Controls (){
    const [timeElapsed, setTimeElapsed] = useState(0)
    const FloatingLayout = styled.div`
        background : ${props=>props.theme.colorSeconday};
        box-shadow : ${props=>props.theme.primaryBoxShadow};
        display: block;
        position: absolute;
        width:380px!important;
        margin:auto;
        left:0;
        right:0;
        text-align:centre;
        border-radius:${props=>props.theme.radius};
        padding: ${props=>props.theme.padding};
        margin-top: 2em
    ` 


    useEffect(()=>{

    },[])


    return (<FloatingLayout>
           <ul>
               <li>
                    ⛔️
               </li>
               <li>
                   Timer
               </li>
               <li>
               ➕
               </li>
           </ul>
    </FloatingLayout>)
}

export default withTheme(Controls)