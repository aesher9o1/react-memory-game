import React, {useState, useEffect} from 'react'
import Contols from './components/controls'
import theme from './utils/theme'
import { ThemeProvider } from 'styled-components';
/**
 * Wrappers classes for this component is defined in style.css
 */

function App() {
  return (
    <ThemeProvider theme={theme}>
            <Contols/>
   </ThemeProvider>
  )
}

export default App;
