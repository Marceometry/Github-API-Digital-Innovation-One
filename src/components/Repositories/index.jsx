import React from 'react'
import { useGithub } from '../../hooks/github'
import { Card } from '../'
import * as S from './styles'

export function Repositories() {
  const { data } = useGithub()

  return (
    <S.Wrapper>
      <S.Tabs>
        <S.Button active>Repositórios</S.Button>
        <S.Button>Com estrela</S.Button>
      </S.Tabs>
      <S.Grid>
        {data.repositories.map((item) => (
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
