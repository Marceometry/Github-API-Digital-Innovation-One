import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 32px;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`

export const Tabs = styled.div`
  display: flex;
  gap: 16px;
`

export const Grid = styled.div`
  gap: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
`
