export default function Card(props) {
    const { id, title, description, price, coverImg, stats, location, openSpots } = props
    console.dir(props)
    let badgeText
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../src/assets/${coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src={"../src/assets/star.png" }className="card--star" />
                <span>{stats.rating}</span>
                <span className="gray">{stats.reviewCount} • </span>
                <span className="gray">{location}</span>
            </div>
            <p className="card--title">{title}</p>
            <p className="card--price"><span className="bold">From ${price}</span> / person</p>
        </div>
    )
}