import React from 'react'
import App from './App'
import GithubProvider from './contexts/GithubContext'
import { GlobalStyles } from './styles/GlobalStyles'

const Providers = () => {
  return (
    <GithubProvider>
      <App />
      <GlobalStyles />
    </GithubProvider>
  )
}

export default Providers
