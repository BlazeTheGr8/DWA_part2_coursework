import { useState } from 'react'
import boxes from "./boxes"
import Box from './components/Box'
import "./index.css"


function App(props) {

  const [squares, setSquares] = useState(boxes)

  const toggle = id => {
    setSquares(prev => {
      return prev.map(square => {
        return id === square.id ? {
          ...square,
          on: !square.on
         } : square
       })
    })
  }

  const squareElements = squares.map(square => {
    return <Box
      key={square.id}
      id={square.id}
      on={square.on}
      toggle={() => toggle(square.id)}
    />
  })

  return (
    <main>
      {squareElements}
    </main>
  )
}

export default App

// This is a longer version of the toggle function
      // const newArray = []
      // for (let square of prev) {
      //   if (square.id === id) {
      //     const newSquare = {
      //       ...square,
      //       on: !square.on
      //     }
      //     newArray.push(newSquare)
      //   } else {
      //     newArray.push(square)
      //   }
        
      // } 
      // return newArray