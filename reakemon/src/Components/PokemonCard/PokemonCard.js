import { render } from "@testing-library/react";
import React from "react"
import "./PokemonCard.css"

class PokemonCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hp: 0, caught: false }
    }

    componentDidMount() {
        this.setState({ hp: this.props.HP })
    }

    attack = () => {
        let randomNumber = Math.floor(Math.random() * 14 + 1);
        this.setState({
            hp: this.state.hp - randomNumber
        }, function () {
            if (this.state.hp <= 0) {
                this.setState({
                    hp: 0,
                    caught: true,
                })
            }
        })
    }

    catch = () => {
        this.setState({ caught: true });
        let damagePerc = 100 - Math.floor(this.state.hp / this.props.HP * 100);
        console.log(damagePerc);
        let dice = Math.floor(Math.random() * (100 - 1) + 1);
        if (damagePerc > dice) {
            this.props.updateCounter();
        };
    };

    render() {
        let types = this.props.type.map(function (type) {
            return <span key={type} className={`pokemonCard__type pokemonCard__type--${type}`}>{type}</span>
        });
        let buttons = null;
        if (!this.state.caught) {
            buttons =
                <>
                    <button onClick={this.attack} className="pokemonCard__button pokemonCard__button--attack">Attack</button>
                    <button onClick={this.catch} className="pokemonCard__button pokemonCard__button--catch">Catch</button>
                </>
        }
        return (
            <article className="pokemonCard">
                <header className="pokemonCard__header">
                    <h2 className="pokemonCard__title">{this.props.name}</h2>
                    <div className="pokemonCard__labelWrapper">
                        {types}
                    </div>
                </header>
                <section className="pokemonCard__section">
                    <figure className="pokemonCard__figure">
                        <img src={this.props.image} alt="" className="pokemonCard__img" />
                    </figure>
                    <div className="pokemonCardh3Wrapper">
                        <h3 className="pokemonCard__HP">{this.state.hp}</h3>
                    </div>
                </section>
                <footer className="pokemonCard__footer">
                    {buttons}
                </footer>

            </article>
        )

    }
};

export default PokemonCard;