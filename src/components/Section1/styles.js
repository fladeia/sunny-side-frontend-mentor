import styled from 'styled-components'
import transformDesktop from '../../images/desktop/image-transform.jpg'
import transformMobile from '../../images/mobile/image-transform.jpg'

export const Container = styled.div`
  display: grid;

  @media (min-width: 1024px) {
    grid-template-columns: 50% 50%;
  }

  @media (max-width: 1024px) {
    grid-template-rows: 42% 58%;
  }
`

export const Info = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 14rem 12rem;

  @media (max-width: 1024px) {
    height: 44rem;
    order: 2;
    padding: 4rem;
    text-align: center;
    align-items: center;
  }
`

export const Subtitle = styled.h2`
  font-family: 'Fraunces', serif;
  font-size: 4.5rem;
  font-weight: 900;

  @media (max-width: 1024px) {
    font-size: 3.5rem;
  }
`

export const Text = styled.p`
  font-family: 'Barlow', sans-serif;
  font-size: 1.9rem;
  color: var(--veryDarkGrayishBlue);
`

export const Span = styled.span`
  width: 12rem;
  font-family: 'Fraunces', serif;
  font-size: 1.6rem;
  text-transform: uppercase;
  background: linear-gradient(
    to bottom,
    transparent 50%,
    hsl(51, 100%, 49%) 100%
  ); //FIX

  :hover {
    cursor: pointer;
    background: linear-gradient(
      to bottom,
      transparent 50%,
      hsl(51, 100%, 49%) 50%
    ); //FIX
  }
`

export const Img = styled.div`
  height: 60rem;
  background: url(${transformDesktop}) no-repeat center/cover;

  @media (max-width: 1024px) {
    order: 1;
    height: 31.2rem;
    background: url(${transformMobile}) no-repeat center/cover;
  }
`
