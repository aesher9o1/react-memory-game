import React, { useState, useEffect } from 'react'
import Contols from './components/controls'
import theme from './utils/theme'
import { ThemeProvider } from 'styled-components';
import Cards from './components/cards';
/**
 * Wrappers classes for this component is defined in style.css
 */

function App() {
  const [emojiCount, setEmojiCount] = useState(4)
  return (
    <ThemeProvider theme={theme}>
      <div className="controls-wrapper">
        <Contols setEmojiCount={setEmojiCount} />
      </div>
      <Cards emojiCount={emojiCount} />
    </ThemeProvider>
  )
}

export default App;
