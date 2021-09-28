import React from 'react'
import * as S from './styles'

export const Card = ({ name, link, fullName, description }) => {
  return (
    <S.Wrapper>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <a href={link} target='_blank' rel='noreferrer'>
        {fullName}
      </a>
    </S.Wrapper>
  )
}
