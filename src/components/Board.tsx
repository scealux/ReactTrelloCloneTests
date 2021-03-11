import React from "react"
import styled from "styled-components"

const Board = ({children}) => {


  return(
    <BoardContainer>
      {children}
    </BoardContainer>
  )
}

const BoardContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: #eee;
  display: flex;
  padding: 1rem;
  overflow-x: scroll;

`

export default Board