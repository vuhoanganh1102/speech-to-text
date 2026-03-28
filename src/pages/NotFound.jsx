import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '@components/common/Button'

const Wrapper = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
`

const Code = styled.h1`
  font-size: 6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.5;
`

const Message = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: ${({ theme }) => theme.spacing.md} 0 ${({ theme }) => theme.spacing.xl};
`

export default function NotFound() {
  return (
    <Wrapper>
      <Code>404</Code>
      <Message>Trang khong ton tai</Message>
      <Link to="/">
        <Button>Ve trang chu</Button>
      </Link>
    </Wrapper>
  )
}
