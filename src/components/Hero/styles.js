import styled from 'styled-components'
import heroImageDesktop from '../../images/desktop/image-header.jpg'
import heroImageMobile from '../../images/mobile/image-header.jpg'

export const Container = styled.div`
  height: 80vh;
  background: url(${heroImageDesktop}) no-repeat center/cover;
  display: grid;
  grid-template-rows: 23% 37%;

  @media (max-width: 1024px) {
    grid-template-rows: 30% 44%;
    height: 60vh;
    background: url(${heroImageMobile}) no-repeat center/cover;
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Text = styled.h1`
  font-family: 'Fraunces', serif;
  font-size: 4rem;
  letter-spacing: 0.7rem;
  text-transform: uppercase;
  text-align: center;
  color: var(--white);
  padding-inline: 2rem;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`
