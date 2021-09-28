import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  gap: 24px;
`

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border: 1px solid #eee;
  border-radius: 50%;
`

export const UserInfo = styled.div`
  height: 200px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  h1 {
    font-size: 32px;
    margin-bottom: 16px;
  }

  h4 {
    margin-bottom: 6px;
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
    text-align: center;
  }
`
