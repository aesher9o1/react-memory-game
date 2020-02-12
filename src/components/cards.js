import React, { useState, useEffect } from 'react'
import styled, { withTheme } from 'styled-components'
import { EmojiRepository, SHUFFLE_ARRAY } from '../utils/repository'


const Card = styled.div`
background : ${props => props.theme.colorSeconday};
box-shadow : ${props => props.theme.primaryBoxShadow};
border-radius:${props => props.theme.radius};
padding: ${props => props.theme.padding};
color: white;
padding: 1rem;
height: 4rem;
cursor: pointer;
`


function Cards(props) {
    const [cards, setCards] = useState([])


    useEffect(() => {
        const temp = []
        for (var i = 0; i < props.emojiCount; i++) {
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
    }, [props.emojiCount])


    const makeCard = () => {
        const temp = []
        for (var i = 0; i < cards.length; i++) {
            temp.push(
                <Card key={i}>{cards[i].emoji}</Card>
            )
        }
        return temp
    }

    return (
        <div className="cards-wrapper">
            {makeCard()}
        </div>
    )
}

export default withTheme(Cards)