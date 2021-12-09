import styled from 'styled-components'
import GraphicDesktop from '../../images/desktop/image-graphic-design.jpg'
import PhotographDesktop from '../../images/desktop/image-photography.jpg'
import GraphicMobile from '../../images/mobile/image-graphic-design.jpg'
import PhotographMobile from '../../images/mobile/image-photography.jpg'

export const Container = styled.div`
  display: grid;

  @media (min-width: 1024px) {
    grid-template-columns: 50% 50%;
  }
`

export const Info = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 14rem 16rem 6rem;
  text-align: center;

  @media (max-width: 1024px) {
    padding: 4rem;
    text-align: center;
    align-items: center;
  }
`

export const Subtitle = styled.h2`
  font-family: 'Fraunces', serif;
  font-size: 3rem;
  color: ${props =>
    props.photography ? 'var(--darkBlue)' : 'var(--darkDesaturatedCyan)'};

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }
`

export const Text = styled.p`
  font-family: 'Barlow', sans-serif;
  font-size: 1.5rem;
  line-height: 2.5rem;
  margin-top: 3rem;
  color: ${props =>
    props.photography ? 'var(--darkBlue)' : 'var(--darkDesaturatedCyan)'};
`

export const ImgGraphic = styled.div`
  //refac
  display: flex;
  align-items: flex-end;
  height: 60rem;
  background: url(${GraphicDesktop}) no-repeat center/cover;

  @media (max-width: 1024px) {
    background: url(${GraphicMobile}) no-repeat center/cover;
  }
`

export const ImgPhotograph = styled.div`
  //refac
  display: flex;
  align-items: flex-end;
  height: 60rem;
  background: url(${PhotographDesktop}) no-repeat center/cover;

  @media (max-width: 1024px) {
    background: url(${PhotographMobile}) no-repeat center/cover;
  }
`
