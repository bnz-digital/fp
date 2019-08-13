import styled from 'styled-components'

const CardTitle = styled.h2`
  color: LightSlateGray;
  font-size: 1.2rem;
  margin: 0.5rem;
  padding: 0;
  cursor: pointer;

  &:before {
    content: '';
  }
  &:hover {
    text-decoration: none;
  }
`

export default CardTitle
