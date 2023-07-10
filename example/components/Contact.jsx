import "../src/index.css"

export default function Contact(props) {
    const {img, name, phone, email} = props

    return (
        <div className="contact-card">
                <img src={img}/>
                <h3>{name}</h3>
                <div className="info-group">
                    <img src="../src/assets/phone-icon.png" />
                    <p>{phone}</p>
                </div>
                <div className="info-group">
                    <img src="../src/assets/mail-icon.png" />
                    <p>{email}</p>
                </div>
        </div>
    )
}