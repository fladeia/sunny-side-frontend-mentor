import * as C from './styles'
import IconHamburger from '../../images/icon-hamburger.svg'

export const HamburgerItem = ({onClickTest}) => {

  return (<C.IconHamburger src={IconHamburger} onClick={onClickTest} alt="Hamburger icon"></C.IconHamburger>)
}