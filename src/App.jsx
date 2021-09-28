import React, { useEffect } from 'react'
import { Header, Profile } from './components'
import { useGithub } from './hooks/github'
import { Container } from './styles/GlobalStyles'

function App() {
  const { data, getUser } = useGithub()

  useEffect(() => {
    getUser('marceometry')
  }, [])

  return (
    <Container>
      <Header />
      {data.loading ? <h1>Carregando...</h1> : <Profile />}
    </Container>
  )
}

export default App
