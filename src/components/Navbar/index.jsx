import * as C from './styles'
import logo from '../../images/logo.svg'
import IconHamburger from '../../images/icon-hamburger.svg'

export const Navbar = () => {
  return (
    <C.Container>
      <C.Logo src={logo} alt="Logo"></C.Logo>
      <C.UnorderList>
        <C.ListItem>Sobre</C.ListItem>
        <C.ListItem>Serviços</C.ListItem>
        <C.ListItem>Projetos</C.ListItem>
      </C.UnorderList>
      <C.Button>Contato</C.Button>
      <C.IconHamburger src={IconHamburger} alt="Hamburger icon"></C.IconHamburger>
    </C.Container>
  )
}