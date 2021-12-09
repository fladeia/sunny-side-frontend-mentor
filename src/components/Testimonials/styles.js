import styled from 'styled-components'

export const Container = styled.div`
  display: grid;

  @media (min-width: 1024px) {
    height: 78rem;
    grid-template-rows: 35% 65%;
    grid-template-columns: 30% 30% 30%;
    justify-content: center;
  }

  @media (max-width: 1024px) {
  }
`

export const Subtitle = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  font-family: 'Fraunces', serif;
  font-size: 3rem;
  place-self: center;
  color: var(--veryDarkGrayishBlue);
`

export const Info = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 96px;
    height: 96px;
    border-radius: 50%;
  }
`

export const Text = styled.p`
  font-family: 'Barlow', sans-serif;
  font-size: 1.9rem;
  color: var(--veryDarkGrayishBlue);
  text-align: center;
  margin: 5rem 0;
  line-height: 3rem;
`

export const Name = styled.h2`
  font-family: 'Fraunces', serif;
  font-size: 2rem;

  @media (max-width: 1024px) {
    /* font-size: 3.5rem; */
  }
`

export const Role = styled.span`
  font-family: 'Barlow', sans-serif;
  font-size: 1.2rem;
  margin-top: 1.5rem;
  color: var(--grayishBlue);
`
