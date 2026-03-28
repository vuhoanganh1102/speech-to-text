import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  to { transform: rotate(360deg); }
`

const SpinnerWrapper = styled.div`
  width: ${({ $size }) => $size || '24px'};
  height: ${({ $size }) => $size || '24px'};
  border: 3px solid ${({ theme }) => theme.colors.border};
  border-top-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;
`

export default function Spinner({ size }) {
  return <SpinnerWrapper $size={size} />
}
