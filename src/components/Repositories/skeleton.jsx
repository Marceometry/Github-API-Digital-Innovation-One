import { Button } from '../Button'
import { CardSkeleton } from '../skeletons'
import * as S from './styles'

export function RepositoriesSkeleton() {
  return (
    <S.Wrapper>
      <S.Tabs>
        <Button disabled active>
          Repositórios
        </Button>
        <Button disabled>Com estrela</Button>
      </S.Tabs>
      <S.Grid>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </S.Grid>
    </S.Wrapper>
  )
}
