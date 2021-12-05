import styled from 'styled-components'

export const Container = styled.div`
  height: 7rem;
  width: 94%;
  display: grid;
  grid-template-columns: 12rem 1fr 12rem;
  align-items: center;
  justify-self: center;
  justify-items: flex-end;

  @media (max-width: 1024px) {
    grid-template-columns: 12rem 1fr;
  }
`

export const Logo = styled.img`
  width: 11rem;
`

export const UnorderList = styled.ul`
  display: none;

  @media (min-width: 1024px) {
    width: 20rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const ListItem = styled.li`
  font-family: 'Barlow', sans-serif;
  color: var(--white);
  list-style-type: none;
`
export const Button = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    padding: 1.2rem 2.2rem;
    font-family: 'Fraunces', serif;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 2rem;
    background-color: var(--white);
    text-transform: uppercase;
  }

  :hover {
    background-color: hsl(0, 0%, 100%, 0.3);
    color: var(--white);
    cursor: pointer;
  }
`

export const IconHamburger = styled.img`
  display: none;

  @media (max-width: 1024px) {
    display: block;
    width: 2rem;
  }
`
