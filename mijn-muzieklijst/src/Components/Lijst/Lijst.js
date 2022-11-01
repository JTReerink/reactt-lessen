import React from "react";
import Input from "../Input/Input";
import Item from "../Item/Item";
import Items from "../../data/MuziekItems"
import "./Lijst.css";

class Lijst extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
    }

    componentDidMount() {
        this.setState({ items: Items.muziekItems});
    }

    inputPressedEnter = (inputFromInputComponent) => {
        let toBeAdded = [
            {
                name: inputFromInputComponent,
                id: this.state.items.length + 1,
            }
        ]
        let mergedArray = this.state.items.concat(toBeAdded);
        this.setState({
            items: mergedArray,
        },
        console.log(this.state.items)
        )
    }
    
    render(){

        let item = this.state.items.map(muziekItem => {
            return <Item key={muziekItem.id} name={muziekItem.name} />
        })
        return(
            <article className="lijst">
                <header className="lijst__header">
                    <h1 className="lijst__heading">Muzieklijst</h1>
                </header>
                <ul className="lijst__list">
                    {item}
    
                </ul>
                <Input inputPressedEnter={this.inputPressedEnter}/>
            </article>
        )
    }
};

export default Lijst;