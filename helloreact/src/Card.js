import "./Card.css";
const Card = (props) => {
    
    
    return(
        <article onClick={props.mouseclick}>
            <header>
                <h2>
                    {props.title || "Placeholder Title"}
                </h2>
            </header>
            <section>
                {props.text || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laborum maxime est aut similique dolor corrupti vero, aspernatur iusto dicta ab, in hic assumenda illum, corporis voluptatem explicabo rerum ea?"}
            </section>
        </article>
    );
}

export default Card;