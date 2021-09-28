import styled, { createGlobalStyle } from 'styled-components'

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
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const Container = styled.div`
  height: 100vh;
  padding: 32px;
  overflow-y: scroll;
`
