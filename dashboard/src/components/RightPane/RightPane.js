import "./RightPane.css";

const RightPane = ({ headerText, buttonSymbol, buttonText, productCards }) => {
    let productCardsToBeRendered = productCards.map(product => {
        if (product === "Placeholder") {
            return (
                <li className="productsList__item">
                    <button className="productsList__button">{buttonSymbol || "*"}</button>
                    <p className="productsList__text">{buttonText || "lorem"}</p>
                </li>
            )
        } return null;
    })
    return (
        <section className="productsWrapper">
            <header className="header">
                <h1 className="header__h1">Mijn Producten</h1>
            </header>
            <ul className="productsList">
                {productCardsToBeRendered}
            </ul>
        </ section>
    )
};

export default RightPane;