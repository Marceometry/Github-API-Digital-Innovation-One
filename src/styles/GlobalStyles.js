import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    color: #eee;
    background-color: #333;
    font: 400 16px 'Arial', sans-serif;
  }

  h1 {
    font-size: 32px;
  }

  h3 {
    font-size: 18px;
  }

  h4 {
    font-size: 16px;
  }

  a {
    color: #4aaeff;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const Container = styled.div`
  padding: 24px;

  /* > header,
  > div {
    border: 1px solid #eee;
  } */
`
