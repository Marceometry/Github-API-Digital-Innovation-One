import { Loader } from '../'
import * as S from './styles'

export function CardSkeleton() {
  return (
    <S.Wrapper>
      <div>
        <Loader width='70%' />

        <Loader width='100%' margin='20px 0 6px' />
        <Loader width='40%' />
      </div>

      <Loader width='60%' margin='24px 0 0' />
    </S.Wrapper>
  )
}
