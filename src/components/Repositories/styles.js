import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const Tabs = styled.div`
  display: flex;
  gap: 16px;
`

export const Button = styled.button`
  padding: 12px 32px;
  font-size: 14px;
  color: inherit;
  border-radius: 8px;
  background-color: ${({ active }) => (active ? '#222' : 'transparent')};
  border: 1px solid #eee;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`

export const Grid = styled.div`
  gap: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
`
