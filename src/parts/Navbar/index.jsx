import * as C from './styles'
import {ReactComponent as Logo} from '../../images/logo.svg'
import { HamburgerItem } from '../HamburgerItem'
import { ContactButton } from '../ContactButton'
import { useState } from 'react'

export const Navbar = () => {

  let [test, setTest] = useState(true)
  
  function handleClick () {
    if(test === true) {
      setTest(false)
    } else {
      setTest(true)
    }
    console.log(test);
  }


  return (
    <C.Nav>
      <C.LogoWrapper><Logo /></C.LogoWrapper>
      <C.Menu test={test}>
        <ul>
          <li>Sobre</li>
          <li>Serviços</li>
          <li>Projetos</li>
        </ul>
        <ContactButton /> 
      </C.Menu>
      <HamburgerItem onClickTest={handleClick} />
    </C.Nav>
  )
}