import React from "react";
import "./Item.css";

class Item extends React.Component {

    constructor(props){
        super(props);
        this.className = "lijst__item";
        this.state = {name: this.props.name, done: this.props.done}
    }



    render() {
        return(
            <li className={this.className}>{this.state.name}</li>
        )

    }
};

export default Item;