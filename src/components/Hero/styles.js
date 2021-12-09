import styled from 'styled-components'
import heroImageDesktop from '../../images/desktop/image-header.jpg'
import heroImageMobile from '../../images/mobile/image-header.jpg'

export const Container = styled.div`
  height: 80rem;
  background: url(${heroImageDesktop}) no-repeat center/cover;

  @media (max-width: 1024px) {
    height: 54rem;
    background: url(${heroImageMobile}) no-repeat center/cover;
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 10rem;
  }

  @media (max-width: 1024px) {
    img {
      margin-top: 4rem;
    }
  }
`

export const Text = styled.h1`
  font-family: 'Fraunces', serif;
  font-size: 6rem;
  font-weight: 900;
  letter-spacing: 0.7rem;
  text-transform: uppercase;
  color: var(--white);
  margin-top: 6rem;

  @media (max-width: 1024px) {
    font-size: 4rem;
    margin-top: 4rem;
  }

  @media (max-width: 480px) {
    text-align: center;
  }
`
