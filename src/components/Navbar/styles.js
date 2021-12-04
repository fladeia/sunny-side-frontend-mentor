import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  padding-inline: 2rem;
  display: grid;
  grid-template-columns: 10rem 1fr;
  align-items: center;
`

export const NavOptions = styled.div`
  width: 28rem;
  display: flex;
  justify-content: space-between;
  justify-self: end;
`

export const Ul = styled.ul`
  width: 65%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Li = styled.li`
  font-family: 'Barlow', sans-serif;
  color: var(--white);
  list-style-type: none;
`
export const Button = styled.div`
  width: 7rem;
  padding: 0.9rem;
  font-size: 0.8rem;
  font-weight: 900;
  border-radius: 2rem;
  background-color: var(--white);
  text-align: center;
  text-transform: uppercase;
`
