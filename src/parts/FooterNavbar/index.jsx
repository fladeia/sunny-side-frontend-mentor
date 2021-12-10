import * as C from './styles'
// import logo from '../../images/logo.svg'
import {ReactComponent as Logo} from '../../images/logo.svg'
import { SocialIcons } from '../SocialIcons'

export const FooterNavbar = () => {
  return (
    <C.Nav>
      {/* <C.Logo src={logo} alt="Logo"></C.Logo> */}
      <Logo fill={"hsl(167, 40%, 24%)"} />
      <C.Menu>
        <ul>
          <li>Sobre</li>
          <li>Serviços</li>
          <li>Projetos</li>
        </ul>
      </C.Menu>
      <SocialIcons />
    </C.Nav>
  )
}