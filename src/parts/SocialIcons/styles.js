import styled from 'styled-components'

export const Socials = styled.div`
  ul {
    display: flex;
    list-style-type: none;
    gap: 3rem;
  }
`

export const IconWrapper = styled.div`
  svg {
    fill: hsl(167, 40%, 24%);

    :hover {
      fill: var(--white);
    }
  }
`
