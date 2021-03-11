import React from "react"
import styled from "styled-components"
import IconButton from "./IconButton"
import TagContainer from "./Tags"

const ItemContainer = styled.div`
  box-sizing: border-box;
  width: 180px;
  background: #eee;
  border-radius: 0.5rem;
  box-shadow: 3px 3px 5px 3px #aaa,
              -3px -3px 5px 3px #fff;
  min-height: 50px;
  margin: 1rem;
  padding: 0.5rem;
  cursor: grab;
  display: grid;
  grid-template: "name edit" auto
                 "photo value" auto
                 "tags note" auto
                 "contact note" auto / 4fr 1fr;
  transition: transform 150ms ease-in-out;
  :active {
    cursor: grabbing;
  }
  :hover {
    transform: scale(1.02)
  }
`

const ValueSpan = styled.span`
  color: green;
  grid-area: value;
  font-weight: bold;
`

const TextButton = styled.button`
  border: none;
`

const Item = ({leadInfo}:any) => {


  return(
    <ItemContainer>
      <div style={{gridArea: "name", textAlign: "left"}}>{leadInfo.name}</div>
      <IconButton fillColor="#555" icon="fa-pen" style={{gridArea:"edit", textAlign: "right"}}/>
      <TagContainer tags={leadInfo.tags}/>

      <ValueSpan>${ leadInfo.potentialValue }</ValueSpan>
      <div style={{gridArea: "contact", textAlign: "left"}}>
        <IconButton fillColor="blue" icon="fa-comment-alt"/>
        <IconButton fillColor="green" icon="fa-phone"/>
      </div>
    </ItemContainer>
  )
}


export default Item