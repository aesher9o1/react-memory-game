import React from 'react'
import styled, { withTheme } from 'styled-components'


const Card = styled.div`
background-color: dodgerblue;
color: white;
padding: 1rem;
height: 4rem;

`


function Cards() {
    return (
        <div class="cards-wrapper">
  <Card>1</Card>
  <Card>2</Card>
  <Card>3</Card>
  <Card>4</Card>
  <Card>5</Card>
  <Card>6</Card>
  <Card>7</Card>
  <Card>8</Card>
  <Card>9</Card>
</div>
        )
}

export default withTheme(Cards)