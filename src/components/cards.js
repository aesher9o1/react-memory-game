import React from 'react'
import styled, { withTheme } from 'styled-components'


const Card = styled.div`
    background-color: dodgerblue;
    color: white;
    padding: 1rem;
    height: 4rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

`


function Cards() {
    return (
        <div class="cards-wrapper">
  <div className="grid-item">1</div>
  <div className="grid-item">2</div>
  <div className="grid-item">3</div>
  <div className="grid-item">4</div>
  <div className="grid-item">5</div>
  <div className="grid-item">6</div>
  <div className="grid-item">7</div>
  <div className="grid-item">8</div>
  <div className="grid-item">9</div>
</div>
        )
}

export default withTheme(Cards)