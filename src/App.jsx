import React, { useEffect } from 'react'
import { Header, Profile, Repositories } from './components'
import { useGithub } from './hooks/github'
import { Container } from './styles/GlobalStyles'

function App() {
  const { data, getUser, getUserRepos } = useGithub()

  useEffect(() => {
    getUser('marceometry')
    getUserRepos('marceometry')
  }, [])

  return (
    <Container>
      <Header />
      {data.loading ? (
        <h1>Carregando...</h1>
      ) : (
        <>
          <Profile />
          <Repositories />
        </>
      )}
    </Container>
  )
}

export default App
