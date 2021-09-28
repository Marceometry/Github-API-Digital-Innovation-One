import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: #eee;
    background-color: #333;
    font: 400 16px 'Arial', sans-serif;
  }
`
