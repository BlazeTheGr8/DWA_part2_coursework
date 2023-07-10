import "../src/index.css"
import React from "react"


export default function App() {
  const [things, setThings] = React.useState(["Thing 1", "Thing 2"])
  
  /**
   * Challenge: Map over the thingsArray to generate
   * a <p> element for each item and render them on the page
   * below the button
   */
  const items = things.map((item) => {
      return <p key={item}>{item}</p>
  })
  const addItem = () => {
    const newThingText = `Thing ${things.length + 1}`
    setThings(prevState => [...prevState, newThingText])  }

  return (
      <div>
          <button onClick={addItem}>Add Item</button>
          {items}
      </div>
  )
}
