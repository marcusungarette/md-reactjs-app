import styled, { css } from 'styled-components'

export const Aside = styled.aside`
  background: ${({ theme }) => theme.colors.black};
  min-width: 332px;
  max-width: 332px;
  padding: 32px;
`
export const LogoWrapper = styled.div`
  margin: 0;
  text-align: center;
`
export const Img = styled.img`
  display: inline-block;
`
export const LogoLink = styled.a`
  display: block;
`

export const H2 = styled.h2`${({ theme }) => css`
  color: ${theme.colors.white};
  font-size: 1.6rem;
  position: relative;
  padding-left: 20px;
  margin: 40px 0 32px;
  span {
    background-color: ${theme.colors.black};
    display: inline-block;
    position: relative;
    padding: 0 10px;
    z-index: 1;
  }
  &::before {
    background: ${theme.colors.primary};
    border-radius: 2px;
    content: '';
    display: block;
    height: 2px;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    z-index: 0;
  }
`}`

const DefaultButton = styled.button`
  cursor: pointer;
`

export const Button = styled(DefaultButton)`${({ theme }) => css`
  align-items: center;
  background: ${theme.colors.primary};
  border: 0;
  border-radius: 4px;
  color: ${theme.colors.lightBlack};
  display: flex;
  font-size: 1.4rem;
  justify-content: center;
  margin-bottom: 32px;
  padding: 8px 0;
  transition: background 0.15s ease-in-out;
  width: 100%;
  & svg {
    margin-right: 12px;
  }
  &:hover {
    background: ${theme.colors.primaryDark};
  }
`}`
