import styled from 'styled-components'

export const Nav = styled.nav`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 4rem;
`

export const Logo = styled.img`
  width: 15rem;
`

export const Menu = styled.div`
  display: flex;
  gap: 5rem;

  ul {
    width: 30rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    font-family: 'Barlow', sans-serif;
    font-size: 1.8rem;
    color: var(--darkDesaturatedCyan);
    list-style-type: none;
  }

  @media (max-width: 1024px) {
    ul {
      width: 28rem;
    }
  }
`
