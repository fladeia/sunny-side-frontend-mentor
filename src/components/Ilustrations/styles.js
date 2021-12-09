import styled from 'styled-components'
import coneDesktop from '../../images/desktop/image-gallery-cone.jpg'
import milkbottlesDesktop from '../../images/desktop/image-gallery-milkbottles.jpg'
import orangeDesktop from '../../images/desktop/image-gallery-orange.jpg'
import sugarcubesDesktop from '../../images/desktop/image-gallery-sugarcubes.jpg'
import coneMobile from '../../images/mobile/image-gallery-cone.jpg'
import milkbottlesMobilep from '../../images/mobile/image-gallery-milkbottles.jpg'
import orangeMobile from '../../images/mobile/image-gallery-orange.jpg'
import sugarcubesMobile from '../../images/mobile/image-gallery-sugar-cubes.jpg'

export const Container = styled.div`
  height: 450px;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
`

export const Image3 = styled.div`
  background: url(${coneDesktop}) no-repeat center/cover;
`
export const Image1 = styled.div`
  background: url(${milkbottlesDesktop}) no-repeat center/cover;
`
export const Image2 = styled.div`
  background: url(${orangeDesktop}) no-repeat center/cover;
`
export const Image4 = styled.div`
  background: url(${sugarcubesDesktop}) no-repeat center/cover;
`
