import * as C from './styles'
import logo from '../../images/logo.svg'
import IconHamburger from '../../images/icon-hamburger.svg'

export const Navbar = () => {
  return (
    <C.Nav>
      <C.Logo src={logo} alt="Logo"></C.Logo>
      <C.Menu>
        <ul>
          <li>Sobre</li>
          <li>Serviços</li>
          <li>Projetos</li>
        </ul>
        <C.Button>Contato</C.Button>
      </C.Menu>
      <C.IconHamburger src={IconHamburger} alt="Hamburger icon"></C.IconHamburger>
    </C.Nav>
  )
}