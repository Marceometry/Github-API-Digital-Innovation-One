import React from 'react'
import { useGithub } from '../../hooks/github'
import * as S from './styles'

export function Profile() {
  const { data } = useGithub()
  const { user } = data

  return (
    <S.Wrapper>
      <S.Avatar src={user.avatar} alt='User Avatar' />
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
            <h4>Seguidores</h4>
            <span>{user.followers}</span>
          </div>
          <div>
            <h4>Seguindo</h4>
            <span>{user.following}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span>{user.public_gists}</span>
          </div>
          <div>
            <h4>Repos</h4>
            <span>{user.public_repos}</span>
          </div>
        </S.StatusCount>
      </S.UserInfo>
    </S.Wrapper>
  )
}
