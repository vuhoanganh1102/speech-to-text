import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '@components/common/Button'

const Hero = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  background: linear-gradient(135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

export default function Home() {
  return (
    <Hero>
      <Title>SpeechApp</Title>
      <Subtitle>
        Web Speech API demo — Speech Recognition & Speech Synthesis voi tieng Viet
      </Subtitle>
      <Link to="/speech">
        <Button size="lg">Demo Speech</Button>
      </Link>
    </Hero>
  )
}
