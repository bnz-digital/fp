import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const StyledCardImage = styled.img`
  cursor: pointer;
  margin: 0;
  padding: 0;
  width: 100%;
`
StyledCardImage.displayName = 'StyledCardImage'

export default function CardImage ({ name, to }) {
  return (
    <Link to={to}>
      <StyledCardImage src={`/images/${name}`} />
    </Link>
  )
}
