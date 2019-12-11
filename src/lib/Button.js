import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  appearance: none;
  border: none;
  background: none;
  color: #6002EE;
  font-size: 18px;
  text-transform: uppercase;
  font-family: Roboto;
  border-radius: 3px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background: #efe5fd;
  }
`

export const Button = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>
    {children}
  </StyledButton>
)
