import styled from 'styled-components'

export const Container = styled.div`
  height: 1256px;
  display: grid;

  @media (min-width: 1024px) {
    height: 78rem;
    grid-template-rows: 35% 65%;
    grid-template-columns: 30% 30% 30%;
    justify-content: center;
  }

  @media (max-width: 1024px) {
    grid-template-rows: 10% 1fr 1fr 1fr;
    grid-template-columns: initial;
  }
`

export const Subtitle = styled.div`
  font-family: 'Fraunces', serif;
  place-self: center;
  color: var(--darkGrayishBlue);
  font-size: 3rem;
  text-transform: uppercase;

  @media (min-width: 1024px) {
    grid-column-start: 1;
    grid-column-end: 4;
  }

  @media (max-width: 1024px) {
    font-size: 1.7rem;
    letter-spacing: 3px;
  }
`

export const Info = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 82px;
    height: 82px;
    border-radius: 50%;
  }
`

export const Text = styled.p`
  width: 90%;
  font-family: 'Barlow', sans-serif;
  font-size: 1.9rem;
  color: var(--veryDarkGrayishBlue);
  text-align: center;
  margin: 5rem 0;
  line-height: 3rem;

  @media (max-width: 1024px) {
    width: 95%;
    margin: 3.5rem 0;
  }
`

export const Name = styled.h2`
  font-family: 'Fraunces', serif;
  font-size: 2rem;
`

export const Role = styled.span`
  font-family: 'Barlow', sans-serif;
  font-size: 1.4rem;
  margin-top: 1.2rem;
  color: var(--grayishBlue);
`
