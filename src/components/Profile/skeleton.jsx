import { Loader } from '../'
import * as S from './styles'

export function ProfileSkeleton() {
  return (
    <S.Wrapper>
      <Loader width='220px' height='220px' borderRadius='24px' />

      <S.UserInfo>
        <div>
          <Loader width='300px' height='28px' margin='0 0 16px' />
          <S.UserGeneric>
            <h3>Username:</h3>
            <Loader width='150px' margin='2px 0' />
          </S.UserGeneric>
          <S.UserGeneric>
            <h3>Empresa:</h3>
            <Loader width='150px' margin='2px 0' />
          </S.UserGeneric>
          <S.UserGeneric>
            <h3>Localização:</h3>
            <Loader width='150px' margin='2px 0' />
          </S.UserGeneric>
          <S.UserGeneric>
            <h3>Site:</h3>
            <Loader width='150px' margin='2px 0' />
          </S.UserGeneric>
        </div>

        <S.StatusCount>
          <div>
            <Loader width='20px' margin='2px 0' />
            <h4>Seguidores</h4>
          </div>
          <div>
            <Loader width='20px' margin='2px 0' />
            <h4>Seguindo</h4>
          </div>
          <div>
            <Loader width='20px' margin='2px 0' />
            <h4>Gists</h4>
          </div>
          <div>
            <Loader width='20px' margin='2px 0' />
            <h4>Repos</h4>
          </div>
        </S.StatusCount>
      </S.UserInfo>
    </S.Wrapper>
  )
}
