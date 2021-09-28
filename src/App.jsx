import React, { useEffect } from 'react'
import { Header, Profile, Repositories } from './components'
import { useGithub } from './hooks/github'
import { Container } from './styles/GlobalStyles'

function App() {
  const { data, getUser, getUserRepos, getUserStarred } = useGithub()

  useEffect(() => {
    getUser('marceometry')
    getUserRepos('marceometry')
    getUserStarred('marceometry')
  }, [])

  return (
    <Container>
      <Header />
      {data.isLoadingUser ? <h1>Carregando...</h1> : <Profile />}
      {data.isLoadingRepos || data.isLoadingStarred ? (
        <h1>Carregando...</h1>
      ) : (
        <Repositories />
      )}
    </Container>
  )
}

export default App
