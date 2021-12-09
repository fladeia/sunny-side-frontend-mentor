import * as C from './styles'
import { Navbar } from '../../parts/Navbar'
import facebook from '../../images/icon-facebook.svg'
import instagram from '../../images/icon-instagram.svg'
import pinterest from '../../images/icon-pinterest.svg'
import twitter from '../../images/icon-twitter.svg'

export const Footer = () => {
  return (
    <C.Container>
      <Navbar></Navbar>
      <C.Socials>
        <ul>
          <li><img src={facebook} alt="facebook"></img></li>
          <li><img src={instagram} alt="instagram"></img></li>
          <li><img src={pinterest} alt="pinterest"></img></li>
          <li><img src={twitter} alt="twitter"></img></li>
        </ul>
      </C.Socials>
    </C.Container>
  )
}