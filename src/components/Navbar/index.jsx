import * as C from './styles'
import Logo from '../../images/logo.svg'

export const Navbar = () => {
  return (
    <C.Container>
      <img src={Logo}></img>
      <C.NavOptions>
        <C.Ul>
          <C.Li>About</C.Li>
          <C.Li>Services</C.Li>
          <C.Li>Projects</C.Li>
        </C.Ul>
        <C.Button>Contact</C.Button>
      </C.NavOptions>
    </C.Container>
  )
}