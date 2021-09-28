import React, { useEffect, useState } from 'react'
import { useGithub } from '../../hooks/github'
import { Button, Filter, Card, Message } from '../'
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
      <S.Header>
        <S.Tabs>
          <Button
            active={currentTab === 'repositories'}
            onClick={() => changeTab('repositories')}
          >
            Repositórios ({data.repositories.length})
          </Button>
          <Button
            active={currentTab === 'starred'}
            onClick={() => changeTab('starred')}
          >
            Com estrela ({data.starred.length})
          </Button>
        </S.Tabs>

        <Filter setList={setRepositories} originalList={data[currentTab]} />
      </S.Header>
      {repositories.length > 0 ? (
        <S.Grid>
          {repositories.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              link={item.html_url}
              language={item.language}
              homepage={item.homepage}
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
