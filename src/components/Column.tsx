import React from "react"
import styled from "styled-components"
import Item from "./Item"

const Column = ({name, items, children}:any) => {

  let columnTotal = items.reduce((a,e,i) => {
    return a+= e.potentialValue
  },0)

  let columnItems = items.map((el, i) => (
    <Item leadInfo={el} key={i}/>
  ))

  return(
    <ColumnContainer>
      <ColumnInfo>
        <span className="columnTitle">{name}</span>
        <span className="columnTotal">${columnTotal}</span>
      </ColumnInfo>
      {columnItems}
    </ColumnContainer>
  )
}

const ColumnContainer = styled.div`
  box-sizing: border-box;
  box-shadow: 3px 3px 5px 3px #aaa,
              -3px -3px 5px 3px #fff;
  background: #eee;
  margin: 1rem;
  height: 100%;
  border-radius: 1.3rem;
`

const ColumnInfo = styled.div`
  
  padding: 1rem;
  display: flex;
  flex-direction: column;
  
  .columnTitle {
    font-size: 1.3rem;
    font-weight: bold;
  }
  .columnTotal {
    color: green;
  }

  span {
    text-align: left;
  }


`

export default Column