import styled from 'styled-components'
import heroImage from '../../images/desktop/image-header.jpg'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${heroImage}) no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Text = styled.h1`
  margin-bottom: 4rem;
  font-family: 'Fraunces', serif;
  color: var(--white);
`
