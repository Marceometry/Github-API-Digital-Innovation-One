import React, { useState } from 'react'
import { useGithub } from '../../hooks/github'
import { Loader } from '../'
import * as S from './styles'

export function Profile() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const { data } = useGithub()
  const { user } = data

  return (
    <S.Wrapper>
      <S.Avatar
        src={user.avatar}
        alt='User Avatar'
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageLoaded(true)}
        display={imageLoaded ? 'initial' : 'none'}
      />
      {!imageLoaded && (
        <Loader width='220px' height='220px' borderRadius='24px' />
      )}

      <S.UserInfo>
        <div>
          <h1>{user.name}</h1>

          <S.UserGeneric>
            <h3>Username:</h3>
            <a href={user.html_url} target='_blank' rel='noreferrer'>
              {user.login}
            </a>
          </S.UserGeneric>
          {user.company && (
            <S.UserGeneric>
              <h3>Empresa:</h3>
              <span>{user.company}</span>
            </S.UserGeneric>
          )}
          {user.location && (
            <S.UserGeneric>
              <h3>Localização:</h3>
              <span>{user.location}</span>
            </S.UserGeneric>
          )}
          {user.blog && (
            <S.UserGeneric>
              <h3>Site:</h3>
              <a href={user.blog} target='_blank' rel='noreferrer'>
                {user.blog}
              </a>
            </S.UserGeneric>
          )}
        </div>

        <S.StatusCount>
          <div>
            <span>{user.followers}</span>
            <h4>Seguidores</h4>
          </div>
          <div>
            <span>{user.following}</span>
            <h4>Seguindo</h4>
          </div>
          <div>
            <span>{user.public_gists}</span>
            <h4>Gists</h4>
          </div>
          <div>
            <span>{user.public_repos}</span>
            <h4>Repos</h4>
          </div>
        </S.StatusCount>
      </S.UserInfo>
    </S.Wrapper>
  )
}
