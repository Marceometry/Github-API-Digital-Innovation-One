import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  gap: 32px;
`

export const Avatar = styled.img`
  width: 220px;
  height: 220px;
  border: 1px solid #eee;
  border-radius: 24px;
  display: ${({ display }) => display};
`

export const UserInfo = styled.div`
  height: 220px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  h1 {
    font-size: 32px;
    margin-bottom: 16px;
  }

  h4 {
    margin-top: 6px;
  }
`

export const UserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  gap: 8px;
`

export const StatusCount = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`
