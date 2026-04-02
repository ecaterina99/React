type AnimalProps = {
    img: string
    name: string
    phone: number
    email: string
}

export default function Animals({img, name, phone, email}: AnimalProps) {
    return (
        <article className="contact-card">
            <img
                src={img}
                alt="Photo of cat"
            />
            <h3>{name}</h3>
            <div className="info-group">

                <p>{phone}</p>
            </div>
            <div className="info-group">

                <p>{email}</p>
            </div>
        </article>
    )
}

