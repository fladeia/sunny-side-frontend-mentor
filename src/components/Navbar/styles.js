import styled from 'styled-components'

export const Container = styled.div`
  height: 7rem;
  width: 94%;
  display: grid;
  grid-template-columns: 12rem 1fr 12rem;
  align-items: center;
  justify-self: center;
  justify-items: flex-end;
`

export const Logo = styled.img`
  width: 11rem;
`

export const UnorderList = styled.ul`
  width: 20rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ListItem = styled.li`
  font-family: 'Barlow', sans-serif;
  color: var(--white);
  list-style-type: none;
`
export const Button = styled.div`
  padding: 1.2rem 2.2rem;
  font-family: 'Fraunces', serif;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 2rem;
  background-color: var(--white);
  text-transform: uppercase;
`
