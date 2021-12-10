import * as C from './styles'
import {ReactComponent as Logo} from '../../images/logo.svg'
import { HamburgerItem } from '../HamburgerItem'
import { ContactButton } from '../ContactButton'

export const Navbar = () => {
  return (
    <C.Nav>
      <Logo fill={"hsl(0, 0%, 100%)"} />
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