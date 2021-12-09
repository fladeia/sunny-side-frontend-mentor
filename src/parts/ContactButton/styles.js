import styled from 'styled-components'

export const Button = styled.div`
  padding: 1.8rem 3.2rem;
  font-family: 'Fraunces', serif;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 3rem;
  background-color: var(--white);
  text-transform: uppercase;
  transition: background-color 0.3s, color 0.3s;

  :hover {
    background-color: hsl(0, 0%, 100%, 0.3);
    color: var(--white);
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    background-color: var(--yellow);

    :hover {
      background-color: hsl(51, 100%, 49%, 0.3);
      color: #000;
    }
  }
`
