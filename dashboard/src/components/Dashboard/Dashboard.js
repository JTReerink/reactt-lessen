import React from "react";
import LeftPane from "../LeftPane/LeftPane";
import RightPane from "../RightPane/RightPane";
import Popup from "../Popup/Popup";
import bloemenImg from "../../img/flowers.jpg";
import ananasImg from "../../img/ananas.jpg";
import kaarsImg from "../../img/kaars.jpg";
import skyImg from "../../img/sky.jpg";
import "./Dashboard.css";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { productCards: [], open: true };
    }

    onButtonClicked = () => {
        this.setState({ open: !this.state.open })
    }


    componentDidMount() {
        let productCards = [
            {
                name: "Placeholder",
            },
            {
                name: "Bloemen",
                img: bloemenImg
            },
            {
                name: "Ananas",
                img: ananasImg
            }
        ];
        this.setState({ productCards: productCards })
    }

    addButtonClicked = (inputFromPopup) => {
        let toBeAddedImg;
        switch (inputFromPopup) {
            case ("Ananas"):
                toBeAddedImg = ananasImg;
                break;
            case ("Bloemen"):
                toBeAddedImg = bloemenImg;
                break;
            case ("Kaars"):
                toBeAddedImg = kaarsImg;
                break;
            default:
                toBeAddedImg = skyImg;
                break;
        }

        let toBeAdded = [
            {
                name: inputFromPopup,
                img: toBeAddedImg
            }
        ]

        let mergedArrays = this.state.productCards.concat(toBeAdded);
        this.setState({
            productCards: mergedArrays,
            open: !this.state.open,
        })
    }

    render() {
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
        if (this.state.open === true) {
            return (
                <article className="dashboard">
                    <LeftPane navigationListItems={navigationListItems} buttonText="Go Premium"></LeftPane>
                    <RightPane onButtonClicked={this.onButtonClicked} productCards={this.state.productCards} headerText="Mijn Producten" buttonSymbol="+" buttonText="Voeg een product toe"></RightPane>
                </article>
            )

        } return (
            <Popup addButtonClicked={this.addButtonClicked} />
        );

    }
};

export default Dashboard;