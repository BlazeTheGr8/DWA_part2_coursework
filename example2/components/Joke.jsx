export default function Joke(props) {
    const {setup, punchline} = props
    return (
        <div>
            <h1>{setup}</h1>
            <h2>{punchline}</h2>
            <hr />
        </div>
    )
}