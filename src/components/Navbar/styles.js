import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 2rem;
`

export const NavOptions = styled.div`
  display: flex;
`

export const Ul = styled.ul`
  margin-right: 2rem;
  display: flex;
  align-items: center;
`

export const Li = styled.li`
  font-family: 'Barlow', sans-serif;
  color: var(--white);
  list-style-type: none;
`
export const Button = styled.div`
  width: 7rem;
  padding: 0.7rem;
  font-size: 0.8rem;
  font-weight: 900;
  border-radius: 2rem;
  background-color: var(--white);
  text-align: center;
  text-transform: uppercase;
`
