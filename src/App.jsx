import React from 'react'
import { Header, Profile, Repositories, Message } from './components'
import { ProfileSkeleton, RepositoriesSkeleton } from './components/skeletons'
import { useGithub } from './hooks/github'
import { Container } from './styles/GlobalStyles'

function App() {
  const { data } = useGithub()

  return (
    <Container>
      <Header />
      {data.hasError ? (
        <Message>Houve algum problema</Message>
      ) : (
        <>
          {data.isLoadingUser ? (
            <ProfileSkeleton />
          ) : data.hasUser ? (
            <Profile />
          ) : (
            <Message>Pesquise por um usuário</Message>
          )}

          {data.isLoadingRepos || data.isLoadingStarred ? (
            <RepositoriesSkeleton />
          ) : data.hasUser ? (
            <Repositories />
          ) : (
            ''
          )}
        </>
      )}
    </Container>
  )
}

export default App
