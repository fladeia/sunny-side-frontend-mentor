import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 3rem;
`

export const Logo = styled.img`
  width: 15rem;
`

export const Menu = styled.div`
  display: flex;
  gap: 3rem;

  ul {
    width: 30rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    font-family: 'Barlow', sans-serif;
    font-size: 1.9rem;
    color: var(--white);
    list-style-type: none;
  }

  @media (max-width: 1024px) {
    display: ${props => (props.test ? 'flex' : 'none')};
    clip-path: polygon(94% 7%, 100% 0, 100% 19%, 100% 100%, 0 100%, 0 7%);
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 9rem;
    left: 3rem;
    right: 3rem;
    padding: 6rem 0 5rem;
    background-color: var(--white);

    ul {
      flex-direction: column;
      gap: 3rem;
    }

    li {
      color: var(--veryDarkGrayishBlue);
    }
  }
`
