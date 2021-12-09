import * as C from './styles'
import logo from '../../images/logo.svg'
import { HamburgerItem } from '../HamburgerItem'
import { ContactButton } from '../ContactButton'

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
        <ContactButton /> 
      </C.Menu>
      <HamburgerItem />
    </C.Nav>
  )
}