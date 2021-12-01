import * as S from './sidebar-styles'
import * as icon from 'ui/icons'
import markeeLogo from './markee-logo.png'

export function Sidebar () {
  return (
    <S.Aside>
      <header>
        <S.LogoWrapper>
          <S.LogoLink href='/'>
            <S.Img src={markeeLogo} alt='Markee.' />
          </S.LogoLink>
        </S.LogoWrapper>
      </header>

      <S.H2>
        <span>Arquivos</span>
      </S.H2>

      <S.Button>
        <icon.PlusDark /> Adicionar arquivo
      </S.Button>

    </S.Aside>
  )
}
