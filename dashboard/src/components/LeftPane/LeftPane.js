import "./LeftPane.css";

const LeftPane = ({ navigationListItems, buttonText}) => {
    let toBeRenderedNavigationItems = navigationListItems.map(object => {
        let message = null;
        if(object.message > 0) {
            message = <div className="dashboard__message">1</div>
        }
        return (
            <li key={object.name} className="dashboard__li">
                <a href="" className="dashboard__link">
                    {object.name}
                    {message}
                </a>
            </li>
        )
    })
    return (
        <section className="dashboard__wrapper">
            <nav className="dashboard__nav">
                <ul className="dashboard__ul">
                    {toBeRenderedNavigationItems}
                </ul>
            </nav>
            <button className="dashboard__button">{buttonText || "Click Here"}</button>
        </section>
    )
};

export default LeftPane;