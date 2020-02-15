import React, { useState, useEffect } from 'react'
import styled, { withTheme } from 'styled-components'
import PropTypes from 'prop-types'
import { EmojiRepository, SHUFFLE_ARRAY, MESSAGE_SAME_CARD, POSITIVE_REINFORCEMENTS, NEGATIVE_REINFORCEMENTS } from '../utils/repository'

const Card = styled.div`
  background: ${(props) => props.theme.colorSeconday};
  box-shadow: ${(props) => props.theme.primaryBoxShadow};
  border-radius: ${(props) => props.theme.radius};
  padding: ${(props) => props.theme.padding};
  color: white;
  padding: 1rem;
  height: 4rem;
  text-align: center;
  cursor: pointer;
  transform : scale(1);
  user-select: none;
  transition: all 0.3s;

  &:active {
    transform: scale(0.95);
    transition: transform 0.3s;
  }

  &.selected{
    box-shadow: none!important;
    background:#47cf73;
    transform: scale(0.95);
  }
`
const Emoji = styled.span`
  font-size: 2rem;
`


function Cards(props) {
  const [cards, setCards] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [firstSelectedItem, setFirstSelectedItem] = useState(null)
  const { emojiCount } = props

  useEffect(() => {
    const temp = []
    for (let i = 0; i < emojiCount; i++) {
      temp.push({
        emoji: EmojiRepository[i],
        isActive: false,
        canBeClicked: true
      })
      temp.push({
        emoji: EmojiRepository[i],
        isActive: false,
        canBeClicked: true
      })
    }
    setCards(SHUFFLE_ARRAY(temp))
  }, [emojiCount])


  const handleCardClick = (index) => {
    const cardsCopy = [...cards];

    if (firstSelectedItem === index || !cards[index].canBeClicked) {
      // card that was revealed was clicked
      cardsCopy[firstSelectedItem] = { ...cardsCopy[firstSelectedItem], isActive: false }
      setCards(cardsCopy)
      setFirstSelectedItem(null)

      props.showSnackbar(MESSAGE_SAME_CARD)

    } else if (firstSelectedItem) {
      if (cards[firstSelectedItem].emoji === cards[index].emoji) {
        // right answer select current and first item to unclickable
        cardsCopy[firstSelectedItem] = { ...cardsCopy[firstSelectedItem], isActive: true, canBeClicked: false }
        cardsCopy[index] = { ...cardsCopy[index], isActive: true, canBeClicked: false }
        setCards(cardsCopy)

        props.showSnackbar(POSITIVE_REINFORCEMENTS[Math.floor((Math.random() * POSITIVE_REINFORCEMENTS.length))])
      } else {
        // wrong answer disable both
        cardsCopy[firstSelectedItem] = { ...cardsCopy[firstSelectedItem], isActive: false }
        setCards(cardsCopy)

        props.showSnackbar(NEGATIVE_REINFORCEMENTS[Math.floor((Math.random() * NEGATIVE_REINFORCEMENTS.length))])
      }

      setFirstSelectedItem(null)
    } else {
      // set first selected card
      cardsCopy[index] = { ...cardsCopy[index], isActive: true };
      setCards(cardsCopy);

      setFirstSelectedItem(index)
    }


  }

  const makeCard = () => {
    const temp = []
    for (let i = 0; i < cards.length; i++) {
      temp.push(
        <Card
          className={(cards[i].isActive || !cards[i].canBeClicked) ? "selected" : ""}
          key={i}
          onClick={() => {
            handleCardClick(i)
          }}>
          {(cards[i].isActive || !cards[i].canBeClicked) ? <Emoji role="img">{cards[i].emoji}</Emoji> : <div />}
        </Card>
      )
    }
    return temp
  }

  return <div className="cards-wrapper">{makeCard()}</div>
}

Cards.propTypes = {
  emojiCount: PropTypes.number,
  showSnackbar: PropTypes.func
}

Cards.defaultProps = {
  emojiCount: 4,
  showSnackbar: null
}

export default withTheme(Cards)
