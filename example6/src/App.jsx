import { useState } from 'react'
import Count from '../components/Count'
import "./index.css"

export default function App() {
  /**
   * Challenge: Set up state to track our count (initial value is 0)
   */
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount((oldValue) => {
      return oldValue + 1
    })
  }

  const decrease = () => {
    setCount((oldValue) => {
      return oldValue - 1
    })
  }

  return (
      <div className="counter">
      <button
        className="counter--minus"
        onClick={decrease}
      >–</button>
      <Count number={count} />
      <button
        className="counter--plus"
        onClick={increase}
      >+</button>
      </div>
  )
}
