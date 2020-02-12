import React from 'react'
import styled, { withTheme } from 'styled-components'

const SnackbarBody = styled.div`
  min-width: 250px;
  visibility: hidden;
  margin-left: -125px;
  color: #fff;
  text-align: center;
  background : ${props => props.theme.colorSeconday};
  box-shadow : ${props => props.theme.primaryBoxShadow};
  border-radius:${props => props.theme.radius};
  padding: ${props => props.theme.padding};
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  font-size: 1rem;
`

function Snackbar(props) {
    return (
        <SnackbarBody className={props.isActive ? "show" : ""}>
            {props.message}
        </SnackbarBody>
    )
}

export default withTheme(Snackbar)