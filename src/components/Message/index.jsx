import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export function Message({ children }) {
  return (
    <Wrapper>
      <h1>{children}</h1>
    </Wrapper>
  )
}
