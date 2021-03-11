import "../styles.css";
import React from "react"
import style, { createGlobalStyle } from "styled-components"
import Board from "./Board"
import Column from "./Column"
//@ts-ignore
import testData from "../testData"

let boardColumns = testData.map((el, i) => (
  <Column name={el.column_title} items={el.items} key={i}/>
))



export default function App() {
  return (
    <>
      <GlobalStyles/>
      <div className="App">
        <Board>
         {boardColumns}
        </Board>
      </div>
    </>
  );
}

const GlobalStyles = createGlobalStyle`
  * { margin: 0px; }
  html { height: 100%; }
  body { height: 100%; }
`
