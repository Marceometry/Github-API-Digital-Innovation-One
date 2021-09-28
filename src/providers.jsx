import React from 'react'
import App from './App'
import GithubProvider from './contexts/GithubContext'

const Providers = () => {
  return (
    <GithubProvider>
      <App />
    </GithubProvider>
  )
}

export default Providers
