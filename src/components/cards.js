import React, { useState, useEffect } from 'react'
import styled, { withTheme } from 'styled-components'
import PropTypes from 'prop-types'
import { EmojiRepository, SHUFFLE_ARRAY } from '../utils/repository'

const Card = styled.div`
  background: ${(props) => props.theme.colorSeconday};
  box-shadow: ${(props) => props.theme.primaryBoxShadow};
  border-radius: ${(props) => props.theme.radius};
  padding: ${(props) => props.theme.padding};
  color: white;
  padding: 1rem;
  height: 4rem;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s;

  &:active {
    transform: scale(0.95);
    transition: transform 0.3s;
  }
`

function Cards(props) {
  const [cards, setCards] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [activeIndex, setActiveIndex] = useState({
    0: null,
    1: null
  })
  const { emojiCount } = props

  useEffect(() => {
    const temp = []
    for (let i = 0; i < emojiCount; i++) {
      temp.push({
        emoji: EmojiRepository[i],
        isActive: false
      })
      temp.push({
        emoji: EmojiRepository[i],
        isActive: false
      })
    }
    setCards(SHUFFLE_ARRAY(temp))
  }, [emojiCount])

  const makeCard = () => {
    const temp = []
    for (let i = 0; i < cards.length; i++) {
      temp.push(
        <Card
          key={i}
          onClick={(e) => {
            e.target.classList.add('flip')
          }}
        >
          <span role="img">{cards[i].emoji}</span>
        </Card>
      )
    }
    return temp
  }

  return <div className="cards-wrapper">{makeCard()}</div>
}

Cards.propTypes = {
  emojiCount: PropTypes.number
}

Cards.defaultProps = {
  emojiCount: 4
}

export default withTheme(Cards)
