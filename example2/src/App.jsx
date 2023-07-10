import Joke from "../components/Joke"
import jokesData from "./jokesData"

function App() {
  const jokeElements = jokesData.map(joke => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />
})
  return (
    <>
      {jokeElements}
    </>
  )
}

export default App
