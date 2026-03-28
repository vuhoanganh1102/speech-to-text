import styled from 'styled-components'

const FooterWrapper = styled.footer`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

export default function Footer() {
  return (
    <FooterWrapper>
      <p>SpeechApp &copy; {new Date().getFullYear()}</p>
    </FooterWrapper>
  )
}
