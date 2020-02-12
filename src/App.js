import React, {useState, useEffect} from 'react'
import Contols from './components/controls'
import theme from './utils/theme'
import { ThemeProvider } from 'styled-components';
import Cards from './components/cards';
/**
 * Wrappers classes for this component is defined in style.css
 */

function App() {
  const [emojiCount, setEmojiCount] = useState(2)

  const increaseEmoji=()=>{
    setEmojiCount(emojiCount+1)
  }
  const subtractEmoji=()=>{
    setEmojiCount(emojiCount-1)
  }

  return (
    <ThemeProvider theme={theme}>
          <div className= "controls-wrapper">
            <Contols increaseEmoji={increaseEmoji} subtractEmoji={subtractEmoji}/>
           </div>
          <Cards emojiCount = {emojiCount}/>
   </ThemeProvider>
  )
}

export default App;
