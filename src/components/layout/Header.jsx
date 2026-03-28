import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const Logo = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes['xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
`

const NavLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.textSecondary};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export default function Header() {
  const { pathname } = useLocation()

  return (
    <Nav>
      <Logo to="/">SpeechApp</Logo>
      <NavLinks>
        <NavLink to="/" $active={pathname === '/'}>Trang chu</NavLink>
        <NavLink to="/speech" $active={pathname === '/speech'}>Speech Demo</NavLink>
      </NavLinks>
    </Nav>
  )
}
