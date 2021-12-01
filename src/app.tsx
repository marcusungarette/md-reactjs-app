import styled from 'styled-components'
import { Sidebar } from './sidebar/sidebar'

export function App () {
  return (
    <Main>
      <Sidebar />
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  height: 100vh;
`
