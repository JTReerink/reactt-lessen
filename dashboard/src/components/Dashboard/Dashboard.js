import LeftPane from "../LeftPane/LeftPane";
import RightPane from "../RightPane/RightPane";
import "./Dashboard.css";

const Dashboard = () => {
    let navigationListItems = [
        {
            name: "Home",
            message: 0
        },
        {
            name: "Facturen",
            message: 1
        },
        {
            name: "Bestellingen",
            message: 0
        },
        {
            name: "Retour",
            message: 1
        },
        {
            name: "Contact",
            message: 0
        }
    ];

    let productCards = [
        "Placeholder"
    ]
    return(
        <article className="dashboard">
            <LeftPane navigationListItems= {navigationListItems} buttonText="Go Premium"></LeftPane>
            <RightPane productCards={productCards} headerText="Mijn Producten" buttonSymbol="+" buttonText="Voeg een product toe"></RightPane>
        </article>
    )
};

export default Dashboard;