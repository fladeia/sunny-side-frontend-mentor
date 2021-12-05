import styled from 'styled-components'
import heroImage from '../../images/desktop/image-header.jpg'

export const Container = styled.div`
  height: 80vh;
  background: url(${heroImage}) no-repeat center/cover;
  display: grid;
  grid-template-rows: 23% 37%;
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
  color: var(--white);
`
