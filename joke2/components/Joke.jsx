import { useState } from "react"
import "../src/index.css"

export default function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
    const [isShown, setIsShown] = useState(false)

    const toggle = () => {
        console.log(isShown)
        setIsShown((prev) => !prev)
    }

    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            {<button onClick={toggle}>{isShown ? 'Hide' : 'Show'} Punchline</button>}
            <hr />
        </div>
    )
}