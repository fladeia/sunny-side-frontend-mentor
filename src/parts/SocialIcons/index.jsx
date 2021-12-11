import * as C from './styles'
import { ReactComponent as Facebook} from '../../images/icon-facebook.svg'
import { ReactComponent as Instagram } from '../../images/icon-instagram.svg'
import { ReactComponent as Pinterest } from '../../images/icon-pinterest.svg'
import { ReactComponent as Twitter } from '../../images/icon-twitter.svg'

export const SocialIcons = () => {
  return (
    <C.Socials>
    <ul>
      <li><a href="https://facebook.com" target="_blank" ><C.IconWrapper><Facebook /></C.IconWrapper></a></li>
      <li><a href="https://instagram.com" target="_blank" ><C.IconWrapper><Instagram /></C.IconWrapper></a></li>
      <li><a href="https://twitter.com" target="_blank" ><C.IconWrapper><Twitter /></C.IconWrapper></a></li>
      <li><a href="https://pinterest.com" target="_blank" ><C.IconWrapper><Pinterest /></C.IconWrapper></a></li>
    </ul>
    </C.Socials>
  )
}
