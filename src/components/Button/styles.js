import styled from 'styled-components'

export const StyledButton = styled.button`
  padding: 12px 32px;
  font-size: 14px;
  border-radius: 8px;
  color: ${({ primary }) => (primary ? '#222' : 'inherit')};
  background-color: ${({ active }) => (active ? '#222' : '#2e2e2e')};
  background-color: ${({ primary }) => primary && '#eee'};
  border: 1px solid #111;
  cursor: pointer;
  transition: all 0.2s;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    filter: brightness(0.8);
  }
`
