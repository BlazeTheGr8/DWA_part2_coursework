export default function Joke(props) {
    const {setup, punchline} = props

    return (
        <div>
            <p>{setup}</p>
            <p>{punchline}</p>
        </div>
    )
}