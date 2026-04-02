type CountryProps = {
    img:string
    country:string
    location:string
    year:string
    description:string
}

export default function Entry({img,country,location,year,description}:CountryProps){
    return(
        <>
        <article className="entry-article">
            <img src={img} alt="japan"></img>
            <div className="article-content">
                <h5 className="country">{country}</h5>
                <h1>{location}</h1>
                <h5>{year}</h5>
                <p>{description}</p>
            </div>
        </article>
        </>
    )
}