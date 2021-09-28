import React, { useEffect, useState } from 'react'
import * as S from './styles'

export const Card = ({ name, link, description, language, homepage }) => {
  const [homepageUrl, setHomepageUrl] = useState('')

  useEffect(() => {
    if (homepage && !homepage.includes('http')) {
      setHomepageUrl(`https://${homepage}`)
    } else {
      setHomepageUrl(homepage)
    }
  }, [])

  return (
    <S.Wrapper>
      <div>
        <a href={link} target='_blank' rel='noreferrer'>
          <h3>{name}</h3>
        </a>
        <p>{description ? description : 'Sem descrição'}</p>
      </div>
      <S.Footer>
        <span>{language}</span>
        <a href={homepageUrl} target='_blank' rel='noreferrer'>
          {homepageUrl}
        </a>
      </S.Footer>
    </S.Wrapper>
  )
}
