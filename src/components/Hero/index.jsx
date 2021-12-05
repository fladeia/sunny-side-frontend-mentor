import * as C from './styles.js'
import { Navbar } from '../Navbar/index.jsx'
import arrowDown from '../../images/icon-arrow-down.svg'

export const Hero = () => {
  return (
    <C.Container>
      <Navbar/>
      <C.Title>
        <C.Text>Somos criativos</C.Text>
        <img src={arrowDown}></img>
      </C.Title>
    </C.Container>
  )
}