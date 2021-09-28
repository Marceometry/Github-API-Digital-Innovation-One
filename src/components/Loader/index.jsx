import styled, { keyframes } from 'styled-components'

const LoadingAnimation = keyframes`
  0% {
    opacity: 0.6;
  },
  100% {
    opacity: 0.2;
  }
`

const SkeletonLoader = styled.div`
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '18px'};
  border-radius: ${({ borderRadius }) => borderRadius || '3px'};
  animation: ${LoadingAnimation} 1s linear infinite both alternate;
  background-color: #aaa;
`

export function Loader(props) {
  return <SkeletonLoader {...props} />
}
