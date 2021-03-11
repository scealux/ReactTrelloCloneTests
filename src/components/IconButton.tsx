import React from "react"
import styled from "styled-components"

const IconButtonContainer = styled.button`
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  outline: none;
  
  cursor: pointer;
  color: ${(props) => props.fillColor || "black"};
  padding: 0.3rem;
  :hover {
    opacity: 0.5;
    background: #ddd;
  }
`

const IconButton = ({fillColor, icon, children, style}) => {

  return(
    <IconButtonContainer fillColor={fillColor || "black"} style={style}>
      <i className={`fas ${icon}`}></i>
      {children}
    </IconButtonContainer>
  )
}

export default IconButton