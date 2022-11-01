import "./Card.css"; 
const Card = (props) => {
    let cardImage = <img src={"/img/" + props.image} alt="" />
    if(props.image === undefined) {
        cardImage = <img src={"/img/bonen.jpg"} alt="Bonen" />
    }
    return(
        <article class="card">
            <figure class="card__figure">
                {cardImage}
            </figure>
            <section class="card__section">
                <p>
                    {props.koffieText || "Geen tekst te vinden hier"}
                </p>
            </section>
        </article>
    )
}

export default Card;