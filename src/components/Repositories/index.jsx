import React, { useEffect, useState } from 'react'
import { useGithub } from '../../hooks/github'
import { Button, Card, Message } from '../'
import * as S from './styles'

export function Repositories() {
  const [currentTab, setCurrentTab] = useState('repositories')
  const [repositories, setRepositories] = useState([])
  const { data } = useGithub()

  useEffect(() => {
    setRepositories(data[currentTab])
  }, [data])

  function changeTab(tab) {
    setCurrentTab(tab)
    setRepositories(data[tab])
  }

  return (
    <S.Wrapper>
      <S.Tabs>
        <Button
          active={currentTab === 'repositories'}
          onClick={() => changeTab('repositories')}
        >
          Repositórios
        </Button>
        <Button
          active={currentTab === 'starred'}
          onClick={() => changeTab('starred')}
        >
          Com estrela
        </Button>
      </S.Tabs>
      {repositories.length > 0 ? (
        <S.Grid>
          {repositories.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              link={item.html_url}
              fullName={item.full_name}
              description={item.description}
            />
          ))}
        </S.Grid>
      ) : (
        <Message>Não há nada aqui</Message>
      )}
    </S.Wrapper>
  )
}
