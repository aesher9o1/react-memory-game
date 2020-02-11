import React, {useState, useEffect} from 'react'
import Contols from './components/controls'
import theme from './utils/theme'
import { ThemeProvider } from 'styled-components';
/**
 * Wrappers classes for this component is defined in style.css
 */

function App() {
  const [emojiCount, setEmojiCount] = useState(2)
  return (
    <ThemeProvider theme={theme}>
       <div className= "wrapper">
          <div className= "controls-wrapper">
            <Contols setEmojiCount={setEmojiCount}/>
           </div>asd
         <div className="cards-wrapper">

         </div>
       </div>
   </ThemeProvider>
  )
}

export default App;
