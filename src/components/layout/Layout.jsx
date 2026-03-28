import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'

const Main = styled.main`
  min-height: calc(100vh - 140px);
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
