import styled, { css } from 'styled-components'

function App () {
  return (
    <Title>App</Title>
  )
}

const Title = styled.h1` ${({ theme }) => css`
  background: ${theme.colors.gray};
  color: ${theme.colors.primary};
`}`

export { App }
