import React from "react"
import styled from "styled-components"

const Tag = styled.span`
  padding: 0.2rem 0.5rem;
  font-size: 0.7rem;
  border-radius: 1.2rem;
  margin: 0.1rem 0.1rem 0 0 ;
  font-weight: bold;
  color: white;
  background: ${props => props.color || "red"};
  cursor: pointer;
`

const TagBox = styled.div`
  margin-bottom: 0.2rem;
  text-align: left;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const TagContainer = ({tags}) => {

  const userTags = {
    new:"red",
    contacted:"pink",
    cold:"blue"
  }

  const displayTags = tags.map((tag, i) => (
    <Tag color={userTags[tag]} key={i}>{tag}</Tag>
  ))

  return(
    <TagBox>
      { displayTags }
    </TagBox>
  )
}

export default TagContainer