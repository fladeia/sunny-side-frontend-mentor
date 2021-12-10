import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
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
    color: var(--white);
    list-style-type: none;
  }

  @media (max-width: 1024px) {
    display: ${props => (props.test ? 'flex' : 'none')};
    clip-path: polygon(94% 7%, 100% 0, 100% 19%, 100% 100%, 0 100%, 0 7%);
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 12rem;
    left: 7%;
    right: 7%;
    padding: 4rem 0;
    background-color: var(--white);

    ul {
      flex-direction: column;
      gap: 2rem;
    }

    li {
      color: var(--veryDarkGrayishBlue);
    }
  }
`
