import React, { useEffect, useState } from 'react'
import { useGithub } from '../../hooks/github'
import { Card } from '../'
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
        <S.Button
          active={currentTab === 'repositories'}
          onClick={() => changeTab('repositories')}
        >
          Repositórios
        </S.Button>
        <S.Button
          active={currentTab === 'starred'}
          onClick={() => changeTab('starred')}
        >
          Com estrela
        </S.Button>
      </S.Tabs>
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
    </S.Wrapper>
  )
}
