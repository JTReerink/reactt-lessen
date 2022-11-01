import React from "react";
import "./Input.css";

class Input extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {inputValue: " "}
    }

    update = (event) => {
        this.setState({inputValue: event.target.value}, () => {console.log(this.state.inputValue)});
    }

    enter = (event) => {
        if(event.keyCode === 13 && this.state.inputValue !== "") {
            this.props.inputPressedEnter(this.state.inputValue);
            this.state.inputValue = "";
        }
    }
    
    
    render() {
        return (
            <input onKeyUp={this.enter} onChange={this.update} value={this.state.inputValue} type="text" className="input" />
        )
    }
};

export default Input;